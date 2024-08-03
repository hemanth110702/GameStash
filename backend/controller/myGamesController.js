const User = require("../model/User");

const myGamesList = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "user not found" });
    return res.status(200).send(user.myGames);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

const addToMyGames = async (req, res) => {
  const { id, email } = req.params;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    if (!user.myGames.includes(id)) {
      user.myGames.push(id);
      await user.save();
    }

    return res.status(200).json({ message: "Game added to myGames", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

const removeFromMyGames = async (req, res) => {
  const { id, email } = req.params;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const gameIndex = user.myGames.indexOf(id);
    if (gameIndex > -1) {
      user.myGames.splice(gameIndex, 1);
      await user.save();
    } else {
      return res.status(404).json({ message: "game not found in my games", user });
    }
    return res.status(200).json({ message: "game removed from my games", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

module.exports = { addToMyGames, removeFromMyGames, myGamesList };