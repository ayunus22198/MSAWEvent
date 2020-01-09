const router = require('express').Router();
const controller = require('./controller');

router.get('/quesitons/:id', (req,res) => {
  controller.getQuestions(req,res);
});

router.post('/quesitons/:id', (req,res) => {
  controller.addQuestion(req,res);
});

module.exports = router;
