import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import ReleaseDate from "./ReleaseDate";
import getOptimizedImage from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import Collection from "./Collection";
import { useGameStashContext } from "../context/GameStashContext";

const Game = ({ game, likedGames, setLikedGames, darkTheme }) => {
  const { user } = useGameStashContext();
  return (
    <div className={darkTheme ? "game-card" : "light-game-card"}>
      <img src={getOptimizedImage(game.background_image)} alt="game" />
      <div
        className={darkTheme ? "game-description" : "light-game-description"}
      >
        <div className="platNScore">
          <PlatformIconList key={game.slug} platforms={game.parent_platforms} />
          <CriticScore metacritic={game.metacritic} />
        </div>
        <h1>
          <Link to={`/games/${game.slug}`} target="_blank">
            {game.name}
          </Link>
        </h1>
        <ReleaseDate release={game.released} />
        <div className={darkTheme ? "card-bottom" : "light-card-bottom"}>
          <Emoji ratingTop={game.rating_top} />
          {user && <Collection game={game} />}
        </div>
      </div>
    </div>
  );
};

export default Game;
