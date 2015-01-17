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
    url: 'https://peaceful-journey-1005.herokuapp.com/message/',
    type: 'json',
    method: 'post',
    data: {
      message: {
        message: coords.latitude
  }
    }
  },
  function(data) {

    card.title( coords.latitude);
    card.body(coords.longitude);
  },
  function(error) {
    console.log( error);
  }
);
 
  
  
  });



