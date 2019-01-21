const axios = require("axios");
const router = require("express").Router();
const User = require("../../client/server/db/models/user")
const passport = require("../../client/server/passport")

// Example Item Model
const Item = require ('../../models/exampleItem');

// route to get all a pi/items
router.get ("/", (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
    })

router.get("/signupgenius", (req, res) => {
    axios
        .get("https://api.signupgenius.com/v2/k/signups/created/active/?user_key=V0FzMkxZcmVOZlVnclZMVEl6dGhWQT09", { params: req.query })
        .then(results => {
            console.log(results.data);
            res.json(results.data);
        })
        .catch(err => res.status(422).json(err));
});
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
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
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

router.post('/signup', (req, res) => {
	const { username, password } = req.body
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

module.exports = router;