import PlatformSelector from "./PlatformSelector";

const CategoryDisplay = ({ selectedPlatform,setSelectedPlatform}) => {
  return (
    <div className="category">
      CategoryDisplay
      <PlatformSelector selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform}/>
    </div>
  );
};

export default CategoryDisplay;
