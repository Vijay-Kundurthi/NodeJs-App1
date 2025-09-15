const http = require('node:http');


// Create a server
const server = http.createServer((request, response) => {
    const headers = request.headers;
    console.log('-------headers----\n', headers);
    // set HTTP response header content type and status code
    response.writeHead(200, {
      "content-type": "text/html",
      "X-Powered-By": "Node.js",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Set-Cookie": "sessionid=abc123; HttpOnly",
    });

    // send the response to the body
    response.end(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML List Sample</title>
</head>
<body>

  <h2>Unordered List</h2>
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
  </ul>

  <h2>Ordered List</h2>
  <ol>
    <li>Wake up</li>
    <li>Brush teeth</li>
    <li>Make coffee</li>
    <li>Start working</li>
  </ol>

  <h2>Nested Lists</h2>
  <ul>
    <li>Fruits
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
      </ul>
    </li>
    <li>Vegetables
      <ul>
        <li>Carrots</li>
        <li>Broccoli</li>
      </ul>
    </li>
  </ul>

</body>
</html>

    `);
});

// define  a port number
const PORT = 3000;

// start the server and listening the response
server.listen(PORT, ()=> {
    console.log(`Server is stared and running on http://localhost:${PORT}`);
});