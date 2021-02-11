const request = require('request');

let url = "https://api.ipify.org?format=json";

const fetchMyIp = function(callback) {
  request(url, (error, response, body) => {
   
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    console.log(body.body);
  });
};

module.exports = {fetchMyIp, };