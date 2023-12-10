import React from 'react'

const Game = ({game}) => {
  return (
    <div className='game-card'>
      <img src={game.background_image} alt="game" />
      <h1>{game.name}</h1>
    </div>
  )
}

export default Game