const router = require('express').Router();
const controller = require('./controller');

router.get('/events', (req,res) => {
  controller.getEvents(req,res);
});

router.post('/event', (req,res) => {
  controller.addEvent(req,res);
});

module.exports = router;
