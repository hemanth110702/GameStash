import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const NavBar = ({ setSearch, setChanged }) => {
  return (
    <div className="navbar">
      <div className="navbar-section">
        <h1>
          <Link to="/">GameStash</Link>
        </h1>
        <SearchInput setSearch={setSearch} setChanged={setChanged} />
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
