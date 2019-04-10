const axios = require('axios');

// appid (default): e653e16b8a00558ec6a34a9538e45efd
// appid de Fernando Herrera (default): 32f843d833c38373032f825c4a92418a
const getWeather = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e653e16b8a00558ec6a34a9538e45efd&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getWeather
};