const mongoose = require('mongoose');

// Mongo link (constant port) with data base name
const mongoURI = 'mongodb://localhost:27017/test';

// Call mongoose connection & save it into db variable
const db = mongoose.connection;

// Connect to Mongo & take three parameters
mongoose.connect(mongoURI, { userNewUrlParser: true, useUnifiedTopology: true}, () => {
    /*
    Parameters:
        1) take the Mongo link
        2) object options 
        3) callback when the connect established
    */
    console.log('DB IS WORKING, CONNECTION ESTABLISHED ...')
})

// Extr: on error 
db.on('error', err => {
    // one of the err properties message
    console.log(err.message + 'mongo nor running')
})

// Extr: on success
db.on('error', err => {
    console.log('Mongo connected ...')
})