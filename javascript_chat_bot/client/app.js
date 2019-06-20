const socket = io();

$("button").on('click', function() {
  const messageSelector = $("#message");
  const text = $(messageSelector).val();
  const who = $("#initials").val();

  socket.emit('message', who + ": " + text);
  $(messageSelector).val('');

  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});
