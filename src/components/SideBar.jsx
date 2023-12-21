import GenresList from "./GenresList"; 

const SideBar = ({ selectedGenre ,setSelectedGenre, darkTheme}) => {
  return (
    <>
    <div className={darkTheme?"sidebar mq-520-black":"light-sidebar mq-520-light"} >
      <h1>Genres</h1>
      <GenresList selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} darkTheme={darkTheme} />
    </div>
    </>
  );
}

export default SideBar;