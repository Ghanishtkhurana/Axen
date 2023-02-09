const express = require("express")
const app = express.Router()
const adminMiddleware = require("../middleware/admin.middleware")
const Address = require("../models/address.model")

app.use(express.json())
// app.use(adminMiddleware)

app.get("/orders",adminMiddleware,async(req,res)=>{
    try{
        const userOrders = await Address.find()
        res.send(userOrders)
    }
    catch(err){
        res.send(err.message)
    }
})

app.post("/post_orders",adminMiddleware,async(req,res)=>{
    try{
        const userOrders = await Address.create({...req.body})
        res.send(userOrders)
    }
    catch(err){
        res.send(err.message)
    }
})

app.delete("/:id",async(req,res)=>{
    try{
        let {id} = req.body
        const userOrders = await Address.findByIdAndDelete({_id : id})
        res.send("user product buy details delete")
    }
    catch(err){
        res.send(err.message)
    }
})

module.exports = app