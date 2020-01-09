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
    const { token, eventSelected, idOfClickedBlock } = req.body;
    console.log(token, eventSelected, idOfClickedBlock);
    let selectedSelectableEvent = await Event.findOne({_id:idOfClickedBlock}).populate('events')
    let idOfBlockClickedPrev = -1;
    console.log('heeh ', selectedSelectableEvent);
    for(var k = 0; k < selectedSelectableEvent.events.length; k++) {
      if(selectedSelectableEvent.events[k].attending.includes(token)) {
        idOfBlockClickedPrev = selectedSelectableEvent[k]._id;
        break;
      }
    }
    if(idOfBlockClickedPrev == eventSelected._id) {
      return res.status(404).json({ 'error':'Already in event' });
    }
    console.log(token, eventSelected, idOfClickedBlock);
    Event.findOneAndUpdate(
  		{ _id: eventSelected._id },
  		{ $push: { attending: token } },
  		{ new: true, upsert: true },
  		function (error, event) {
  			if (error) {
  				console.log(error);
  			} else {
          if(idOfBlockClickedPrev == -1) {
            return res.status(200).json({'success': 'Inside event'});
          } else {
            Event.findOneAndUpdate(
          		{ _id: idOfBlockClickedPrev },
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
