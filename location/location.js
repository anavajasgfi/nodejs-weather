const axios = require('axios');

const getLocationLatLng = async(address) => {
    const encodedAddress = encodeURI(address);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedAddress}`,
        headers: { 'X-RapidAPI-Key': '01841ea61dmsh95cc63e6508f909p12fc70jsn63dce3c04b43' }
    });

    const resp = await instance.get();
    const results = resp.data.Results;

    if (results.length === 0) {
        throw new Error(`There's no results for "${address}"`);
    }

    const data = results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        location,
        lat,
        lng
    };
};

module.exports = {
    getLocationLatLng
};