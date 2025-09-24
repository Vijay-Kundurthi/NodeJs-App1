const express = require("express");
const app = express();

app.use("/user/:id", (req, res, next) => {
  console.log("Method:", req.method);
  console.log("Headers:", res.getHeaders());
  next();
});
app.get("/user/:id", (req, res) => {
  res.send({ user: "vijay", id: 1 });
});

app.use(
  "/product/:id",
  (req, res, next) => {
    console.log('ID:', req.params.id);
    next();
  },
  (req, res, next) => {
    res.send('Product info');
  }
);

app.get('/product/:id', (req, res, next) => {
    res.send(req.params.id);
})

app.listen(3000, () =>
  console.log("server is running on http://localhost:3000")
);
