import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { HiOutlineFilm } from "react-icons/hi";
//const [isOpen, setIsOpen] = useState(false);
const Header = ({openModal}) => {
  return (
    <>
      <header className="bg-[#002b3d] p-4 flex justify-between items-center">
        <h1 className="text-[#FFEEDB] text-5xl font-serif">AnyFilm</h1>
        <SearchBox />
        <button onClick={openModal}>
          <HiOutlineFilm size={44} color={"white"}/>
        </button>
      </header>
    </>
  );
};

export default Header;
