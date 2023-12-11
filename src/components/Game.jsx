import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import ReleaseDate from "./ReleaseDate";
import getOptimizedImage from "../services/image-url";
import Emoji from "./Emoji";


const Game = ({ game }) => {
   console.log(game);
  return (
    <div className="game-card">
      <img src={getOptimizedImage(game.background_image)} alt="game" />
      <PlatformIconList key={game.slug} platforms={game.parent_platforms} />
      <h1>{game.name}</h1>
      <CriticScore metacritic={game.metacritic}/>
      <ReleaseDate release={game.released} />
      <Emoji ratingTop = {game.rating_top}/>
    </div>
  );
};

export default Game;
