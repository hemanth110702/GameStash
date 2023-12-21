import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ setSearch, setChanged, darkTheme }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(ref.current.value);
    setChanged(true);
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={ref}
        type="text"
        className={darkTheme ? "" : "light-search-input"}
        placeholder="Search games..."
      />
    </form>
  );
};

export default SearchInput;
