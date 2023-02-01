const mongoose = require("mongoose")

const connect = async()=>{
    return await mongoose.connect("mongodb+srv://ace:ace123@cluster0.b04n5vc.mongodb.net/test")
}

module.exports = connect