const express = require("express");
const auth = require("../middleware/auth.middleware");
const Cart = require("../models/cart.model");
const app = express.Router();
const jwt = require("jsonwebtoken")

app.use(express.json());
app.use(auth);

app.get("/", async (req, res) => {
  try {
    let token = req.headers.authorization
    let decode = jwt.verify(token,"SECRET123")
    console.log("decode=>",decode)
    const cart = await Cart.find({userId : decode.id});
    res.send(cart);
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const cartItem = await Cart.create({ ...req.body });
    res.send(cartItem);
  } catch (e) {
    res.send(e.message);
  }
});

app.patch("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const cartItem = await Cart.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.send(cartItem);
  } catch (e) {
    res.send(e.message);
  }
});

app.delete("/",async(req,res)=>{
  try{
    const cartItem = await Cart.deleteMany({userId : req.body.userId})
    res.send("Item is deleted from your cart")
  }
  catch(e){
    res.send(e.message)
  }
})

module.exports = app;
