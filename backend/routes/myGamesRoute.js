const express = require('express');
const requireAuth = require('../middleware/requireAuth');
const { myGamesList, updateMyGames, myGamesData } = require('../controller/myGamesController');

const router = express.Router();

// router.use(requireAuth);
router.get("/", myGamesList);
router.post("/data", myGamesData);
router.put("/update/:id", updateMyGames);

module.exports = router;