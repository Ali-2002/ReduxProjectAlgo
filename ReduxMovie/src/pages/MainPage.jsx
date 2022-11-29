import React, { useState } from "react";
import Favorites from "../components/Favorites";
import Header from "../components/Header";
import Movies from "../components/Movies";
import SliderComponent from "../components/SliderComponent";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main-page relative">
        <div>
          <Header openModal={toggleIsOpen} />
        </div>
        <div
          className=" fixed flex justify-self-center self-center left-[10%] w-4/5 z-10"
          style={{ display: !isOpen ? "none" : "block" }}
        >
          <Favorites closeModal={toggleIsOpen} />
        </div>

        <div>
          <SliderComponent />
        </div>

        <div>
          <Movies />
        </div>
      </div>
    </>
  );
};

export default MainPage;
