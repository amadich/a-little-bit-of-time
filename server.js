const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static('public'));

let online = 0

io.on('connection', (socket) => {
    online = online + 1
    io.emit("online", online);

    console.log('a user connected');

    socket.on('disconnect', () => {
        online = online - 1
        io.emit("offline", online);
        console.log('user disconnected');
    });
  });
  

 /* io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });
  */


  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });


let port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log("Welcome in Port: ",port);
})