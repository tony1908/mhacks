/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var UI = require('ui');
var card = new UI.Card({
});
card.show();
navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  //var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      //'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
  
    var ajax = require('ajax');

ajax(
  {
    url: 'https://morning-brook-3318.herokuapp.com/status/',
    type: 'json',
    method: 'post',
    data: {
      status: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        status: 'emergencia'
  }
    }
  },
  function(data) {

    card.title( 'Done');
  },
  function(error) {
    console.log( error);
  }
);
 
  
  
  });



