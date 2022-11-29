import React from "react";
import SearchBox from "./SearchBox";
import { HiOutlineFilm } from "react-icons/hi";
import { useSelector } from "react-redux";
const Header = ({ openModal }) => {
  const { moviesList } = useSelector((state) => state.movies);
  return (
    <>
      <header className="bg-[#002b3d] p-4 flex justify-between items-center">
        <h1 className="text-[#FFEEDB] text-5xl font-serif">AnyFilm</h1>
        <SearchBox />
        <button onClick={openModal} className="flex items-center gap-2">
          <HiOutlineFilm size={44} color={"white"} />
          <span className="text-base text-white w-10 h-10 rounded-full bg-red-600 flex justify-center items-center">{moviesList.length}</span>
        </button>
      </header>
    </>
  );
};

export default Header;
