const express = require("express");
const app = express();
const router = express.Router();

// A middleare function with no mount, this code  will execute every request to the router
router.use((req, res, next) => {
  console.log("Time:", new Date().toString());
  next();
});
router.use(
    "/user/:id",
    (req, res, next) => {
        console.log("URL:", req.originalUrl);
        next();
    },
    (req, res, next) => {
        console.log("Method:", req.method);
        next();
    }
);
// a middleware function to show all HTTP url and Method type of user:/id router
router.get(
  "/user/:id",
  (req, res, next) => {
    const id = req.params.id;
    if (id === "0") next("route");
    else next();
  },
  (req, res, next) => {
    res.send('Regular execution..')
  }
);
// a middleware function to execute the /user/:id any of the url
router.get("/user/:id", (req, res) => {
  console.log("ID:", req.params.id);
  res.send("Special execution..");
});

app.use("/", router);

// Start the server
app.listen(3000, () => console.log("Serveris running on http://lochost:3000/"));
