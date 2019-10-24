const mongoose = require('mongoose');

// structure
const Events = mongoose.Schema({
    title: String,
    destination: String,
    speaker: String,
    dateBegin: Date,
    dateEnd: Date,
});

module.exports = mongoose.model('Events', Events);
