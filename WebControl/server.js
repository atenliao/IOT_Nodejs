const express = require('express')

const app = express()

const port = 3000

var five = require("johnny-five");
var board = new five.Board()
const WebSocket = require('ws');
const wss = new WebSocket.Server({port:8080})


app.listen(port, () => { console.log('Listenning port', port) })
app.use('/color',express.static('public'));

board.on('ready',function(){
     led = new five.Led.RGB({
        pins:{
            red:6,
            green:5,
            blue:3
        }
    });
    led.on()
   // led.color('#FFFF00')
    console.log('get initial color')
    wss.on('connection',function (res,req){
        console.log('got wss connected')
        res.on('message',function (data){
            console.log('get the message data', data)
            led.color(data )
        })
    })
})