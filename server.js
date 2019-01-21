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
app.use('/api', apiRoutes);

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
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//login check

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});