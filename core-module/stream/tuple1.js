const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  // 'socket' is a duplex stream

  // Handle incoming data (readable side)
  socket.on('data', (data) => {
    console.log('Received:', data.toString());

    // Echo back (writable side)
    socket.write(`Echo: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});