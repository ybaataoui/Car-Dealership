import React from "react";
import CarBreadcrumb from "./Breadcrumb";
import car from '../assets/Car.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Navbar from "../Components/Navbar";

function CarDetails() {
    return (

        <div className="container">
            <div className="bg-black">
                <div className="">
                    <Navbar />
                </div>

                <div>
                    <h1>Car name</h1>
                    <CarBreadcrumb />
                </div>
            </div>

            <div className="bg-light ">
                <div className="row ">
                    <div className="col-8">
                        <div className="d-flex justify-content-between w-100">
                            <div className="text-start flex-fill ">
                                <p>Sedan</p>
                                <p>Orlando</p>
                            </div>
                            <div className="text-end flex-fill ">$15,000</div>
                        </div>
                        {/* Carousel pictures of the car */}
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={car} className="d-block w-100 img" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={car} className="d-block w-100 img" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={car} className="d-block w-100 img" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <div className="border mb-4">
                            {/* text button */}
                            <button className="btn btn-danger mt-4 btn-lg">
                                Send a Message
                            </button>
                            <h3 className="text-start mt-4 ms-3">Car Specs</h3>
                            {/* Car details information */}
                            <div className="container mt-4 bg-light">
                                <table className="table ">
                                    <tbody>
                                        <tr>
                                            <td className="text-start">Color</td>
                                            <td className="text-end">Black</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Model</td>
                                            <td className="text-end">Accord XL</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Year</td>
                                            <td className="text-end">2020</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Condition</td>
                                            <td className="text-end">Used</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Body Style</td>
                                            <td className="text-end">Sedan</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Engine</td>
                                            <td className="text-end">turbochage- 6 cylinder</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Transmission</td>
                                            <td className="text-end">Automatic</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Interior</td>
                                            <td className="text-end">Balck</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Miles:</td>
                                            <td className="text-end">85,000</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Doors:</td>
                                            <td className="text-end">4</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Passengers</td>
                                            <td className="text-end">5</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Mileage:</td>
                                            <td className="text-end">15</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Fuel Type:</td>
                                            <td className="text-end">Petrol</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Owner:</td>
                                            <td className="text-end">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Questions section */}
                            <div className="text-start ms-4">
                                <h2> Got any Questions?</h2>
                                <div className="">
                                    <p><FontAwesomeIcon icon={faHome} className="text-danger" /> Orlando, Fl 32819, US</p>
                                    <p><FontAwesomeIcon icon={faEnvelope} className="text-danger" /> info@gmail.com</p>
                                    <p><FontAwesomeIcon icon={faPhone} className="text-danger" /> + 01 234 567 88</p>
                                </div>
                                <div className="">
                                    <a href="#!" className="btn btn-outline btn-floating m-1 " role="button"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="#!" className="btn btn-outline btn-floating m-1 " role="button"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="#!" className="btn btn-outline btn-floating m-1 " role="button"><FontAwesomeIcon icon={faGoogle} /></a>
                                    <a href="#!" className="btn btn-outline btn-floating m-1 " role="button"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}


export default CarDetails;