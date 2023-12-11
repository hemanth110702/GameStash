import GenresList from "./GenresList";

const SideBar = ({setSelectedGenre}) => {
  return (
    <div className="sidebar">
      <GenresList setSelectedGenre={setSelectedGenre}/>
    </div>
  );
}

export default SideBar