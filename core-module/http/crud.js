const http = require("node:http");

// In-memory data for demonistration
let todos = [
  { id: 1, task: "Build Js", completed: true },
  { id: 2, task: "Build Nodejs", completed: false },
  { id: 3, task: "Build HTML", completed: true },
];
// Create a server
const server = http.createServer((req, res) => {
  const { method, url } = req;
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  // set CORS in header
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  //Route: GET /
  if (method === "GET" && pathname === "/") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify(todos));
  }
  // Route: POST /user
  else if (method === "POST" && pathname === "/todos") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const newTodo = JSON.parse(body);
        newTodo.id = todos?.length > 0 ? todos.length + 1 : 1;
        todos.push(newTodo);
        res.writeHead(201, { "content-type": "application/json" });
        res.end(
          JSON.stringify({
            status: 200,
            message: "todos uploaded successfully",
            todos: todos,
          })
        );
      } catch (error) {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid Json" }));
      }
    });
  }

  //Route: PUT /user/:id
  else if (method === "PUT" && pathname.startsWith("/todos/")) {
    const id = parseInt(pathname.split("/")[2]);
    let body = "";
    // ready body payload
    req.on("data", (chunk) => {
        body += chunk.toString();
    });
    try {
        req.on("end", () => {
            const newTodo = JSON.parse(body);
            const startIndex = todos.findIndex((todo) => todo.id === id);
        if (startIndex === -1) {
            res.writeHead(404, {"content-type": "application/json"});
            res.end(JSON.stringify({code: 404,error: `Unable to find data with ${id}`}))
        } else {
            const  todo = todos[startIndex];
            const updatedTodo = Object.assign(todo, newTodo);
            todos[startIndex] = updatedTodo;
            console.log(todos);
             res.writeHead(201, {"content-type": "application/json"});
            res.end(JSON.stringify({code: 201,data: todos}))
        }
      });
    } catch (error) {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(JSON.stringify({ code: 400, error: error }));
    }
  }
  else if(method === "DELETE" && pathname.startsWith("/todos/")) {
    const id = parseInt(pathname.split("/")[2]);
    req.on('data', (chunk) => {})
    try {
        req.on("end", () => {
            const startIndex = todos.findIndex((todo) => todo.id === id);
            console.log(id);
        if (startIndex === -1) {
            res.writeHead(404, {"content-type": "application/json"});
            res.end(JSON.stringify({code: 404,error: `Unable to find data with ${id}`}))
        } else {
            const latestTodo = todos.filter((todo) => todo.id !== id);
            res.writeHead(200, {"content-type": "application/json"});
            res.end(JSON.stringify({code: 200,messge: 'Todo is deleted successfully', size: latestTodo.length, actuallSize: todos.length }))
        }
      });
    } catch (error) {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(JSON.stringify({ code: 400, error: error }));
    }
  }
});

// PORT number
const PORT = 3000;
server.listen(3000, () => {
  console.log(`server is running on port: ${PORT}`);
});
