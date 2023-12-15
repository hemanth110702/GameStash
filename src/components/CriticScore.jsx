const CriticScore = ({ metacritic }) => {
  const textColor =
    (metacritic >= 0 && metacritic <= 50)
      ? "red"
      : (metacritic > 50 && metacritic <= 75)
      ? "yellow"
      : "green";
  return <div style={{color: textColor, backgroundColor: "black", fontSize: "1.2rem"}}>
    {metacritic}
  </div>;
};

export default CriticScore;
