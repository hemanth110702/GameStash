require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gamesRoute = require('./routes/gamesRoute');
const userRoute = require('./routes/userRoute');
const myGamesRoute = require('./routes/myGamesRoute');

const app = express();

const corsOptions = {
  origin: "https://gamestash-frontend-lmj20opwr-hemanth110702s-projects.vercel.app", 
  optionsSuccessStatus: 200, 
};

app.options("*", cors(corsOptions));

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/games", gamesRoute);
app.use("/api/my-games", myGamesRoute);

mongoose.connect(process.env.MONGODB_URL).then(() => {
  app.listen(process.env.PORT, () =>
    console.log("Connected to DB & listening on port " + process.env.PORT));
}).catch((err) => console.log("There was an error connecting to DB " + err));
