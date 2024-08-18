import { Link, NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";
import love from "../assets/love.png";
import Theme from "./Theme";
import { useGameStashContext } from "../context/GameStashContext";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import AuthModal from "./AuthModal";

const NavBar = () => {
  const { setSearch, setChanged, darkTheme, setDarkTheme, user } =
    useGameStashContext();
  const { logout } = useLogout();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleLogout = () => {
    logout();
    setModalIsOpen(false);
  };

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
        {user != null && (
          <div className="user-container">
            <div
              className={darkTheme ? "username" : "light-username"}
              title={user.username}
            >
              {user.username.length > 10
                ? user.username.slice(0, 9) + "..."
                : user.username}
            </div>
            <div
              className={
                darkTheme ? "logout-container" : "light-logout-container"
              }
              onClick={handleLogout}
            >
              <button>Logout</button>
            </div>
          </div>
        )}
        {user == null && (
          <div
            className={darkTheme ? "auth-container" : "light-auth-container"}
          >
            <button onClick={openModal}>Login / Signup</button>
            <AuthModal isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
