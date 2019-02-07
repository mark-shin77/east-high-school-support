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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
const authRoutes = require("./routes/auth")
const apiRoutes = require('./routes/api/index')
const dashRoutes = require('./routes/dash/index')
// API
app.use('/api', apiRoutes);
app.use("/auth", authRoutes);
app.use("/authorize", dashRoutes)

// Configure middleware
    // Use morgan
    app.use(logger("dev"));
    // Use body parser
    app.use(bodyParser.json());
    // Use cors
    app.use(cors());

//Passport config
app.use(passport.initialize())
//deserialize user
// Parse request body as JSON
app.use(passport.session())

// Connecting to DB
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/east-high-support", {
        useCreateIndex: true,  
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


//login check

app.listen(PORT, function() {
    console.log(`Server running on PORT : ${PORT}!`);
});