import React from "react";
import { Carousel } from "react-bootstrap";

export function HeroPanel({ slides }) {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100"
            src={slide.src}
            alt="Slide "
            width="800px"
            height="500px"
          />
          <Carousel.Caption>
            <h1>{slide.title}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
