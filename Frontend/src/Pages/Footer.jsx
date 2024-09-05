import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="container my-5">

            {/* Footer */}
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: 'black' }}>
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    <hr className="my-3" />
                    {/* Section: Links */}
                    <section>
                        <div className="row">
                            {/* Company name column */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Car Dealership</h6>
                                <p>

                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            {/* Products column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p><a href="#!" className="text-white">New Inventory</a></p>
                                <p><a href="#!" className="text-white">Used Inventory</a></p>
                                <p><a href="#!" className="text-white">Certified Used Inventory</a></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            {/* Useful links column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                                <p><a href="#!" className="text-white">Your Account</a></p>
                                <p><a href="#!" className="text-white">Shipping Rates</a></p>
                                <p><a href="#!" className="text-white">Help</a></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            {/* Contact column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><FontAwesomeIcon icon={faHome} /> Orlando, Fl 32819, US</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> info@gmail.com</p>
                                <p><FontAwesomeIcon icon={faPhone} /> + 01 234 567 88</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    {/* Copyright section */}
                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2024 Copyright:
                                    <a className="text-white" href="">Car-Dealership.com</a>
                                </div>
                            </div>

                            <div className="col-md-5 col-lg-4 text-center text-md-end">
                                <a href="#!" className="btn btn-outline-light btn-floating m-1 text-white" role="button"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#!" className="btn btn-outline-light btn-floating m-1 text-white" role="button"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#!" className="btn btn-outline-light btn-floating m-1 text-white" role="button"><FontAwesomeIcon icon={faGoogle} /></a>
                                <a href="#!" className="btn btn-outline-light btn-floating m-1 text-white" role="button"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer >
        </div >
    );
};

export default Footer;
