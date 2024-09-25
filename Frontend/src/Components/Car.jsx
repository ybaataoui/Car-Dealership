import React from "react";
import { Link } from "react-router-dom";

const Car = ({ car }) => {
  return (
    <div
      className="card mb-4"
      style={{ maxWidth: "100%", height: "100%" }}
      key={car.id}
    >
      {/* Make the image clickable */}
      <Link to={`/details/${car.id}`}>
        <img
          src={car.car_photo}
          className="card-img-top img-fluid"
          alt={car.model}
          style={{ height: "200px", objectFit: "cover" }} // Adjusts height and maintains aspect ratio
        />
      </Link>

      {/* Car Details */}
      <div className="card-footer bg-dark text-white">
        <div className="d-flex justify-content-between">
          <div className="text-center flex-fill">{car.miles} mi</div>
          <div className="text-center flex-fill">{car.year}</div>
          <div className="text-center flex-fill">{car.transmission}</div>
        </div>
      </div>

      {/* Title and Location */}
      <div className="card-body">
        <h5 className="card-title">{car.car_title}</h5>
        <p className="card-text">
          Location: {car.city}, {car.state}
        </p>
      </div>

      {/* Car Type and Price */}
      <div className="card-footer">
        <div className="d-flex justify-content-between">
          <div className="text-start flex-fill text-danger">{car.model}</div>
          <div className="text-end flex-fill text-danger">${car.price.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default Car;
