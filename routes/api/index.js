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


module.exports = router;