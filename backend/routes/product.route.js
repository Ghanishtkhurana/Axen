const express = require("express")
const Product = require("../models/product.model")
const app = express.Router()

app.get("/",async(req,res)=>{
    try{
        const products = await Product.find()
        res.send(products)
    }
    catch(e){
        res.send(e.message)
    }
})

module.exports = app