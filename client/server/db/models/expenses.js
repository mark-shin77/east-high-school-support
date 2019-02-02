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
        
    }
});

const Expense = mongoose.model('Expense', ExpenseSchema);
module.exports = Expense