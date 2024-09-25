import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Carousel.css"; // Ensure this file contains the updated styles
import carImage from "../assets/Car.jpg"; // Rename for clarity

const carouselItems = [
  { id: 1, src: carImage, alt: "First slide - Car Model 1" },
  { id: 2, src: carImage, alt: "Second slide - Car Model 2" },
  { id: 3, src: carImage, alt: "Third slide - Car Model 3" },
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
