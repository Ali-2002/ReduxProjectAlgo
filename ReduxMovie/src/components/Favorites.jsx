import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { removeFromList, setLinkActive } from "../store/actions/actions";
import { useNavigate } from "react-router-dom";

const Favorites = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { moviesList } = useSelector((state) => state.movies);
  const { linkActive } = useSelector((state) => state.linkActive);
  const [listName, setListName] = useState("");
  const navigate = useNavigate();

  const showLink=()=>{
    dispatch(setLinkActive(true));
  }

  const saveList = () => {
    navigate("/list", {
      state: {
        list: moviesList,
        title: listName,
      },
    });
  };

  return (
    <>
      <div className="w-4/5 mx-auto mt-5 flex flex-col justify-center items-center gap-3 bg-[#0f1729] rounded-lg p-6">
        <button
          onClick={closeModal}
          className="w-5 h-5 p-4 rounded-full bg-[#0abab5] flex items-center justify-center self-end text-lg text-white font-semibold"
        >
          X
        </button>
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
          className="bg-teal-500 p-3 text-center text-white rounded-lg text-xl"
          style={{ display: linkActive ? "none" : "block" }}
          onClick={showLink}
          disabled={listName === "" || moviesList.length === 0}
        >
          {" "}
          Save List{" "}
        </button>

        <button
          className="bg-red-600 p-3 rounded-lg text-white text-xl"
          style={{ display: linkActive ? "block" : "none" }}
          onClick={saveList}
        >
          Share Link
        </button>
      </div>
    </>
  );
};

export default Favorites;
