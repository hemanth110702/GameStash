import NavBar from "./components/NavBar"
import CategoryDisplay from "./components/CategoryDisplay"
import Games from "./components/Games"
import "./App.css"
import SideBar from "./components/SideBar"
import { useState } from "react"

function App() {

  const [ selectedGenre, setSelectedGenre ] = useState(null);
  const [ selectedPlatform, setSelectedPlatform ] = useState(null);

  return (
    <>
      <NavBar />
      <SideBar selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <CategoryDisplay selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform}/>
      <Games selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
    </>
  );
}

export default App
