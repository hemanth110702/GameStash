import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import love from "../assets/love.png"
import Theme from "./Theme";

const NavBar = ({ setSearch, setChanged, darkTheme, setDarkTheme }) => {
  return (
    <div className="navbar">
      <div className="navbar-section">
        <h1>
          <Link to="/">GameStash</Link>
        </h1>
        <SearchInput setSearch={setSearch} setChanged={setChanged} />
        <Theme darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <div className="my-games">
          <img src={love} alt="" />
          <Link to="/myGames">My Games</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
