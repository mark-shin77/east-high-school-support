const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FoodSchema = new Schema({
    name:{
        type: String,
        required: true
        },
    email: {
        type: String
    },
    food: {
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        
    },
    phone:{
        type: String
    },
    date: {
        type : Date, default: Date.now
    }
})
const Food = mongoose.model('Food', FoodSchema);

module.exports = Food