const express = require('express');
const requireAuth = require('../middleware/requireAuth');
const { addToMyGames, removeFromMyGames, myGamesList } = require('../controller/myGamesController');

const router = express.Router();

// router.use(requireAuth);
router.get("/", myGamesList);
router.post("/add/:id", addToMyGames);
router.post("/remove/:id", removeFromMyGames);

module.exports = router;