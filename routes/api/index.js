// Dependencies
require("dotenv").config();
const axios = require("axios");
const router = require("express").Router();
const signup_api_key = process.env.SIGNUP_GENIUS_APIKEY;

// Get all volunteers
router.get("/volunteers", (req, res) => {
    axios
        .get("https://api.signupgenius.com/v2/k/groups/9136239/members/?user_key=" + signup_api_key, { params: req.query })
        .then(results => {
            // console.log(results.data);
            res.json(results.data);
        })
        .catch(err => res.status(422).json(err));
});

// Get all Active Signups
router.get("/signups/active", (req, res) => {
    axios
        .get("https://api.signupgenius.com/v2/k/signups/created/active/?user_key=" + signup_api_key, { params: req.query })
        .then(results => {
            // console.log(results.data);
            res.json(results.data);
        })
        .catch(err => res.status(422).json(err));
});

// Get All signups
router.get("/signups/all", (req, res) => {
    axios
        .get("https://api.signupgenius.com/v2/k/signups/created/all/?user_key=" + signup_api_key, { params: req.query })
        .then(results => {
            // console.log(results.data);
            res.json(results.data);
        })
        .catch(err => res.status(422).json(err));
});

// Get user selected sign up event
router.get("/report/:id", (req, res) => {
    var signupformid = req.params.id;
    // console.log(signupformid);
    axios
        .get("https://api.signupgenius.com/v2/k/signups/report/all/" + signupformid + "/?user_key=" + signup_api_key, { params: req.query })
        .then(results => {
            console.log(results.data.data.signup[0]);
            results.data.data.signup.sort(( a , b ) => {
                if (a.startdatestring > b.startdatestring) {
                    return 1;
                } else if ( a.startdatestring < b.startdatestring ) {
                    return -1;
                } else {
                    return 0;
                }
            })
            res.json(results.data)
        })
        .catch(err => res.status(422).json(err));
});

module.exports = router;