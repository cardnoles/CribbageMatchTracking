var mongoose = require('mongoose'),
    userModel = require('../models/User');
    courseModel = require('../models/Course');


module.exports = function(config) {
  // mongoose.connect('config.db');
  mongoose.connect('mongodb://localhost:27017/matches');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection...'));
  db.once('open', function callback() {
    console.log('matches db opened');
});

userModel.createDefaultUsers();
courseModel.createDefaultCourses();

};




