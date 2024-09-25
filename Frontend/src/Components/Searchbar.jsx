import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Header.css"; // You can add your custom styles here

function Searchbar() {
    return (
        <Container className="pt-3 searchbar-container">
            <div className="d-flex justify-content-center align-items-center searchbar-wrap">

                {/* Make Dropdown */}
                <div className="btn-group m-2 btn-search">
                    <button className="btn btn-black  btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Make
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Acura</a></li>
                        <li><a className="dropdown-item" href="#">Honda</a></li>
                    </ul>
                </div>

                {/* Model Dropdown */}
                <div className="btn-group m-2 btn-search">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Model
                    </button>
                    <ul className="dropdown-menu">
                        {/* Add your models here */}
                    </ul>
                </div>

                {/* Distance Dropdown */}
                <div className="btn-group m-2 btn-search">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Distance
                    </button>
                    <ul className="dropdown-menu">
                        {/* Add distance options here */}
                    </ul>
                </div>

                {/* Zip Code Input */}
                <div className="m-2 zip-input">
                    <input type="text" className="form-control form-control-lg" placeholder="Zip Code" />
                </div>

                {/* Show Results Button */}
                <div className="m-2">
                    <button className="btn btn-danger btn-lg btn-search" type="button">
                        Show Results
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default Searchbar;
