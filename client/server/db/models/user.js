const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise


// const userSchema = new Schema({
// 	firstName: { type: String, unique: false },
// 	lastName: { type: String, unique: false },
// 	local: {
// 		email: { type: String, unique: false, required: false },
// 		password: { type: String, unique: false, required: false }
// 	},
// 	google: {
// 		googleId: { type: String, required: false }
// 	},
// 	photos: []

// })

// // Define schema methods
// userSchema.methods = {
// 	checkPassword: function(inputPassword) {
// 		return bcrypt.compareSync(inputPassword, this.local.password)
// 	},
// 	hashPassword: plainTextPassword => {
// 		return bcrypt.hashSync(plainTextPassword, 10)
// 	}
// }

// // Define hooks for pre-saving
// userSchema.pre('save', function(next) {
// 	if (!this.local.password) {
// 		console.log('=======NO PASSWORD PROVIDED=======')
// 		next()
// 	} else {
// 		this.local.password = this.hashPassword(this.local.password)
// 		next()
// 	}
// 	// this.password = this.hashPassword(this.password)
// 	// next()
// })

// // Create reference to User & export
// const User = mongoose.model('User', userSchema)
// module.exports = User


// define the User model schema
const UserSchema = new mongoose.Schema({
	email: {
	  type: String,
	  index: { unique: true }
	},
	password: String,
	name: String
  });
  
  
  /**
   * Compare the passed password with the value in the database. A model method.
   *
   * @param {string} password
   * @returns {object} callback
   */
  UserSchema.methods.comparePassword = function comparePassword(password, callback) {
	bcrypt.compare(password, this.password, callback);
  };
  
  
  /**
   * The pre-save hook method.
   */
  UserSchema.pre('save', function saveHook(next) {
	const user = this;
  
	// proceed further only if the password is modified or the user is new
	if (!user.isModified('password')) return next();
  
  
	return bcrypt.genSalt((saltError, salt) => {
	  if (saltError) { return next(saltError); }
  
	  return bcrypt.hash(user.password, salt, (hashError, hash) => {
		if (hashError) { return next(hashError); }
  
		// replace a password string with hash value
		user.password = hash;
  
		return next();
	  });
	});
  });
  
  
  const User = mongoose.model('User', UserSchema);
  module.exports= User