const axios = require("axios");

const gamesController = async (req, res) => {
  const { genres, parent_platforms, ordering, search, page } = req.query;

  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: {
        key: process.env.RAWG_API_KEY,
        genres,
        parent_platforms,
        ordering,
        search,
        page,
      },
    });
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const fetchGameData = async (req, res) => {
  const { url } = req.params;
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${url}`, {
      params: {
        key: process.env.RAWG_API_KEY,
      }
    });
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const fetchGameTrailer = async (req, res) => {
  const { url } = req.params;
  try {
    const response = await axios.get(`https://api.rawg.io./api/games/${url}/movies`, {
      params: {
        key: process.env.RAWG_API_KEY,
      }
    });
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const fetchGameScreenshots = async (req, res) => {
  const { url } = req.params;
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${url}/screenshots`, {
      params: {
        key: process.env.RAWG_API_KEY,
      }
    });
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { gamesController, fetchGameData, fetchGameTrailer, fetchGameScreenshots };