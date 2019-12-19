const router = require('express').Router();
const controller = require('./controller');

router.post('/login', (req,res) => {
  controller.addUser(req,res);
});

module.exports = router;
