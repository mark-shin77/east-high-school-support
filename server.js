const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport')
const items = require('./routes/api/index')

const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();

// Configure middleware
    // Use morgan
    app.use(logger("dev"));
    // Use body parser
    app.use(bodyParser.json());
    // Use cors
    app.use(cors());
    //use passport middleware
    app.use(passport.initialize());
    //Use passport login strategy
    const localLoginStrategy = require("./client/server/passport/localStrategy")
    passport.use("local-login", localLoginStrategy)
    //authorization middleware
    const authCheckMiddleware= require("'.server.middleware/auth-check")
    app.use("/api", authCheckMiddleware)
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Make public a static folder
// app.use(express.static('client/build'));
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// ===== testing middleware =====
// app.use(function(req, res, next) {
// 	console.log('===== passport user =======')
// 	console.log(req.session)
// 	console.log(req.user)
// 	console.log('===== END =======')
// 	next()
// })
// testing
// app.get(
// 	'/auth/google/callback',
// 	(req, res, next) => {
// 		console.log(`req.user: ${req.user}`)
// 		console.log('======= /auth/google/callback was called! =====')
// 		next()
// 	},
// 	passport.authenticate('google', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect('/')
// 	}
// )
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve( __dirname, 'client', 'build', 'index.html'));
// })

// Connect to the Mongo DB
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/items', items);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});
