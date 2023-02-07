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

app.get("/mobile",async(req,res)=>{
    try{
        let {price,brand,rating} = req.query
        console.log(price,brand,rating)
        let mobileProducts = await Product.find({category : "Mobile"})
        if(price)
        {
            if(price == "0-20000")
            {
                mobileProducts = await Product.find({$and : [{category : "Mobile"},{price2 : {$lte : 20000}}]})
            }
            else if(price == "20000-40000")
            {
                mobileProducts = await Product.find({$and : [{price2 : {$lte : 40000}},{price2 : {$gte : 20000}},{category : "Mobile"}]})
            }
            else if(price == "40000-60000"){
                mobileProducts = await Product.find({$and : [{price2 : {$lte : 60000}},{price2 : {$gte : 40000}},{category : "Mobile"}]})
            }
            else if(price == "morethan80000")
            {
                mobileProducts = await Product.find({$and : [{price2 : {$gte : 60000}},{category : "Mobile"}]})
            }
        }
        else if(brand){
            mobileProducts = await Product.find({$and : [{category : "Mobile"},{brand : brand}]})
        }
        res.send(mobileProducts)
    }
    catch(e){
        res.send(e.message)
    }
})
app.get("/grocery",async(req,res)=>{
    try{
        const groceryProducts = await Product.find({category : "Grocery"})
        res.send(groceryProducts)
    }
    catch(e){
        res.send(e.message)
    }
})
app.get("/electronic&appliances",async(req,res)=>{
    try{
        const electronicProducts = await Product.find({category : "Electronic&Appliances"})
        res.send(electronicProducts)
    }
    catch(e){
        res.send(e.message)
    }
})

app.get("/home",async(req,res)=>{
    try{
        const homeProducts = await Product.find({category : "Home"})
        res.send(homeProducts)
    }
    catch(e){
        res.send(e.message)
    }
})

app.get("/:id",async(req,res)=>{
    try{
        const {id} = req.params
        console.log(id)
        const product = await Product.findById({_id : id})
        res.send(product)
    }
    catch(e){
        res.send(e.message)
    }
})

module.exports = app