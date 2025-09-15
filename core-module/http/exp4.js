const http = require('node:http');
const { URL } = require('node:url');
const queryString = require('querystring'); 
const server = http.createServer((req, res) => {
  console.log("Raw request.url:", req.url); // Should never be null
  const baseURL = "http://" + req.headers.host + "/";
  const parsedUrl = new URL(req.url, baseURL);
  const product = {
    item: 'apple',
    type: ['red', 'gree']
  }
  queryString.stringify(product)
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      path: parsedUrl.pathname,
      query: Object.fromEntries(parsedUrl.searchParams),
      product,
      url: parsedUrl.href,
    },null, 4)
  );
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});