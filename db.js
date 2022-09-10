const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/test';

const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { userNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('DB IS WORKING, CONNECTION ESTABLISHED ...')
})

// Extr: on error 
db.on('error', err => {
    console.log(err.message + 'mongo nor running')
})

// Extr: on success
db.on('error', err => {
    console.log('Mongo connected ...')
})