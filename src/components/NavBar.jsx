import SearchInput from "./SearchInput";

const NavBar = ({setSearch, setChanged}) => {
  return (
    <div className="navbar">
      <div className="navbar-section">
        <h1>GameStash</h1>
        <SearchInput setSearch={setSearch} setChanged={setChanged}/>
        <div>
          theme <br /> switched
        </div>
        <div>Collect</div>
        <div>try later</div>
      </div>
    </div>
  );
};

export default NavBar;
