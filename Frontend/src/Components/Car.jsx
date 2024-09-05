import React from "react";
import car from '../assets/Car.jpg';
import { Link } from "react-router-dom";

function Car() {
    return (
        <div className="container mt-4"> {/* Added margin-top for spacing */}
            <div className="card" style={{ width: '19rem' }}>
                {/* Make the image clickable */}
                <Link to="/details">
                    <img src={car} className="card-img-top" alt="Honda Accord" />
                </Link>

                {/* Car Details */}
                <div className="card-footer bg-dark text-white"> {/* Ensured text contrast */}
                    <div className="d-flex justify-content-between w-100">
                        <div className="text-center flex-fill">110,000 mi</div>
                        <div className="text-center flex-fill">2024</div>
                        <div className="text-center flex-fill">Automatic</div>
                    </div>
                </div>

                {/* Title and Location */}
                <div className="card-body">
                    <h5 className="card-title">Honda Accord LX</h5>
                    <p className="card-text">Location: New York</p> {/* Added sample location */}
                </div>

                {/* Car Type and Price */}
                <div className="card-footer">
                    <div className="d-flex justify-content-between w-100">
                        <div className="text-start flex-fill text-danger">Sedan</div>
                        <div className="text-end flex-fill text-danger">$15,000</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Car;
