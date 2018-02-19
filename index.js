require('dotenv').config();

var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;
 
var displayStatus = function(status) {
    console.log(JSON.stringify(status, null, 2));
};
 
var hostname = process.env.BRIDGE_HOST,
    username = process.env.BRIDGE_USER,
    api = new HueApi(hostname, username),
    state = lightState.create();
 

// -------------------------- 
// Using a promise 
 
api.lightStatus(8)
    .then(displayStatus)
    .done();