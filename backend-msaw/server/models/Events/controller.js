const Event = require('./model');

exports.getEvents = (req, res) => {
  Event.find({}).then((events) => {
		if (!events) {
			return res.status(400).json({ 'Error': 'No events found' });
		} else {
			return res.status(201).json({ events });
		}
	});
}

exports.addEvent = async (req, res) => {
  const { title, destination, speaker, dateBegin, dateEnd } = req.body;

    const newEvent = new Event({
      title: title,
      destination: destination,
      speaker: speaker,
      dateBegin: dateBegin,
      dateEnd: dateEnd
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
