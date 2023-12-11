import NavBar from "./components/NavBar"
import CategoryDisplay from "./components/CategoryDisplay"
import Games from "./components/Games"
import "./App.css"
import SideBar from "./components/SideBar"
import { useState } from "react"

function App() {

  const [ selectedGenre, setSelectedGenre ] = useState(null);
  const [ selectedPlatform, setSelectedPlatform ] = useState(null);
  const [ selectedOrder, setSelectedOrder] = useState(null);
  const [ changed, setChanged ] = useState(false);

  return (
    <>
      <NavBar />
      <SideBar changed={changed} setChanged={setChanged} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <CategoryDisplay changed={changed} setChanged={setChanged} selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder}/>
      <Games changed={changed} setChanged={setChanged} selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder}/>
    </>
  );
}

export default App
