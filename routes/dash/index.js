const express = require('express')
const router = express.Router()
const Food = require("../../client/server/db/models/food");
const Expense= require("../../client/server/db/models/expenses")

//API routes for the food get post and delete  
router.get("/food1", (req, res)=>{
    Food.find({}).then(data=>res.json(data))
})
router.post("/food", (req,res)=>{
    Food.create({
        name: req.body.name,
        email: req.body.email,
        food: req.body.food,
        quantity: req.body.quantity,
        phone: req.body.phone
    }).then(data=>console.log('working')).catch(err=>console.log(err))

})
router.post("/food/delete/:id", (req,res)=>{
    Food.deleteOne({_id: req.params.id}).then(data=>res.json(data))

})
//API routes for the expenses get post and delete
router.get("/expenses", (req,res)=>{
    Expense.find({}).then(data=>res.json(data))
})
router.post("/expenses", (req,res)=>{
    Expense.create({
         item: req.body.item,
         ammount: req.body.ammount,
         date: req.body.date,
         quantity: req.body.quantity
    }).then(data=> res.json(data))
    
})
router.post("/expenses/delete/:id", (req,res)=>{
    Expense.deleteOne({_id: req.params.id}).then(data=>res.json(data))

})
module.exports = router