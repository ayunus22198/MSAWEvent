const mongoose = require('mongoose');

// structure
const Review = mongoose.Schema({
    userID: Schema.Types.ObjectID,
    restaurantID: Schema.Types.ObjectID,
    text: String,
    rating: Double
});

module.exports = mongoose.model('Review', Review)