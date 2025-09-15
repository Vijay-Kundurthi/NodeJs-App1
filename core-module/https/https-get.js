const { get } = require("node:https");


get("https://jsonplaceholder.typicode.com/posts", (res) => {
    console.log(res.statusCode);
    
}).on(
  "error",
  (error) => {
    console.log("Error:", error);
  }
);