

const OrderBySelector = ({setSelectedOrder}) => {

  const handleOrderBy = (e) => {
    const orderValue = e.target.value; 
    setSelectedOrder({label: orderValue});
  }

  const orders = [
    { value:  "", label: "Relevance" },
    { value:  "-added", label: "Date added" },
    { value:  "name", label: "Name" },
    { value:  "-released", label: "Release date" },
    { value:  "-metacritic", label: "Popularity" },
    { value:  "-rating", label: "Average rating" },
  ]

  return (
    <select name="orderBy" id="order" onChange={handleOrderBy}>
      <option key="orderBy" value="order by" disabled selected>
        Order By
      </option>
      {orders.map((order) => (
        <option key={order.value} value={order.value}>
          {order.label}
        </option>
      ))}
    </select>
  );
}

export default OrderBySelector;
