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
              <div key={movie.imdbID}>
                <MovieItem
                  movie={movie}
                  disabled={moviesList.find(
                    (item) => item.imdbID === movie.imdbID
                  )}
                />
              </div>;
              {console.log(movie)}
            })
          : null}
      </div>
    </>
  );
};

export default Movies;
