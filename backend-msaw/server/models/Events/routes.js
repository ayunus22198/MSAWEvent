const router = require('express').Router();
const controller = require('./controller');

router.get('/events', (req,res) => {
  console.log('gg');
  controller.getEvents(req,res);
});

router.post('/event', (req,res) => {
  controller.addEvent(req,res);
});

router.post('/selectableEvent', (req,res) => {
  controller.addSelectableEvent(req,res);
});

module.exports = router;
