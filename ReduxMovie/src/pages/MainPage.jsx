import React from "react";
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
      </div>
    </>
  );
};

export default MainPage;
