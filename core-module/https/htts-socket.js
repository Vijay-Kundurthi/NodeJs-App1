const https = require('https');
const fs = require('fs');
const path = require('path');
const { Server } = require('socket.io');

// Load SSL certificate and key
const options = {
  key: fs.readFileSync(path.join(__dirname, 'cert','key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
};

// Create HTTPS server
const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Socket.IO HTTPS server');
});

// Initialize Socket.IO on the HTTPS server
const io = new Server(server);

// Listen for client connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for a custom event from client
  socket.on('chat message', (msg) => {
    console.log('Message received:', msg);
    // Broadcast message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start server
server.listen(8443, () => {
  console.log('HTTPS + Socket.IO server running at https://localhost:8443');
});
