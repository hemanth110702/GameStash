import { useGameStashContext } from "../context/GameStashContext";
import OrderBySelector from "./OrderBySelector";
import PlatformSelector from "./PlatformSelector";

const CategoryDisplay = () => {
  const {
    setChanged,
    selectedPlatform,
    setSelectedPlatform,
    setSelectedOrder,
    selectedGenre,
    darkTheme,
  } = useGameStashContext();

  const gameHeading = `${selectedPlatform?.name || ""}  ${
    selectedGenre?.name || ""
  } Games `;

  return (
    <div className={darkTheme ? "category" : "light-category"}>
      <h1>{gameHeading}</h1>
      <PlatformSelector
        setChanged={setChanged}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />
      <OrderBySelector setSelectedOrder={setSelectedOrder} />
    </div>
  );
};

export default CategoryDisplay;
