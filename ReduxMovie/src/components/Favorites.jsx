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
      <div className="w-full bg-orange-500 rounded-lg p-6">
        <h1 className="mb-5">Favorite Films</h1>

        <input
          type="text"
          placeholder="Enter list name..."
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          disabled={linkActive}
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <ul>
          {moviesList.length > 0
            ? moviesList.map((fav) => {
                return (
                  <li key={fav.imdbID} className="">
                    {fav.Title}
                    <button
                      onClick={() => dispatch(removeFromList(fav.imdbID))}
                    >
                      <TiDeleteOutline />
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </>
  );
};

export default Favorites;
