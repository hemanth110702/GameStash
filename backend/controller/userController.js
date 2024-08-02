const User = require("../model/User");
const jwt = require("jsonwebtoken");
const Joi = require('joi');
const joiPasswordComplexity = require('joi-password-complexity');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
}

const loginUser = async (req, res) => {
  const { error } = validateUserCredentials(req.body, 1);
  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  try {
    const {
      error: loginError,
      message,
      user
    } = await User.login(email, password);
    if (loginError) return res.status(400).send(message);

    const token = await createToken(user._id);
    return res.status(200).json({ email, token, username: user.username });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

const signupUser = async (req, res) => {
  const { error } = validateUserCredentials(req.body, 0);
  if (error) return res.status(400).send(error.details[0].message);

  const { username, email, password } = req.body;

  const valid = await User.findOne({ email });
  if (valid) return res.status(400).send("email already in use");

  try {
    const { error: signupError, message, user } = await User.signup(username, email, password);
    if (signupError) return res.status(500).send(message);
    const token = await createToken(user._id);
    return res.status(200).json({ email, token, username: user.username })
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

function validateUserCredentials(data, login) {
  const joiSchemaL = Joi.object({
    email: Joi.string().email().required(),
    password: joiPasswordComplexity().required(),
  });
  const joiSchemaSU = Joi.object({
    username: Joi.string().min(5).max(20).required(),
    email: Joi.string().email().required(),
    password: joiPasswordComplexity().required(),
  });
  if (login) return joiSchemaL.validate(data);
  return joiSchemaSU.validate(data);
}

module.exports = {loginUser, signupUser};