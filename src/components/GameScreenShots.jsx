import React from "react";
import useGame from "../hooks/useGame";

const GameScreenShots = ({ slug }) => {
  const data = useGame(`${slug}/screenshots`);

  if (data) {
    const screenshots = data.results;

    console.log(data);

    return (
      <div>
        {screenshots.map((shot) => (
          <img
            key={shot.id}
            src={shot.image}
            width={shot.width}
            height={shot.height}
          />
        ))}
      </div>
    );
  }
};

export default GameScreenShots;
