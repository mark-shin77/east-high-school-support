const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    //username for development email for production
    username: {
        type: String,
        index: {unique: true}
    },
    password: String, 
    name: String
});

UserSchema.methods.comparePassword = function comparePassword(password, cb){
    bcrypt.compare(password, this.password, cb)
};

UserSchema.pre('save', function saveHook(next){
    const user = this

    if (!user.isModified("passowrd")) return next();
        return bcrypt.genSalt((saltError, salt)=>{
    if (saltError){ return next(saltError)}
     return bcrypt.hash(user.password, salt, (hasherror, hash) =>{
         if (hashError) {return next(hashError)}

         user.password = hash;

         return next()
     })
        })


})

module.exports = mongoose.model("User", UserSchema);