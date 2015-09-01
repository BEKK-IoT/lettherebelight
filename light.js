var raspi = require('raspi-io');
var five = require('johnny-five');
var Firebase = require('firebase');
var lightRef = new Firebase('https://lettherebelight.firebaseio.com/switch');
var board = new five.Board({
  io: new raspi()
});

board.on('ready', function() {
        var lamp = new five.Relay({pin:'P1-22', type: 'NC'});
        var tv = new five.Relay({pin:'P1-21', type: 'NC'});
        this.repl.inject({
            lamp: lamp,
            tv: tv
        });
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
