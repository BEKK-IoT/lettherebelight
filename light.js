var raspi = require('raspi-io');
var five = require('johnny-five');
var Firebase = require('firebase');
var lightRef = new Firebase('https://hemmeligurl.com/switch');
var board = new five.Board({
  io: new raspi()
});

board.on('ready', function() {
        var lamp = new five.Relay({pin:'P1-22', type: 'NC'});
        lightRef.on('value', function(data){
            if(data.val() == true){
                    console.log("turning on "+data.val());
                    lamp.on();
            } else{
                    console.log("turning off " +data.val());
                    lamp.off();
            }
        });
});
