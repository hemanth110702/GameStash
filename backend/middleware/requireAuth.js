const jwt = require("jsonwebtoken");
const User = require("../model/User");

const requireAuth = async (req, res, next) => {
  const {authorization} = req.headers;
  if(!authorization) return res.status(401).send("Authorization token required");

  const token = authorization.split(" ")[1];

  try {
    const data =  await jwt.verify(token, process.env.SECRET);
    req.user = await User.findById(data._id).select("_id");
    next();
  } catch(err) {
    console.log(err);
    return res.status(401).send("Request is not authorized");
  }
};

module.exports = requireAuth;