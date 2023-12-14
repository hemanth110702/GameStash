import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import ReleaseDate from "./ReleaseDate";
import getOptimizedImage from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";


const Game = ({ game }) => {
   console.log(game);
  return (
    <div className="game-card">
      <img src={getOptimizedImage(game.background_image)} alt="game" />
      <PlatformIconList key={game.slug} platforms={game.parent_platforms} />
      <h1>
        <Link to={`/games/${game.slug}`}>{game.name}</Link>
      </h1>
      <CriticScore metacritic={game.metacritic} />
      <ReleaseDate release={game.released} />
      <Emoji ratingTop={game.rating_top} />
    </div>
  );
};

export default Game;
