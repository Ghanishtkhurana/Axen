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

module.exports = app