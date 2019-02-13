const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FoodSchema = new Schema({
  
    item: {
        type: String,
    },
    store:{
        type: String,
        required:true
    },
    ammount:{
        type: String,
        
    },
    service:{
        type: String,
        required: true
    },
   
    date: {
        type : Date, default: Date.now
    }
})
const Food = mongoose.model('Food', FoodSchema);

module.exports = Food