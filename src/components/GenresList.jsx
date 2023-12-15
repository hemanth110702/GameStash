import useGenres from "../hooks/useGenres";
import getOptimizedImage from "../services/image-url";

const GenresList = ({ selectedGenre, setSelectedGenre }) => {
  const genres = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li
          key={genre.id}
          style={{
            borderRadius: selectedGenre?.id === genre.id ? "8px" : "",
            backgroundColor:
              selectedGenre?.id === genre.id ? "rgba(255, 255, 255, 0.21)" : "",
          }}
        >
          <img src={getOptimizedImage(genre.image_background)} alt="" />
          <button
            style={{
              fontWeight: selectedGenre?.id === genre.id ? "700" : "",
            }}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
