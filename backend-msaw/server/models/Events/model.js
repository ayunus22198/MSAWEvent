const mongoose = require('mongoose');

// structure
const Events = mongoose.Schema({
    title: {
      type: String
    },
    destination: {
      type: String
    },
    speaker: {
      type: String
    },
    dateBegin: {
      type: Date
    },
    dateEnd: {
      type: Date
    },
    dayOfWeek: {
      type: String
    },
    attending: [{
      type: String
    }],
    text: {
      type: String
    },
    attending: [{
      type: String
    }],
    selectable: {
      type: Boolean
    },
    events: [{
      type: Object
    }]
});

module.exports = mongoose.model('Events', Events);
