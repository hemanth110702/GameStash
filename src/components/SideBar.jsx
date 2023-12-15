import GenresList from "./GenresList"; 

const SideBar = ({ selectedGenre ,setSelectedGenre}) => {
  return (
    <>
    <div className="sidebar">
      <h1>Genres</h1>
      <GenresList selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
    </div>
    </>
  );
}

export default SideBar