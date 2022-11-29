import React from "react";
import { useLocation } from "react-router-dom";
import Movies from "../components/Movies";

const ListPage = () => {
  const locate = useLocation();
  console.log(locate.state.list);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {locate.state.list.map((movie) => (
          <div className="p-6 bg-slate-800 rounded-lg shadow-lg flex flex-col justify-center items-center ">
            <div>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <h1 className="text-white text-2xl w-56 text-center mb-3">
              {movie.Title}
            </h1>
            <div className="text-white text-2xl">{movie.Year}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPage;
