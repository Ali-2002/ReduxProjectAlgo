import React, { useEffect, useState } from "react";
import { getMovies } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
const SearchBox = () => {
  const [search, setSearch] = useState("");
  const { searchMovies } = useSelector((state) => state.searchMovies);
  console.log(searchMovies);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMovies(search));
  // }, [search]);
  return (
    <>
      <div className="form-control flex flex-row flex-wrap justify-center gap-6">
        <div>
          <label className="input w-1/4 shadow-xl">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value.trim())}
              value={search}
              placeholder="Enter film..."
              className="input input-bordered w-60 max-w-xs focus:outline-none p-2 rounded-lg"
            />
          </label>
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(getMovies(search));
          }}
          className="btn bg-teal-300 border-none text-xl text-white p-1 rounded-lg"
          disabled={!search}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBox;
