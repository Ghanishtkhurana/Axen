const jwt = require("jsonwebtoken");

const deleteProduct = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  try {
    if (token) {
      let decode = jwt.verify(token, "SECRET123");
      console.log(decode);
      if(decode.role === "Admin"){
          next();
      }
      else{
        res.send("You are not Authorized to perform this function")
      }
    }
  } catch (e) {
    res.send("No token found please login");
  }
};

module.exports = deleteProduct;
