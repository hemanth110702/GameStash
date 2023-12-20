import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import love from "../assets/love.png";
import Theme from "./Theme";

const NavBar = ({ setSearch, setChanged, darkTheme, setDarkTheme }) => {
  return (
    <div className={darkTheme ? "navbar" : "light-navbar"}>
      <div className="navbar-section">
        <h1>
          <Link to="/" reloadDocument>
            GameStash
          </Link>
        </h1>
        <SearchInput
          setSearch={setSearch}
          setChanged={setChanged}
          darkTheme={darkTheme}
        />
        <Theme darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <div className={darkTheme ? "my-games" : "light-my-games"}>
          <Link to="/myGames">
            <img src={love} alt="" />
            My Games
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
