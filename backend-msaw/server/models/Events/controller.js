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
  try {
    const newEvent = await Event.findOrCreate({
      title: title,
      destination: destination,
      speaker: speaker,
      dateBegin: dateBegin,
      dateEnd: dateEnd
    });
    return res.status(200).json({
      success: true,
      event: newEvent
    });
  } catch(e) {
    return res.status(400).json({ e });
  }

}
