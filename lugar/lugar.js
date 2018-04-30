const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCJirgGReRlkfOF44hZHYZrdeWTAhIe4U0`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error('No hay resultados para la ciudad ' + direccion);
    }   

    let formatted_address = resp.data.results[0].formatted_address;
    let { lat: latitud, lng: longitud } = resp.data.results[0].geometry.location;
    
    return { 
        direccion: formatted_address, 
        lat: latitud, 
        lng: longitud 
    }
}

module.exports = {
    getLugarLatLng
}

