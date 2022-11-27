import React from "react";
import Favorites from "../components/Favorites";
import Header from "../components/Header";
import Movies from "../components/Movies";
import SliderComponent from "../components/SliderComponent";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <div>
          <Header />
        </div>
        <div>
          <SliderComponent />
        </div>
        <div>
          <Movies />
        </div>
        <div>
          <Favorites/>
        </div>
      </div>
    </>
  );
};

export default MainPage;
