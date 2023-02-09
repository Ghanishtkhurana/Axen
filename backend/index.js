const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/users.route")
const productRouter = require("./routes/product.route")
const cartRouter = require("./routes/cart.route")
const app = express()
const connect = require("./config/db")
const addressRouter = require("./routes/address.route")

app.use(cors())
app.use("/users",userRouter)
app.use("/products",productRouter)
app.use("/carts",cartRouter)
app.use("/admin",addressRouter)

app.get("/",(req,res)=>{
    res.send("Home page")
})


app.listen(8080,async()=>{
    await connect()
    console.log('server is started on 8080')
})