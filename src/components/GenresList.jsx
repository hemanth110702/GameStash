import { useState } from "react";
import useGenres from "../hooks/useGenres";
import getOptimizedImage from "../services/image-url";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GenresList = ({ selectedGenre, setSelectedGenre }) => {
  const [loading, setLoading] = useState(false);
  const { genres } = useGenres(setLoading);
  return (
    <ul>
      {loading && (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          {[...Array(20)].map((_, index) => (
            <div key={index}>
              <Skeleton variant="h2" width={300} />
              <div style={{ height: 20 }} />
            </div>
          ))}
        </SkeletonTheme>
      )}
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
