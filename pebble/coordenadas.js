var UI = require('ui');
var ajax = require('ajax');
var card = new UI.Card({
});
card.show();
navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
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

    card.title( 'Danger');
  },
  function(error) {
    console.log( error);
  }
);
 
  
  
  });
card.on('click', 'up', function() {
  navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  //var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      //'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
  
    

ajax(
  {
    url: 'https://morning-brook-3318.herokuapp.com/status/',
    type: 'json',
    method: 'post',
    data: {
      status: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        status: 'Im ok'
  }
    }
  },
  function(data) {

    card.title( 'Im ok');
  },
  function(error) {
    console.log( error);
  }
);
 
  
  
  });
});

card.on('click', 'down', function() {
   
  ajax(
  {
    url: 'https://morning-brook-3318.herokuapp.com/status/',
    type: 'json',
    method: 'post',
    data: {
      status: {
        latitude: '0',
        longitude: '0',
        status: 'made a mistake'
  }
    }
  },
  function(data) {

    card.title( 'made a mistake');
  }
);
 
});

card.on('click', 'select', function() {
  navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  //var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      //'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
  
    

ajax(
  {
    url: 'https://morning-brook-3318.herokuapp.com/status/',
    type: 'json',
    method: 'post',
    data: {
      status: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        status: 'please help me!!!'
  }
    }
  },
  function(data) {

    card.title( 'Need some help');
  },
  function(error) {
    console.log( error);
  }
);
 
  
  
  });
});


