// Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const passport = require('./client/server/passport')

// Initialize Express
const app = express();

const PORT = process.env.PORT || 5000;
//Middleware

// Routes
const apiRoutes = require('./routes/api/index')
const donationRoutes = require('./routes/front-end/paypal')
// API
app.use('/api', apiRoutes);
app.use('/donations', donationRoutes);

// Configure middleware
    // Use morgan
    app.use(logger("dev"));
    // Use body parser
    app.use(bodyParser.json());
    // Use cors
    app.use(cors());
//Passport config
app.use(passport.initialize())
app.use(passport.session())//deserialize user
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


//login check
app.get("/login/user", (req,res,next) =>{
    console.log(req.user)
    if(req.user){
        return res.json({user: req.user})
    }
    else{
        return res.json({user: null})
    }
})
app.post("/login", (req,res,next)=>{
    console.log(req.body)
    next()
},
passport.authenticate('local'), (req, res)=>{
    const user= JSON.parse(JSON.stringify(req.user))
    const cleanUser = Object.assign({}, user)
    if(cleanUser.local){
        console.log(`Deleting ${cleanUser.local.password}`)
        delete cleanUser.loca.password
    }
    res.json({user: cleanUser})
})

app.post("/logout", (req,res)=>{
    if(req.user){
        req.session.destroy()
        res.clearCookie('connect.sid')
        return res.json({msg: 'logging you out'})
    } else{
        return res.json({msg: 'no user to log out'})
    }
})
app.post("/signup", (req,res)=>{
    const {username, password} = req.body
    User.findOne({'local.username': username},(err, userMatch)=>{
        if(userMatch){
            return res.json({
                error: `Sorry, already a user with the same username ${username}`
            })
        }
        const newUser = new User({
            'local.username': username,
            'local.password': password
        })
        newUser.save((err,savedUser)=>{
            if (err) return res.json(err)
            return res.json(savedUser)
        })
    })
})
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});