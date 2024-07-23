const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  myGames: [{ type: String }]
})

module.exports = mongoose.model("User", userSchema);