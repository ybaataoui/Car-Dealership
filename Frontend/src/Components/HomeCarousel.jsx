import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Carousel.css"; // Ensure this file contains the updated styles
import car4 from "../assets/carslider2.jpg";
import car6 from "../assets/Car-6.jpg";
import car7 from "../assets/Car-7.jpg";

const carouselItems = [
  { id: 1, src: car4, alt: "First slide - Car Model 1" },
  { id: 2, src: car6, alt: "Second slide - Car Model 2" },
  { id: 3, src: car7, alt: "Third slide - Car Model 3" },
];

const HomeCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="carousel-item-wrapper">
              <img
                className="d-block w-100 carousel-image"
                src={item.src}
                alt={item.alt}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
