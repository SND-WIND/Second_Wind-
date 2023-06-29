const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const handleCookieSessions = require('./middleware/handle-cookie-sessions');
const routes = require('./routes');

const app = express();
const server = http.createServer(app); // create a server using http and pass your express app to it
const io = socketIo(server, { cors: { origin: "*" } }); // set up socket.io to use that server with CORS

app.use(handleCookieSessions);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', routes);

app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New client connected');

  // You can listen for custom events here.
  // For example, listening for a 'chat message' event:
  socket.on('new message', function(msg){
    console.log('message: ' + msg);

    // Then, you could emit the 'chat message' event to all connected clients:
    io.emit('new message', [msg]);
  });

  // Disconnect listener
  socket.on('disconnect', () => console.log('Client disconnected'));
});

// Remember to export the server, not the app
module.exports = server;
