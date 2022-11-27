import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
const Movies = () => {
  const { movies } = useSelector((state) => state.movies);
  const { moviesList } = useSelector((state) => state.moviesList);
  return (
    <>
      <div>
        {movies.length > 0
          ? movies.map((movie) => {
              <div key={movie.imdbID}>
                <MovieItem
                  movie={movie}
                  disabled={moviesList.find(
                    (item) => item.imdbID === movie.imdbID
                  )}
                />
              </div>;
            })
          : null}
      </div>
    </>
  );
};

export default Movies;
