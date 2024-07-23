require('dotenv').config();
const express = require('express');
const cors = require('cors');
const gamesRoute = require('./routes/gamesRoute');
const app = express();

app.use(cors());
app.use(express.json());

/* app.use("/api/home", homeRoute);
app.use("/api/my-games", myGamesRoute);
app.use("/api/search", searchRoute); */
app.use("/api/games", gamesRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port"));