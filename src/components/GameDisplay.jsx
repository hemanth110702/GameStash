import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import DefinitionItem from "./DefinitionItem";
import GameTrailer from "./GameTrailer";
import GameScreenShots from "./GameScreenShots";

const GameDisplay = ({darkTheme}) => {
  const data = useParams();
  const gameData = useGame(data.slug);
  if (gameData) {
    const platforms = gameData.parent_platforms.map(
      (item) => item.platform.name
    );
    const genres = gameData.genres.map((item) => item.name);
    console.log(gameData);
    return (
      <div className={darkTheme ? "game-display" : "light-game-display"}>
        <div>
          <h1>{gameData.name}</h1>
          <ExpandableText description={gameData.description_raw} />
          <div className="df-items">
            <DefinitionItem term="Platform" items={platforms}  />
            <DefinitionItem term="Genres" items={genres} />
            <DefinitionItem term="Metascore" items={[gameData.metacritic]} />
            <DefinitionItem
              term="Publishers"
              items={[gameData.publishers[0].name]}
            />
          </div>
        </div>
        <div>
          <div className={darkTheme ? "game-trailer" : "light-game-trailer"}>
            <GameTrailer slug={data.slug} />
          </div>
          <div className={darkTheme ? "game-ss" : "light-game-ss"}>
            <GameScreenShots slug={data.slug} />
          </div>
        </div>
      </div>
    );
  }
};

export default GameDisplay;
