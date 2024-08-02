const express = require('express');
const { gamesController, fetchGameData, fetchGameTrailer, fetchGameScreenshots } = require('../controller/gamesController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();


// router.use(requireAuth);
router.get("/", gamesController);
router.get("/fetch/:url", fetchGameData);
router.get("/fetch/:url/movies", fetchGameTrailer);
router.get("/fetch/:url/screenshots", fetchGameScreenshots);

module.exports = router;