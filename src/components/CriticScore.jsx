const CriticScore = ({ metacritic }) => {
  const bgColor =
    (metacritic >= 0 && metacritic <= 50)
      ? "red"
      : (metacritic > 50 && metacritic <= 75)
      ? "yellow"
      : "green";
  return <div style={{color: bgColor, backgroundColor: "black", width: "30px"}}>
    {metacritic}
  </div>;
};

export default CriticScore;
