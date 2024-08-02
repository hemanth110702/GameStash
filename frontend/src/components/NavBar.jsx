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

  console.log(user);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleLogout = () => {
    logout();
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
          <div>
            <div>{user.username}</div>
            <div onClick={handleLogout}>Logout</div>
          </div>
        )}
        {user == null && (
          <div>
            <button onClick={openModal}>Login / Signup</button>
            <AuthModal isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
