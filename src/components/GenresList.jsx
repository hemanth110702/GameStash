import useGenres from "../hooks/useGenres";
import getOptimizedImage from "../services/image-url";

const GenresList = ({ selectedGenre, setSelectedGenre, darkTheme }) => {
  const genres = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li
          onClick={() => setSelectedGenre(() => genre)}
          key={genre.id}
          style={{
            borderRadius: selectedGenre?.id === genre.id ? "8px" : "",
            backgroundColor:
              selectedGenre?.id === genre.id
                ? darkTheme
                  ? "rgba(255, 255, 255, 0.21)"
                  : "rgba(0, 0, 0, 0.21)"
                : "",
          }}
        >
          <img src={getOptimizedImage(genre.image_background)} alt="" />
          <p
            style={{
              fontWeight: selectedGenre?.id === genre.id ? "700" : "",
            }}
          >
            {genre.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
