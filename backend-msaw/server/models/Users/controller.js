const Users = require('./model');

exports.addUser = async (req, res) => {
  console.log('req.body ', req.body)
  Users.findOne({ email:req.body.email }).then((user) => {
		if(!user) {
      let user = new Users(req.body.user);
      user.save().then((user) => {
        return res.status(201).json({user});
      });
    } else {
      console.log('hi', user);
      return res.status(404).json({'Error': 'Error'});
    }
	});
}
