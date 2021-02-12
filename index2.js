// const { fetchCoordsByIp } = require('./iss_promised');
// const { fetchMyIp } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised.js')
const {nextISSTimesForMyLocation} = require('./iss_promised.js')

const printPassTimes = function(passTime) {
  for (const pass of passTime) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()

  .then((passTimes) => {
    printPassTimes(passTimes)})

  .catch((error) => {
    console.log("Error!", error.message)});