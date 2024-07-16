const DefinitionItem = ({ term, items }) => {
  return (
    <div className="df-item">
      <dt>{term}</dt>
      {items.map((item) => (
        <dd key={item}>{item}</dd>
      ))}
    </div>
  );
};

export default DefinitionItem;
