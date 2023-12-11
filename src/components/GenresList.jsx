import useGenres from "../hooks/useGenres"
import getOptimizedImage from "../services/image-url";

const GenresList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>
          <img src={getOptimizedImage(genre.image_background)} alt="" />
          {genre.name}
        </li>
      ))}
    </ul>
  );
}

export default GenresList