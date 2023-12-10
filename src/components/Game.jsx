import React from "react";
import PlatformIconList from "./PlatformIconList";

const Game = ({ game }) => {
   console.log(game);
  return (
    <div className="game-card">
      <img src={game.background_image} alt="game" />
      <h1>{game.name}</h1>
      {/* <div>
        {game.parent_platforms.map((platform, index) => (
          <h3 key={index}>{platform.platform.name}</h3>
        ))}
      </div> */}
      <PlatformIconList key={game.slug} platforms={game.parent_platforms} />
    </div>
  );
};

export default Game;
