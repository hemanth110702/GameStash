require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gamesRoute = require('./routes/gamesRoute');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/user", userRoute);
app.use("/api/games", gamesRoute);

/* app.use("/api/home", homeRoute);
app.use("/api/my-games", myGamesRoute);
app.use("/api/search", searchRoute); */

mongoose.connect(process.env.MONGODB_URL).then(() => {
  app.listen(process.env.PORT, () =>
    console.log("Connected to DB & listening on port " + process.env.PORT));
}).catch((err) => console.log("There was an error connecting to DB " + err));
