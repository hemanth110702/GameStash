import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import love from "../assets/love.png"

const NavBar = ({ setSearch, setChanged }) => {
  return (
    <div className="navbar">
      <div className="navbar-section">
        <h1>
          <Link to="/">GameStash</Link>
        </h1>
        <SearchInput setSearch={setSearch} setChanged={setChanged} />

        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>

        <div className="my-games">
          <img src={love} alt="" />
          <Link to="/myGames">My Games</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
