const express = require('express');

const app = express();

app.get('/text', (req, res) => {
    res.type('text'); // sets content-type: text
    res.send('This is text');
});
app.get('/json', (req, res)=> {
    res.type('application/json'); // sets content-type: application/json
    res.send({status:200, message: 'success'});
});

app.get('/json1', (req, res) =>{
    res.json({status:200, message: 'success message..'}); // sets content-type: application/json
});
app.listen(3000, () => {
    console.log('server is running on :http://localhost:3000');
})

