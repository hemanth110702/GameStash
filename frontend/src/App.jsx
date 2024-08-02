import { GameStashContextProvider } from "./context/GameStashContext";
import GameStash from "./Routes/GameStash";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <GameStashContextProvider>
        <GameStash />
      </GameStashContextProvider>
    </AuthContextProvider>
  );
}

export default App;
