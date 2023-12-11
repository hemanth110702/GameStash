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
    </div>
  );
};

export default CategoryDisplay;
