import React from "react";
import { Link } from "react-router-dom";

const Car = ({ car }) => {
    return (
        <div className="card" style={{ width: '19rem', height: '25rem' }} key={car.id}>
            {/* Make the image clickable */}
            <Link to={`/details/${car.id}`}> {/*Pass the car ID to the details pag */}
                <img src={car.car_photo} className="card-img-top" alt={car.model} style={{ width: '19rem', height: '14rem' }} />
            </Link>

            {/* Car Details */}
            <div className="card-footer bg-dark text-white">
                <div className="d-flex justify-content-between w-100">
                    <div className="text-center flex-fill">{car.miles} mi</div>
                    <div className="text-center flex-fill">{car.year}</div>
                    <div className="text-center flex-fill">{car.transmission}</div>
                </div>
            </div>

            {/* Title and Location */}
            <div className="card-body">
                <h5 className="card-title">{car.car_title}</h5>
                <p className="card-text">Location: {car.city}, {car.state}</p>
            </div>

            {/* Car Type and Price */}
            <div className="card-footer">
                <div className="d-flex justify-content-between w-100">
                    <div className="text-start flex-fill text-danger">{car.model}</div>
                    <div className="text-end flex-fill text-danger">${car.price}</div>
                </div>
            </div>
        </div>
    );
};

export default Car;
