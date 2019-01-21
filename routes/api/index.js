const axios = require("axios");
const router = require("express").Router();

// Example Item Model
const Item = require ('../../models/exampleItem');

// route to get all api/items
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

var signup_api_key = "";

console.log(process.env.SIGNUP_GENIUS_APIKEY)

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
router.get("/report", (req, res) => {
    axios
        .get("https://api.signupgenius.com/v2/k/signups/report/available/18626753/?user_key=" + signup_api_key, { params: req.query })
        .then(results => {
            console.log(results.data);
            res.json(results.data);
        })
        .catch(err => res.status(422).json(err));
});

module.exports = router;