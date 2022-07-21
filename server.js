const { WebSocketServer } = require('ws')
const WS_PORT = 8088;
const wss = new WebSocketServer({
    perMessageDeflate: false,
    port: WS_PORT
});

wss.on('connection', function connection(ws) {
    const broadcast = function broadcast(data) {
        wss.clients.forEach(function (client) {
            if (client !== ws) client.send(data);
        });
    };
    ws.on('message', function message(chunk) {
        broadcast(chunk)
    });
});

