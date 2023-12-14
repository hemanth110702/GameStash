import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import DefinitionItem from "./DefinitionItem";
import GameTrailer from "./GameTrailer";

const GameDisplay = () => {
  const data = useParams();
  const gameData = useGame(data.slug);
  if(gameData){
  const platforms = gameData.parent_platforms.map(
    (item) => item.platform.name
  );
  const genres = gameData.genres.map((item)=>item.name)
  console.log(gameData);
  return (
    <div>
      GameDisplay
      <h1>{gameData.name}</h1>
      <ExpandableText description={gameData.description_raw} />
      <DefinitionItem term="Platform" items={platforms} />
      <DefinitionItem term="Genres" items={genres} />
      <DefinitionItem term="Metascore" items={[gameData.metacritic]} />
      <DefinitionItem term="Publishers" items={[gameData.publishers[0].name]} />
      <GameTrailer slug={data.slug} />
    </div>
  ); }
};

export default GameDisplay;
