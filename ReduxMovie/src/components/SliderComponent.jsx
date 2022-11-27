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
        display: "none",
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
        display: "none",
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
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings} className="w-[90%] mx-auto p-4 box-border">
        {moviesSlide.length > 0
          ? moviesSlide.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex gap-1 box-border items-center bg-slate-900  rounded-xl p-5">
                    <img
                      src={`https://image.tmdb.org/t/p/w500//${item.poster_path}`}
                      alt={item.Title}
                      className="rounded-lg shadow-lg"
                    />

                    <div className="flex flex-col gap-5 ml-5 bg-slate-700 p-5 rounded-xl shadow-lg">
                      <div className="flex justify-between">
                        <h1 className="text-5xl font-bold text-white">
                          {item.title}
                        </h1>
                        <div className="flex items-center justify-center text-3xl w-60 font-semibold bg-orange-400 rounded-xl p-4 text-white">
                          IMDB: {item.vote_average}
                        </div>
                      </div>
                      <h2 className="text-4xl font-semibold text-yellow-50">
                        About Film
                      </h2>
                      <h3 className="text-3xl font-medium font-mono text-white">
                        Genres: {item.genres}
                      </h3>
                      <h3 className="text-3xl font-medium font-mono text-white">
                        Release Date: {item.release_date}
                      </h3>
                      <h3 className="text-3xl font-medium font-serif text-white">
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
