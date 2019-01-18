const jwt = require("jsonwebtoken");
const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const conif = require("../../config");

//Passport Local Stragegy Object

module.exports= new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true,

}, (requestAnimationFrame, email, password, done) =>{
    const userData= {
        email: email.trim(),
        password: password.trim()
    };

    //find user by email address
    return User.findOne({email:userData.email}, (err, user)=>{
        if (err) {return done(err); }

        if (!user){
            const error = new Error('Incorrect email or password')
            error.name = 'IncorrectCredentialsError'

            return done(error);
        }

        return user.comparePassord(userData.password, (passwordErr, isMatch)=>{
            if (err) {return done(err); }

            if(!isMatch){
                const error = new Error('Incorrect email or password');
                error.name = "IncorrectCredentialsError";

                return done(error)
            }
            const payload= {
                sub: user._id
            };
            //token string
            const token= jwt.sign(payload, config.jwtSecret);
            const data = {
                name: user.name
            };
            return done(null, token, data);
        })
    })
})