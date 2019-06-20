
const express = require('express');
const socketio = require('socket.io');

const app = express();

const http = require('http');
const {
  isQuestion,
  isAskingTime,
  getWeather,
  isAskingWeather,
} = require('./util');

const server = http.Server(app);

app.use(express.static('client'));

const io = socketio(server);


io.on('connection', (socket) => {
  socket.on('message', async (msg) => {
    console.log('Received Message: ', msg);
      if (isAskingTime(msg)) {
      io.emit('message', new Date());
    } else if (isAskingWeather(msg)) {
      const weather = await getWeather();
      io.emit('message', weather);
    } else {
      io.emit('message', msg);
    }
  });
});

server.listen(8080, () => {
  console.log('Chat server running');
});
