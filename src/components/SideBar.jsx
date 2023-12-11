import GenresList from "./GenresList"; 

const SideBar = ({ selectedGenre ,setSelectedGenre}) => {
  return (
    <div className="sidebar">
      <GenresList selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
    </div>
  );
}

export default SideBar