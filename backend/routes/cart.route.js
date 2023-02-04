const express = require("express");
const auth = require("../middleware/auth.middleware");
const Cart = require("../models/cart.model");
const app = express.Router();

app.use(express.json());
app.use(auth);

app.get("/",async(req,res)=>{
    try{
        res.send("cart page")
    }
    catch(e){
        res.send(e.message)
    }
})

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.find({ userId: id });
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

module.exports = app;
