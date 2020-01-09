const mongoose = require('mongoose');

// structure
const Questions = mongoose.Schema({
    question: {
      type: String
    },
    idOfAsker: {
      type: String
    },
    eventSpeakingAt: {
      type: String
    },
    dateBegin: {
      type : Date,
      default: Date.now
    }
});

module.exports = mongoose.model('Events', Events);
