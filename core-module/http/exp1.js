const { createServer } = require("node:http");

// create a HTTP server to handle req and res
const server = createServer((req, res) => {
    // set HTTP response header with http status and content type
    res.writeHead(200, {"content-type": 'text/plain'});
    // send the response body
    res.end('Hello world');
});

const PORT = 3000;
// start the server and listening the port number
server.listen(PORT, 'localhost', () => {
    console.log(`Server is started and runing on the port: ${PORT}...` );
})