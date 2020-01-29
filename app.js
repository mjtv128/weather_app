const request = require('request')
const url =
  "https://api.darksky.net/forecast/3ff4d2a990752fe3b6f00446000da200/37.8267,-122.4233";

request({url:url, json: true}, (error, response, body) => {
    //we would like a request to parse it as json
    //therefore no need to parse it
    console.log(`It is currently ${body.currently.temperature}. THere is a ${body.currently.precipProbability}% chance of rain`)
})

const geoURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGVybWluYWwxMjM0IiwiYSI6ImNrNXpqZ3E5czFpYTUzZ3BvbDRjZWxsMGwifQ.XVAbSXiwYCLUjibRE2wvrQ&limit=1";

request({url: geoURL, json: true}, (error, response, body) => {
      console.log(body.features[0].center)
      //[0] because it is in the array
})


