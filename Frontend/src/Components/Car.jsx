import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Car.css";

const Car = ({ car }) => {
  console.log(car)
  return (
    <div
      className="card card-car mb-4 shadow-lg"
      // style={{
      //   maxWidth: "100%",
      //   height: "100%",
      //   backgroundColor: "#1b1b1b", // Dark background for the card
      //   color: "#fff", // White text to stand out against the dark background
      //   borderRadius: "8px", // Slight rounding of card corners
      //   overflow: "hidden", // Ensures no overflow issues
      // }}
      key={car.id}
    >
      {/* Make the image clickable */}
      <Link to={`/details/${car.id}`}>
        <img
          src={car.car_photo}
          className="card-img-top img-fluid"
          alt={car.model}
          style={{
            height: "200px",
            objectFit: "cover",
            borderBottom: "2px solid #444", // Border to separate image from the content
          }}
        />
      </Link>

      {/* Car Details */}
      <div className="card-footer bg-dark text-white py-2">
        <div className="d-flex justify-content-between">
          <div className="text-center flex-fill">
            <span>{car.miles} mi</span>
          </div>
          <div className="text-center flex-fill">
            <span>{car.year}</span>
          </div>
          <div className="text-center flex-fill">
            <span>{car.transmission}</span>
          </div>
        </div>
      </div>

      {/* Title and Location */}
      <div className="card-body">
        <h5 className="card-title text-warning">{car.car_title}</h5>
        <p className="card-text">
          <strong>Location:</strong> {car.city}, {car.state}
        </p>
      </div>

      {/* Car Type and Price */}
      <div className="card-footer bg-dark text-white py-2">
        <div className="d-flex justify-content-between">
          <div className="text-start flex-fill text-info">{car.body_style}</div>
          <div className="text-end flex-fill text-success">
            ${car.price.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
