const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExpenseSchema = new Schema({
    item:{
        type: String,
        required: true
        },
    ammount: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },
    quantity:{
        type: Number,
        
    },
    doner:{
        type: String,
        required: true
    },
    email: {
        type: String
    }
});

const Expense = mongoose.model('Expense', ExpenseSchema);
module.exports = Expense