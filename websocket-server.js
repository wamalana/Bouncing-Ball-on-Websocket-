const http = require('http');
const WebSocketServer = require('websocket').server;
var numclient = 0;
var addball = 1; 
const server = http.createServer();
server.listen(9898);

const wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
      console.log('Received Message:', message.utf8Data);
        connection.sendUTF('Hi this is WebSocket server!');
        numclient = numclient + 1;
        addball = 2
        console.log('client :', numclient);
    });
    connection.on('close', function(reasonCode, description) {
        console.log('Client has disconnected.');
        numclient = numclient - 1;
        addball = 0; 
        console.log('client :', numclient);
    });
    setInterval(function () { connection.send(numclient);; }, 100);
});
addball = 1; 