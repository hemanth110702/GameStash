import { Link, NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";
import love from "../assets/love.png";
import Theme from "./Theme";
import { useGameStashContext } from "../context/GameStashContext";

const NavBar = () => {
  const { setSearch, setChanged, darkTheme, setDarkTheme } =
    useGameStashContext();
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
          <NavLink to="/myGames">
            <img src={love} alt="" />
            <span>My Games</span>
          </NavLink>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
