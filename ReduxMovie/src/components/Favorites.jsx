import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { removeFromList, setLinkActive } from "../store/actions/actions";
const Favorites = () => {
  const dispatch = useDispatch();
  const { moviesList } = useSelector((state) => state.movies);
  const { linkActive } = useSelector((state) => state.linkActive);
  const [listName, setListName] = useState("");
  const [linkList, setLinkList] = useState("#");

  const saveList = () => {
    dispatch(setLinkActive(true));
    axios
      .post("https://acb-api.algoritmika.org/api/movies/list", {
        title: listName,
        movies: moviesList.map((item) => item.imdbID),
      })
      .then((res) => {
        setLinkList(res.data.id);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-3 bg-orange-500 rounded-lg p-6">
        <h1 className="mb-5 text-6xl font-semibold text-white text-center">
          Favorite Films
        </h1>
        <input
          type="text"
          placeholder="Enter list name..."
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          disabled={linkActive}
          className="input input-bordered input-primary w-full max-w-xs p-3 rounded-lg text-2xl focus:outline-none"
        />
        {moviesList.length > 0 ? (
          <ul className="bg-slate-500 p-7 rounded-lg shadow-2xl flex flex-col gap-4">
            {moviesList.length > 0
              ? moviesList.map((fav) => {
                  return (
                    <li
                      key={fav.imdbID}
                      className="text-white text-xl flex justify-center items-center"
                    >
                      {fav.Title}
                      <button
                        className="ml-3 my-auto hover:cursor-pointer"
                        onClick={() => dispatch(removeFromList(fav.imdbID))}
                      >
                        <TiDeleteOutline size={28} />
                      </button>
                    </li>
                  );
                })
              : null}
          </ul>
        ) : null}
        <button
          type="button"
          className="bg-teal-500 p-3 text-center text-white rounded-lg"
          style={{ display: linkActive ? "none" : "block" }}
          onClick={saveList}
          disabled={listName === "" || moviesList.length === 0}
        >
          {" "}
          Save List{" "}
        </button>

        <a
          href={`http://127.0.0.1:5173/list/${linkList}`}
          target="_blank"
          rel="noopener norefer"
          className="bg-red-600 p-3 rounded-lg text-white"
          style={{ display: linkActive ? "block" : "none" }}
        >
          Share Link
        </a>
      </div>
    </>
  );
};

export default Favorites;
