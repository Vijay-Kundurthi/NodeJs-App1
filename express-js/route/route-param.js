const express = require('express');
const app = express();

const PORT = 3000;

// path param
app.get('/user/:userId/:userName', (req, res) => { // http://localhost:3000/user/10/Vijay
    const params = req.params;
    res.type('application/json');
    res.status(200).send({id: params.userId, user: params.userName})
});

//Route handling query param
app.get('/search', (req, res) => { // http://localhost:3000/search?q=express&page=2
    const {q, category} = req.query;
    res.send(`application is using framework: ${q} and page: ${category ?? 'none'}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
