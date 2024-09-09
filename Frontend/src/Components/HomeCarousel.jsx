import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Carousel.css"; // Ensure this file contains the updated styles
import car from '../assets/Car.jpg';

const HomeCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-content">
                        <img
                            className="d-block w-100 carousel-image"
                            src={car}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-content">
                        <img
                            className="d-block w-100 carousel-image"
                            src={car}
                            alt="Second slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-content">
                        <img
                            className="d-block w-100 carousel-image"
                            src={car}
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel; 