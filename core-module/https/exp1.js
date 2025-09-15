const https = require('node:https');
const fs = require('node:fs');
const path = require('node:path');

const options = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
    cert:fs.readFileSync(path.join(__dirname, 'cert', 'server.cert'))
};
const server = https.createServer(options, (req, res) => {
    // Security headers
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    if (req.url === '/') {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(`<h1>Welcome to your secure server</h1>`);
    } else if (req.url === '/api') {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Hello from the API" }));
    } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(4433, () => {
    console.log('Server is runnging on port :4433');
})