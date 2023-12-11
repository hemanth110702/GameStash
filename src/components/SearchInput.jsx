import { useRef } from "react";

const SearchInput = ({setSearch, setChanged}) => {
  const ref = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(ref.current.value);
    setChanged(true);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input ref={ref} type="text" placeholder="Search games..." />
    </form>
  );
};

export default SearchInput;
