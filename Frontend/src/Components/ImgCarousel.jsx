
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Carousel.css"; // Ensure this file contains the updated styles
import car from '../assets/Car.jpg';
import honda from '../assets/Honda.png';

const ImgCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="carousel-container">
            <Carousel activeIndex={activeIndex} onSelect={handleSelect} controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={honda}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="carousel-thumbnails">
                <img
                    className="carousel-thumbnail"
                    src={car}
                    alt="Thumbnail 1"
                    onClick={() => handleSelect(0)}
                />
                <img
                    className="carousel-thumbnail"
                    src={honda}
                    alt="Thumbnail 2"
                    onClick={() => handleSelect(1)}
                />
                <img
                    className="carousel-thumbnail"
                    src={car}
                    alt="Thumbnail 3"
                    onClick={() => handleSelect(2)}
                />
            </div>
        </div>
    );
};

export default ImgCarousel;


