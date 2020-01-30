const request = require('request')
const geocode = require('./utils/geocode')

const url =
  "https://api.darksky.net/forecast/3ff4d2a990752fe3b6f00446000da200/37.8267,-122.4233";

// request({url:url, json: true}, (error, response, body) => {
//     if (error){
//         console.log("Unable to connect to weather service")
//     } else if (body.error) {
//         console.log('Unable to find location')
//     } else{
//         console.log(`It is currently ${body.currently.temperature}. There is a ${body.currently.precipProbability}% chance of rain`)
//           }
// })

// const geoURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoidGVybWluYWwxMjM0IiwiYSI6ImNrNXpqZ3E5czFpYTUzZ3BvbDRjZWxsMGwifQ.XVAbSXiwYCLUjibRE2wvrQ&limit=1";

// request({url: geoURL, json: true}, (error, response, body) => {
//       if (error){
//           console.log("Unable to connect to location services")
//       } else if (body.features.length === 0){
//           console.log("No matching results")
//       } else {
//          console.log(body.features[0].center);
//       }
// })



geocode('Philadelphia', (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})

