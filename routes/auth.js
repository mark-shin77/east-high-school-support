const express = require('express')
const router = express.Router()
const User = require("../client/server/db/models/user")
passport = require("../client/server/passport")
const validator = require("validator")
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})


function validateLoginForm(payload) {
	const errors = {};
	let isFormValid = true;
	let message = '';
  console.log(payload);
	if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
	  isFormValid = false;
	  errors.email = 'Please provide your email address.';
	}
  
	if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
	  isFormValid = false;
	  errors.password = 'Please provide your password.';
	}
  
	if (!isFormValid) {
	  message = 'Check the form for errors.';
	}
  
	return {
	  success: isFormValid,
	  message,
	  errors
	};
  }
router.post(
	'/login',
	  function(req,res, next){
	 	console.log(req.body.email)
	
	// (req, res, next) => {
		const validationResult = validateLoginForm(req.body);
console.log(validationResult);
		if (!validationResult.success) {
		  return res.status(400).json({
			success: false,
			message: validationResult.message,
			errors: validationResult.errors
		  });
		}
	  
		return passport.authenticate('local', (err, token, userData) => {
			console.log(err);
		  if (err) {
			if (err.name === 'IncorrectCredentialsError') {
			  return res.status(400).json({
				success: false,
				message: err.message
			  });
			}
	  
			return res.status(400).json({
			  success: false,
			  message: 'Could not process the form.'
			});
		  }
	  
	  
		  return res.json({
			success: true,
			message: 'You have successfully logged in!',
			token,
			user: userData,
		  });
		})(req, res, next);
	
	  });
// 		console.log(`THIS IS THE REQ BODY!!!! ${req.body.email}`)
// 		console.log('================')
// 		next()
		
// 	},
// 	//console.log('hello hello hello hello this part is working'),
// 	passport.authenticate('local'),
// 	(req, res) => {
// 		console.log('POST to /login')
// 		const user = JSON.parse(JSON.stringify(req.body.email)) // hack
// 		const cleanUser = Object.assign({}, user)
// 		if (cleanUser.local) {
// 			console.log(`Deleting ${cleanUser.local.password}`)
// 			delete cleanUser.local.password
// 		}
// 		res.json({ user: cleanUser })
// 	}
// )
 

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})
function validateSignupForm(payload) {
	const errors = {};
	let isFormValid = true;
	let message = '';
  
	if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
	  isFormValid = false;
	  errors.email = 'Please provide a correct email address.';
	}
  
	if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
	  isFormValid = false;
	  errors.password = 'Password must have at least 8 characters.';
	}
  
	if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
	  isFormValid = false;
	  errors.name = 'Please provide your name.';
	}
  
	if (!isFormValid) {
	  message = 'Check the form for errors.';
	}
  
	return {
	  success: isFormValid,
	  message,
	  errors
	};
  }

//   router.post('/signup/:email/:password/', (req, res, next) => {
// 	const email = req.params.email
// 	const password = req.params.password
	
// 	const payload = {email, password}

// 	//console.log(`hello hello!!!!!!!!!!!! ${req.body}`)
// 	const validationResult = validateSignupForm(payload);
// 	if (!validationResult.success) {
// 	  return res.status(400).json({
// 		success: false,
// 		message: validationResult.message,
// 		errors: validationResult.errors
// 	  });
// 	}
  
  
// 	return passport.authenticate('local-signup', (err) => {
// 	  if (err) {
// 		if (err.name === 'MongoError' && err.code === 11000) {
// 		  // the 11000 Mongo code is for a duplication email error
// 		  // the 409 HTTP status code is for conflict error
// 		  return res.status(409).json({
// 			success: false,
// 			message: 'Check the form for errors.',
// 			errors: {
// 			  email: 'This email is already taken.'
// 			}
// 		  });
// 		}
  
// 		return res.status(400).json({
// 		  success: false,
// 		  message: 'Could not process the form.'
// 		});
// 	  }
  
// 	  return res.status(200).json({
// 		success: true,
// 		message: 'You have successfully signed up! Now you should be able to log in.'
// 	  });
// 	})(req, res, next);
//   })
router.post('/signup', (req, res) => {
    console.log(`this is the req body!!!!! ${req.body}`)
   // const { username, password } = req.body
    // const username = req.params.username
    // const password = req.params.password
	console.log("hey loot at me!!!!!!!!!!!" +req.body.email)
	const email = req.body.email
	const password = req.body.password
	// ADD VALIDATION
	User.findOne({ 'local.email': email }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			email: email,
			password: password
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})
module.exports = router