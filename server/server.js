const express = require('express');
const http = require('http');
const initSocket = require('./socket/socketServer');

const app = express();
const server = http.createServer(app);

initSocket(server);

app.get('/', (req, res) => {
    res.send('Server is running');
});

server.listen(3001, () => {
    console.log('Server listening on port 3001');
});
