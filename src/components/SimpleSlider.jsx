import React, { useState, useEffect } from "react";
import "../css/SimpleSlider.css";
const slides = ["Image 1", "Image 2", "Image 3", "Image 4"];
const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const visibleSlides = isMobile ? 2 : 1;
  const nextSlide = () => {
    const maxIndex = slides.length - visibleSlides;
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > maxIndex ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    const maxIndex = slides.length - visibleSlides;
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? maxIndex : prevIndex - 1
    );
  };
  return (
    <div className="slider-wrapper">
      <div className={`slides ${isMobile ? "vertical" : "horizontal"}`}>
        {slides
          .slice(currentIndex, currentIndex + visibleSlides)
          .map((slide, i) => (
            <div className="slide" key={i}>
              {slide}
            </div>
          ))}
      </div>

      <div className="slider-controls">
        <button onClick={prevSlide} className="arrow left">
          ←
        </button>
        <div className="dots">
          {Array.from({ length: slides.length - visibleSlides + 1 }).map(
            (_, i) => (
              <span
                key={i}
                className={`dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
              ></span>
            )
          )}
        </div>
        <button onClick={nextSlide} className="arrow right">
          →
        </button>
      </div>
    </div>
  );
};

export default SimpleSlider;
