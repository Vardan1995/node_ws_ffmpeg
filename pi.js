const { exec } = require('child_process')
const { WebSocket } = require('ws')
const dgram = require('dgram')
const udpSocket = dgram.createSocket("udp4");
const UDP_STREAM_ADDR = "127.0.0.1";
const UDP_STREAM_PORT = 8080;
udpSocket.bind(UDP_STREAM_PORT, UDP_STREAM_ADDR);




async function init() {
    const { stderr } = await exec(`ffmpeg -f dshow -i video="USB2.0 PC CAMERA" -preset ultrafast -f mpegts -codec:v mpeg1video -s 640x480 -b:v 1024k -bf 0 udp://127.0.0.1:8080`)
}

init().then(() => {
    const socket = new WebSocket('ws://127.0.0.1:8088');
    socket.addEventListener('open', function (event) {
        console.log("connection opened");
        udpSocket.on("listening", () => { });
        udpSocket.on("message", (chunk, rinfo) => {
            socket.send(chunk);
        });
    });

})





