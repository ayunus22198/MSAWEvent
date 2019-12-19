const Event = require('./model');

exports.getEvents = (req, res) => {
  Event.find({}).populate('events').then((events) => {
		if (!events) {
			return res.status(400).json({ 'Error': 'No events found' });
		} else {
      let friday = events.filter(e => e.dayOfWeek == 'friday')
      let saturday = events.filter(e => e.dayOfWeek == 'saturday')
      let sunday = events.filter(e => e.dayOfWeek == 'sunday')
			return res.status(201).json({ friday, saturday, sunday });
		}
	});
}

exports.addSelectableEvent = async (req, res) => {
    const { token, eventSelected, idUpdate } = req.body;
    console.log(token, eventSelected, idUpdate);
    Event.findOneAndUpdate(
  		{ _id: eventSelected._id },
  		{ $push: { attending: token } },
  		{ new: true, upsert: true },
  		function (error, event) {
  			if (error) {
  				console.log(error);
  			} else {
          if(idUpdate == -1) {
            return res.status(404).json({'err':'err'});
          } else {
            Event.findOneAndUpdate(
          		{ _id: idUpdate },
          		{ $pull: { attending: token } },
          		{ new: true, upsert: true },
          		function (error, event) {
          			if (error) {
          				console.log(error);
          			} else {
          				return res.status(201).json({ event });
          			}
          	});
          }
  			}
		});
}

exports.addEvent = async (req, res) => {
  const { title, destination, speaker, selectable } = req.body;

    const newEvent = new Event({
      title: title,
      destination: destination,
      speaker: speaker,
      dateBegin: new Date(2019, 11, 5, 10, 30),
      dateEnd: new Date(2019, 11, 5, 11, 30),
      dayOfWeek: 'FRIDAY',
      attending: [],
      selectable: selectable,
      events: []
    });
    newEvent.save().then((newEvent) => {
      if(newEvent) {
        return res.status(200).json({
          success: true,
          event: newEvent
        });
      } else {
        return res.status(400).json({
          success: false
        });
      }
    })


}
