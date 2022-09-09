console.log("Tuwaiq Academey - JavaScript");
console.log("Week 5 Day 3 - MongoDB");

const express = require('express');
const app = express();
const port = 3000;

// the home page
app.get('/', (req, res) => {
    res.send('<h1>Tuwaiq Academy - JavaScript</h1> <br> <h2> MongoDB, Express, React, and Node JS</h2>');
});

app.get('/user-get', (req, res) => {
    res.send('<h1>This is POST REQUEST</h1> <br> <h2>Welcome to GET REQUEST page</h2>');
})

// POST Request ------------------------
app.post('/user-post', (req, res) => {
    res.send('<h1>This is POST REQUEST</h1> <br> <h2>Welcome to POST REQUEST page</h2>');
})

// SERVER listen on port number 3000
app.listen(port, () => {
    console.log('SERVER IS WORKING ...');
})