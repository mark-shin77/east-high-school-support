const express = require('express')
const router = express.Router()
//const Food = require("../../client/server/db/models/food")
//const Expense = require("../../client/server/db/models/expenses")
const db = require("../client/server/db")
const validator = require("validator")

//API routes for the food get post and delete  
router.get("/food", (req, res)=>{
    db.Food.find({}).then(data=>res.json(data))
})
router.post("/food", (req,res)=>{
    console.log(req.body)
    db.Food.create({
        name: req.body.name,
        email: req.body.email,
        food: req.body.food,
        quantity: req.body.quantity,
        phone: req.body.phone
    })

})
router.post("/food/delete/:id", (req,res)=>{
    db.Food.deleteOne({_id: req.params.id}).then(data=>res.json(data))

})
//API routes for the expenses get post and delete
router.get("/expenses", (req,res)=>{
    console.log(req)
    db.Expense.find({}).then(data=>res.json(data))
})
router.post("/expenses", (req,res)=>{
    db.Expense.create({
         item: req.body.item,
         ammount: req.body.ammount,
         date: req.body.date,
         quantity: req.body.quantity
    }).then(data=> res.json(data))
    
})
router.post("/expenses/delete/:id", (req,res)=>{
    db.Expense.deleteOne({_id: req.params.id}).then(data=>res.json(data))

})