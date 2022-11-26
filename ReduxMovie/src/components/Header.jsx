import React from "react";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <>
      <header className="bg-[#591285] p-4 flex justify-between items-center">
        <h1 className="text-[#FFEEDB] text-5xl font-serif">AnyFilm</h1>
        <SearchBox />
      </header>
    </>
  );
};

export default Header;
