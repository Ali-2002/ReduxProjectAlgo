import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
const Movies = () => {
  const { movies, moviesList } = useSelector((state) => state.movies);
  console.log(movies);
  return (
    <>
      <div>
        {movies.length > 0
          ? movies.map((movie) => {
              <MovieItem
                key={movie.imdbID}
                movie={movie}
                disabled={moviesList.find(
                  (item) => item.imdbID === movie.imdbID
                )}
              />;
              {
                console.log(movie);
              }
            })
          : null}
      </div>
    </>
  );
};

export default Movies;
