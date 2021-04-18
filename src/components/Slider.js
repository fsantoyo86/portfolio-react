import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="relative flex items-center justify-center">
      <FaArrowAltCircleLeft
        className="absolute top-100 bg-white text-3xl opacity-40 hover:opacity-80 text-teal-400 hover:text-teal-300 shadow-3xl cursor-pointer rounded-full left-3"
        onClick={prevSlide}
      ></FaArrowAltCircleLeft>
      <FaArrowAltCircleRight
        className="absolute top-100 text-3xl bg-white opacity-40 hover:opacity-80 text-teal-400 hover:text-teal-300 shadow-3xl cursor-pointer rounded-full right-3"
        onClick={nextSlide}
      ></FaArrowAltCircleRight>

      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="Nutrición"
                className="w-full h-56 rounded-sm"
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
