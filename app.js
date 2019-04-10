const axios = require('axios');

const location = require('./location/location');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Address to obtain the weather',
        demand: true
    }
}).argv;

// location.getLocationLatLng(argv.address)
//     .then(console.log);

// weather.getWeather(46.450001, -63.380001)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(address) => {
    try {
        const infoLatLng = await location.getLocationLatLng(argv.address);
        const infoWeather = await weather.getWeather(infoLatLng.lat, infoLatLng.lng);

        return `The weather in ${infoLatLng.location} is ${infoWeather}ºC`;
    } catch (error) {
        return `Unknown weather for ${infoLatLng.location}`;
    }
};

getInfo(argv.address)
    .then(console.log)
    .catch(console.log);