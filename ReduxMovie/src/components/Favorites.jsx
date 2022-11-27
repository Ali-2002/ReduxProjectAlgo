import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { removeFromList, setLinkActive } from "../store/actions/actions";
const Favorites = () => {
  const dispatch = useDispatch();
  const { moviesList } = useSelector((state) => state.movies);
  const { linkActive } = useSelector((state) => state.linkActive);
  const [listName, setListName] = useState("");
  //const [linkList, setLinkList] = useState("#");

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
      </div>
    </>
  );
};

export default Favorites;
