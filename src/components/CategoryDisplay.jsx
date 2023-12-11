import OrderBySelector from "./OrderBySelector";
import PlatformSelector from "./PlatformSelector";

const CategoryDisplay = ({
  setChanged,
  selectedPlatform,
  setSelectedPlatform,
}) => {
  return (
    <div className="category">
      CategoryDisplay
      <PlatformSelector
       setChanged = {setChanged}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />
      <OrderBySelector />
    </div>
  );
};

export default CategoryDisplay;
