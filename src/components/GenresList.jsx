import useGenres from "../hooks/useGenres";
import getOptimizedImage from "../services/image-url";

const GenresList = ({ selectedGenre, setSelectedGenre }) => {
  const genres = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>
          <img src={getOptimizedImage(genre.image_background)} alt="" />
          <button
            style={{
              backgroundColor: selectedGenre?.id === genre.id ? "blue" : "",
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
