window.onload = function(){
    var socket = new WebSocket('ws://localhost:8080');
    var el = document.getElementById('myColor');
    el.addEventListener('change',function(data){
        socket.send(data.target.value);
    })
}