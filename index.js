const {fetchMyIp} = require('./iss.js');
const {fetchCoordsByIp} = require('./iss.js');
const {fetchISSFlyOverTimes} = require('./iss.js');
const {nextISSTimesForMyLocation} = require('./iss.js');


nextISSTimesForMyLocation((error, passTimes) => {

  if (error){
    return console.log("Didn't work!:", error);
  }


  for (let pass of passTimes){
    console.log(`Duration is ${pass.duration} \n Risetime is ${pass.risetime}`)
  }
  //console.log(passTimes);
  //console.log(`Next pass is at ${passTimes.risetime} for ${passTimes.duration} seconds`)
})





// fetchCoordsByIp("205.200.45.176", () => {
//   //console.log(error, data)
// })

// fetchCoordsByIp('162.245.144.188', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });


// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log("Didn't work!: ",error);
//     return;
//   }
//   console.log("It worked! IP: ", ip);
// });

// let sampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(sampleCoords, (error, data) => {
//   if (error) {
//     console.log("Didn't work! ", error);
//     return
//   }

//   console.log("Success! Flyover times: ", data)
// });


