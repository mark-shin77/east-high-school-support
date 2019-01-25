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

var signup_api_key = "MVJibmQyeXdhdHIvcStqQnN4TEpWUT09";

router.get("/volunteers", (req, res) => {
    axios
        .get("https://api.signupgenius.com/v2/k/groups/9136239/members/?user_key=" + signup_api_key, { params: req.query })
        .then(results => {
            console.log(results.data);
            res.json(results.data);
        })
        .catch(err => res.status(422).json(err));
});

router.get("/signups/active", (req, res) => {
    axios
        .get("https://api.signupgenius.com/v2/k/signups/created/active/?user_key=" + signup_api_key, { params: req.query })
        .then(results => {
            console.log(results.data);
            res.json(results.data);
        })
        .catch(err => res.status(422).json(err));
});

router.get("/signups/all", (req, res) => {
    axios
        .get("https://api.signupgenius.com/v2/k/signups/created/all/?user_key=" + signup_api_key, { params: req.query })
        .then(results => {
            console.log(results.data);
            res.json(results.data);
        })
        .catch(err => res.status(422).json(err));
});
router.get("/report/:id", (req, res) => {
    var signupformid = req.params.id;
    axios
        .get("https://api.signupgenius.com/v2/k/signups/report/all/" + signupformid + "/?user_key=" + signup_api_key, { params: req.query })
        .then(results => {
            console.log(results.data);
            res.json(results.data);
        })
        .catch(err => res.status(422).json(err));
});


module.exports = router;