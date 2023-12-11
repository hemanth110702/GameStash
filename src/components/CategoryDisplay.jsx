import OrderBySelector from "./OrderBySelector";
import PlatformSelector from "./PlatformSelector";

const CategoryDisplay = ({
  setChanged,
  selectedPlatform,
  setSelectedPlatform,
  setSelectedOrder
}) => {
  return (
    <div className="category">
      CategoryDisplay
      <PlatformSelector
       setChanged = {setChanged}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />
      <OrderBySelector setSelectedOrder={setSelectedOrder}/>
    </div>
  );
};

export default CategoryDisplay;
