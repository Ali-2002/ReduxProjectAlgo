import React from "react";
import Header from "../components/Header";
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
      </div>
    </>
  );
};

export default MainPage;
