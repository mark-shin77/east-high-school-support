// const User = require('../db/models/user')
// const LocalStrategy = require('passport-local').Strategy

// const strategy = new LocalStrategy(
// 	{
// 		usernameField: 'username' // not necessary, DEFAULT
// 	},
// 	function(username, password, done) {
// 		User.findOne({ 'local.username': username }, (err, userMatch) => {
// 			if (err) {
// 				return done(err)
// 			}
// 			if (!userMatch) {
// 				return done(null, false, { message: 'Incorrect username' })
// 			}
// 			if (!userMatch.checkPassword(password)) {
// 				return done(null, false, { message: 'Incorrect password' })
// 			}
// 			return done(null, userMatch)
// 		})
// 	}
// )

// module.exports = strategy

const jwt = require('jsonwebtoken');
const User = require("../db/models/user");
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require("../../../conif");


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };

  // find a user by email address
  return User.findOne({ email: userData.email }, (err, user) => {
    const password =userData.password
    if (err) { return done(err); }

    if (!user) {
      const error = new Error('Incorrect email');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }
    console.log("USER" + user)
    console.log("Password " + password)
    // check if a hashed user's password is equal to a value saved in the database
    return user.comparePassword(password, (passwordErr, isMatch) => {
    //  console.log(`hello ${User.methods.comparePassword}`)
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error(' password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: user._id
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: user.name
      };

      return done(null, token, data);
    });
  });
});