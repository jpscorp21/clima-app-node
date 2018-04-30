const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9693bb9e053d5c519c389c1f960412eb`)

    if (resp.data.cod === "400") {
        throw new Error(`No hay resultados para el clima con latitud ${lat} y con longitud ${lng}`);
    }
    
    let temp = resp.data.main.temp;
    return temp;
}

module.exports = {
    getClima
}