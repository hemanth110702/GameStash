import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import ReleaseDate from "./ReleaseDate";
import getOptimizedImage from "../services/image-url";


const Game = ({ game }) => {
   console.log(game);
  return (
    <div className="game-card">
      <img src={getOptimizedImage(game.background_image)} alt="game" />
      <h1>{game.name}</h1>
      <PlatformIconList key={game.slug} platforms={game.parent_platforms} />
      <CriticScore metacritic={game.metacritic}/>
      <ReleaseDate release={game.released} />
    </div>
  );
};

export default Game;
