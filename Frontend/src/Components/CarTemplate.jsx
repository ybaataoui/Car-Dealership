import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartO } from "@fortawesome/free-regular-svg-icons";
import MessageModel from "./MessageModel";
import "../Styles/CarTemplate.css";

const CarTemplate = ({ car }) => {
  const [showModel, setShowModel] = useState(false);
  const carouselItems = [
    { id: 1, src: car.car_photo, alt: "slider-car" },
    { id: 2, src: car.car_photo_1, alt: "slider-car" },
    { id: 3, src: car.car_photo_2, alt: "slider-car" },
  ];

  const handleSendMessage = (e) => {
    e.stopPropagation(); // Prevents the click from triggering the Link
    setShowModel(true);
  };

  return (
    <div
      className="mb-3 bg-white car-template"
      style={{ width: "90%" }}
      key={car.id}
    >
      <div className="row g-0">
        {/* Left side - Car Image */}
        <div className="col-md-5">
          <div className="Card-car-photo ">
            <Carousel id="carDetailsSlider" className="" interval={3000} fade>
              {carouselItems.map((item) => (
                <Carousel.Item key={item.id}>
                  <Link to={`/details/${car.id}`} className="car-link">
                    <img
                      src={item.src}
                      className="img-fluid rounded CardImg card-carousel-img"
                      alt={item.alt}
                    />
                  </Link>
                </Carousel.Item>
              ))}
            </Carousel>

            {/* Carousel Indicators */}
            <ul className="Card-carousel-indicators list-inline">
              {carouselItems.map((item, index) => (
                <li className="list-inline-item" key={index}>
                  <img
                    src={item.src}
                    className="img-fluid rounded small-car-image"
                    alt="small-car"
                  />
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
              <h6 className="text-end text-dark">
                <FontAwesomeIcon icon={faHeartO} /> Save
              </h6>
            </div>
            <Link to={`/details/${car.id}`} className="car-link">
              <h5 className="card-title text-primary">
                <span>{car.year}</span> {car.car_title}
              </h5>
            </Link>
            <p className="text-dark">{car.miles.toLocaleString()} mi.</p>
            <h3 className="text-dark">${car.price.toLocaleString()}</h3>
          </div>

          <div className="card-footer bg-white text-dark d-flex justify-content-between pb-3 ">
            <div className="flex-fill text-secondary ">
              <p className="card-text text-muted">
                <strong>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:
                </strong>{" "}
                {car.city}, {car.state}
              </p>
            </div>
            <div className="text-end">
              <button
                className="btn btn-dark btn-border-radius"
                onClick={handleSendMessage}
              >
                Check availability
              </button>
              <MessageModel
                show={showModel}
                handleClose={() => setShowModel(false)}
                car={car}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTemplate;
