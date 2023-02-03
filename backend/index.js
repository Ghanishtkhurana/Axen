const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/users.route")
const productRouter = require("./routes/product.route")
const app = express()
const connect = require("./config/db")

app.use(cors())
app.use("/users",userRouter)
app.use("/products",productRouter)

app.get("/",(req,res)=>{
    res.send("Home page")
})


app.listen(8080,async()=>{
    await connect()
    console.log('server is started on 8080')
})