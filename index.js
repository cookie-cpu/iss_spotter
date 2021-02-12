const {fetchMyIp} = require('./iss.js');
const {fetchCoordsByIp} = require('./iss.js');
const {fetchISSFlyOverTimes} = require('./iss.js');
const {nextISSTimesForMyLocation} = require('./iss.js');


nextISSTimesForMyLocation((error, passTimes) => {

  if (error){
    return console.log("Didn't work!:", error);
  }
  for (let pass of passTimes){
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass is at ${date} for ${duration} seconds`)
  }
})