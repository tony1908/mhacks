var UI = require('ui');
var card = new UI.Card({
  
});
card.show();
var ajax = require('ajax');
ajax({ url: 'https://peaceful-journey-1005.herokuapp.com/message/', method: 'post', type: 'json',  data: {
  message: {
    message: 'emergencia'
  }
     }
     },
  //function(data) {
    //card.body(data.message);
    //card.title(data.contents.author);
    //card.title('new');
    // card.body(data.contents.quote);
   // message: 'prueba pebble';
  //}
     function(data) {
  // Success!
  console.log(JSON.stringify(data));
},
function(error) {
  // Failure!
  console.log('no response');
}
);
 