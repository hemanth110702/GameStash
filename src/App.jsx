import NavBar from "./components/NavBar"
import CategoryDisplay from "./components/CategoryDisplay"
import Games from "./components/Games"
import "./App.css"
import SideBar from "./components/SideBar"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import ErrorPage from "./components/ErrorPage"
import GameDisplay from "./components/GameDisplay"

function App() {

  const [ selectedGenre, setSelectedGenre ] = useState(null);
  const [ selectedPlatform, setSelectedPlatform ] = useState(null);
  const [ selectedOrder, setSelectedOrder] = useState(null);
  const [ search, setSearch ] = useState('');
  const [ changed, setChanged ] = useState(false);

  return (
    <>
      <NavBar setSearch={setSearch} setChanged={setChanged} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SideBar
                changed={changed}
                setChanged={setChanged}
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
              />
              <CategoryDisplay
                changed={changed}
                selectedGenre={selectedGenre}
                setChanged={setChanged}
                selectedPlatform={selectedPlatform}
                setSelectedPlatform={setSelectedPlatform}
                selectedOrder={selectedOrder}
                setSelectedOrder={setSelectedOrder}
              />
              <Games
                search={search}
                changed={changed}
                setChanged={setChanged}
                selectedGenre={selectedGenre}
                selectedPlatform={selectedPlatform}
                selectedOrder={selectedOrder}
                setSelectedOrder={setSelectedOrder}
              />{" "}
            </>
          }
        />
        <Route path="/games" >
          <Route path=":slug" element={<GameDisplay /> } />
          <Route path="*" element={<ErrorPage /> } />
        </Route>

      </Routes>
      
    </>
  );
}

export default App
