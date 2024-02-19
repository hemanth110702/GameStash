import { GameStashContextProvider } from "./context/GameStashContext";
import GameStash from "./components/GameStash";
import "./App.css";

function App() {
  return (
    <GameStashContextProvider>
      <GameStash />
    </GameStashContextProvider>
  );
}

export default App;
