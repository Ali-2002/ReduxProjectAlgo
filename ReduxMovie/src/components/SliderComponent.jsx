import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { slideData } from "../store/actions/actions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "green",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "green",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

const SliderComponent = () => {
  const { moviesSlide } = useSelector((state) => state.slider);
  console.log(moviesSlide);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(slideData());
  }, []);

  const settings = {
    focusOnSelect: true,
    className: "center",
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings} className="w-[90%] mx-auto p-4 box-border ">
        {moviesSlide.length > 0
          ? moviesSlide.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex gap-1 box-border items-center">
                    <div className="">
                      <img
                        src={`https://image.tmdb.org/t/p/original//${item.poster_path}`}
                        alt={item.Title}
                        className=""
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h1 className="text-6xl font-bold">{item.title}</h1>
                      <h2 className="text-4xl font-semibold">About Film</h2>
                      <h3 className="text-3xl font-medium font-mono">
                        Genres: {item.genres}
                      </h3>
                      <h3 className="text-3xl font-medium font-mono">
                        Release Date: {item.release_date}
                      </h3>
                      <h3 className="text-3xl font-medium font-serif">
                        Overview: {item.overview}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </Slider>
    </>
  );
};

export default SliderComponent;
