const express = require('express')
const router = express.Router()
const User = require("../client/server/db/models/user")
const passport = require("../client/server/passport")
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login', function(req,res){
		console.log(req.body)
	}
	// function(req, res, next) {
	// 	console.log(`THIS IS THE REQ BODY!!!! ${req.body}`)
	// 	console.log('================')
	// 	next()
		
	// },
	// passport.authenticate('local'),
	// (req, res) => {
	// 	console.log('POST to /login')
	// 	const user = JSON.parse(JSON.stringify(req.username)) // hack
	// 	const cleanUser = Object.assign({}, user)
	// 	if (cleanUser.local) {
	// 		console.log(`Deleting ${cleanUser.local.password}`)
	// 		delete cleanUser.local.password
	// 	}
	// 	res.json({ user: cleanUser })
	// }
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup/:username/:password', (req, res) => {
    console.log(req)
   // const { username, password } = req.body
    const username = req.params.username
    const password = req.params.password
    console.log("hey loot at me!!!!!!!!!!!" +req.body)
	// ADD VALIDATION
	User.findOne({ 'local.username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'local.username': username,
			'local.password': password
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})
module.exports = router