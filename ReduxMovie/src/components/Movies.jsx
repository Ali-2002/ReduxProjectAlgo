import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
const Movies = () => {
  const { movies, moviesList } = useSelector((state) => state.movies);
  console.log(movies);
  return (
    <>
      <div className="flex gap-3 mt-10 flex-wrap justify-center">
        {movies.length > 0
          ? movies.map((movie) => {
              return (
                <MovieItem
                  key={movie.imdbID}
                  movie={movie}
                  disabled={moviesList.find(
                    (item) => item.imdbID === movie.imdbID
                  )}
                />
              );
            })
          : null}
      </div>
    </>
  );
};

export default Movies;
