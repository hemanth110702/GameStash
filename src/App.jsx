import NavBar from "./components/NavBar"
import CategoryDisplay from "./components/CategoryDisplay"
import Games from "./components/Games"
import "./App.css"
import SideBar from "./components/SideBar"
import { useState } from "react"

function App() {

  const [ selectedGenre, setSelectedGenre ] = useState(null);

  return (
    <>
      <NavBar />
      <SideBar setSelectedGenre={setSelectedGenre} />
      <CategoryDisplay />
      <Games selectedGenre={selectedGenre} />
    </>
  );
}

export default App
