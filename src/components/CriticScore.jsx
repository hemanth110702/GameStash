const CriticScore = ({ metacritic }) => {
  const textColor =
    metacritic >= 0 && metacritic <= 50
      ? "red"
      : metacritic > 50 && metacritic <= 75
      ? "yellow"
      : "green";
  return (
    <div className="critic-score" style={{ color: textColor }}>
      {metacritic}
    </div>
  );
};

export default CriticScore;
