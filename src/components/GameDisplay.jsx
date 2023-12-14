import React from 'react'
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame';
import ExpandableText from './ExpandableText';

const GameDisplay = () => {
  const data =  useParams();
  const gameData = useGame(data.slug);
  console.log(gameData);
  return (
    <div>GameDisplay
      <h1>{gameData.name}</h1>
      <ExpandableText description= {gameData.description_raw} />
    </div>
  )
}

export default GameDisplay