var passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    User = mongoose.model('User');

module.exports = function() {
 passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('looking for user with username:', username);
    User.findOne({username:username}).exec(function(err, user){
      console.log("here is the username" + user);
      if(user && user.authenticate(password)) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }
));



/*
passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('looking for user with username:', username);
    User.findOne({ userName: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
*/

passport.serializeUser(function(user, done){
  if(user) {
    done(null, user._id);
  }
});

passport.deserializeUser(function(id, done) {
  User.findOne({_id:id}).exec(function(err, user){
    if(user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
});
}
