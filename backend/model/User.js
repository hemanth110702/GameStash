const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  myGames: [{ type: String }]
});

userSchema.statics.signup = async function (username, email, password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({username, email, password: hash });
    return { error: false, message: "Account created!!!", user }
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "There was an error in creating account",
      user: null,
    }
  }
}

userSchema.statics.login = async function (email, password) {
  try {
    const user = await this.findOne({ email });
    if (!user) return {
      error: true,
      message: "No user found",
      user: null,
    }

    const validPwd = await bcrypt.compare(password, user.password);
    if (!validPwd) return {
      error: true,
      message: "incorrect password",
      user: null,
    };

    return {
      error: false,
      message: "",
      user,
    }
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "There was an error validating credentials",
      user: null,
    }
  }
}

module.exports = mongoose.model("User", userSchema);