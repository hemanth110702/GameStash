

const OrderBySelector = () => {

  const handleOrderBy = (e) => {
    const selectedOrder = e.target.innerText; 
  }

  return (
    <select name="orderBy" id="order" >
      <option value="#">Order By</option>
      <option value="Relevance">Relevance</option>
      <option value="Date added">Date added</option>
      <option value="Name">Name</option>
      <option value="Release Date">Release Date</option>
      <option value="Popularity">Popularity</option>
      <option value="Average rating">Average rating</option>
    </select>
  );
}

export default OrderBySelector;
