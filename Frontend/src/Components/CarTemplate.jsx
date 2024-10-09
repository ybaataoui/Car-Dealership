import React from "react";
import { Carousel, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
import "../Styles/CarTemplate.css";

const CarTemplate = ({ car }) => {
    const carouselItems = [
        { id: 1, src: car.car_photo, alt: "slider-car" },
        { id: 2, src: car.car_photo_1, alt: "slider-car" },
        { id: 3, src: car.car_photo_2, alt: "slider-car" },
        { id: 3, src: car.car_photo_2, alt: "slider-car" },
        { id: 3, src: car.car_photo_2, alt: "slider-car" },
    ];
    return (
        <Link to={`/details/${car.id}`} className="car-link">
            <div className="mb-3 bg-white" style={{ width: "90%" }} key={car.id}>
                <div className="row g-0">
                    {/* Left side - Car Image */}
                    <div className="col-md-5">
                        <div className="Card-car-photo bg-white">
                            <Carousel
                                id="carDetailsSlider"
                                className=""
                                interval={3000}
                                fade
                            >
                                {carouselItems.map((item, index) => (
                                    <Carousel.Item key={item.id}>
                                        <img
                                            src={item.src}
                                            className="img-fluid rounded CardImg card-carousel-img"
                                            alt={item.alt}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                            {/* Carousel Indicators */}
                            <ul className="Card-carousel-indicators list-inline ">
                                {carouselItems.map((item, index) => (
                                    <li className="list-inline-item" key={index}>
                                        <a
                                            id={`carousel-selector-${index}`}
                                            data-slide-to={index}
                                            data-target="#carDetailsSlider"
                                        >
                                            <img
                                                src={item.src}
                                                className="img-fluid rounded small-car-image"
                                                alt="small-car"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side - Car Details */}
                    <div className="col-md-7 d-flex flex-column justify-content-between p-2 ">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h6 className="text-dark">{car.condition}</h6>
                                <h6 className="text-end text-dark"><FontAwesomeIcon icon={faHeartO} /> Save</h6>
                            </div>
                            <p><h5 className="card-title text-primary"><span>{car.year}</span> {car.car_title}</h5></p>
                            <p className="text-dark">{car.miles.toLocaleString()} mi.</p>
                            <h3 className="text-dark">${car.price.toLocaleString()}</h3>
                        </div>

                        <div className="card-footer bg-white text-dark d-flex justify-content-between pb-3">
                            <div className="flex-fill text-secondary ">
                                <p className="card-text text-muted">
                                    <strong><FontAwesomeIcon icon={faMapMarkerAlt} /> Location:</strong> {car.city}, {car.state}
                                </p>
                            </div>
                            <div className="text-end ">
                                <button className="btn btn-dark btn-border-radius">Check availability</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CarTemplate;
