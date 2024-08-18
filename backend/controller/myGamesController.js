const User = require("../model/User");
const axios = require("axios");

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

const myGamesData = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "user not found" });
    const gameDetailsList = await Promise.all(user.myGames.map(async (gameId) => {
      const response = await axios.get(`https://api.rawg.io/api/games/${gameId}`, {
        params: {
          key: process.env.RAWG_API_KEY,
        }
      });
      const { id, background_image, slug, parent_platforms, metacritic, name, released, rating_top } = response.data;
      return { id, background_image, slug, parent_platforms, metacritic, name, released, rating_top };
    }));
    res.status(200).json({ gameDetailsList });
  } catch (error) {
    console.log('Error fetching game data', error);
    return res.status(500).json({ message: 'failed to fetch game data' });
  }
}

const updateMyGames = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "user not found" });
    const gameIndex = user.myGames.indexOf(id);
    if (gameIndex === -1) {
      user.myGames.push(id);
    } else {
      user.myGames.splice(gameIndex, 1);
    }
    await user.save();
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

module.exports = { updateMyGames, myGamesList, myGamesData };