// import the mongoose
const mongoose = require('mongoose');

// Schema - main template besed on data
const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    favoriteFood: String,
}); // copy schema from mongoose

// model of schema - remote or control tool (you can use it and CRUD Operations)
const User = mongoose.model("User", userSchema);

module.exports = User;