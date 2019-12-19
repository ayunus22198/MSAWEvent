const mongoose = require('mongoose');

// structure
const Users = mongoose.Schema({
    email: String,
    token: String
});

module.exports = mongoose.model('Users', Users);
