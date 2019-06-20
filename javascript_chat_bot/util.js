const rp = require('request-promise');

const isQuestion = msg => msg.match(/\?$/);
const isAskingTime = msg => msg.match(/time/);
const isAskingWeather = msg => msg.match(/weather/);

const getWeather = async () => {
    try {
        const data = await rp.get('https://www.metaweather.com/api/location/3534/', { json: true });
        const { consolidated_weather: weatherData } = data;
        const { weather_state_name: weatherStateName } = weatherData[0];
        return weatherStateName;
    } catch (e) {
        console.log(e);
        return e;
    }
};


module.exports = {
    isQuestion,
    isAskingTime,
    isAskingWeather,
    getWeather,
};
