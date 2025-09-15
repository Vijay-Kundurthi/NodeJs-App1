const http = require('node:http');
const { parse } = require('node:url');

const server = http.createServer((req, res) => {
  console.log('Raw request.url:', req.url); // Should never be null

  const parsedUrl = parse(req.url, true);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ path: parsedUrl.pathname, query: parsedUrl.query, url: parsedUrl.href }));
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});