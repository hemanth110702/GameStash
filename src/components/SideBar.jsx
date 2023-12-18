import GenresList from "./GenresList"; 

const SideBar = ({ selectedGenre ,setSelectedGenre, darkTheme}) => {
  return (
    <>
    <div className={darkTheme?"sidebar":"light-sidebar"}>
      <h1>Genres</h1>
      <GenresList selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} darkTheme={darkTheme} />
    </div>
    </>
  );
}

export default SideBar;