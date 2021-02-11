const request = require('request');

const fetchMyIp = function(callback) {
  let url = "https://api.ipify.org?format=json";
  request(url, (error, response, body) => {
   
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
    //console.log(ip);
  });
};


const fetchCoordsByIp = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when grabbing coordinates. Response: ${body}`;
      callback(Error(msg),null);
      return;

    }

    const latitude = JSON.parse(body).latitude;
    const longitude = JSON.parse(body).longitude;

    let coords = {};
    coords.latitude = latitude;
    coords.longitude = longitude;

    console.log(coords);

    callback(null, coords);
  });
};

module.exports = {fetchMyIp, fetchCoordsByIp};