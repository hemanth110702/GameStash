
const DefinitionItem = ({term, items}) => {
  return (
    <div>
      <dt>
        {term}
      </dt>
      {items.map((item)=> <dd key={item}>{item}</dd>)}
    </div>
  )
}

export default DefinitionItem