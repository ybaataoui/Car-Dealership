import React from "react";
import { Carousel, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutCar1 from "../assets/AboutCar1.jpg";
import AboutCar2 from "../assets/AboutCar2.jpg";
import car3 from "../assets/car-3.jpg";

import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import Footer from "./Footer";
import "../Styles/AboutUs.css"; // Custom CSS for additional styling

const AboutUs = () => {
  const carouselItems = [
    { id: 1, src: AboutCar1, alt: "slider-car" },
    { id: 2, src: AboutCar2, alt: "slider-car" },
    { id: 3, src: car3, alt: "slider-car" },
  ];

  return (
    <div className="container p-0">
      <TopBar />
      <NavBar />

      {/* Sub Banner */}
      <div className="sub-banner text-center ">
        <div className="text-center">
          <h1>About Us</h1>
          <Breadcrumb className="custom-breadcrumb ">
            <Breadcrumb.Item
              className=""
              linkAs={Link}
              linkProps={{ to: "/" }}
              style={{ color: "white" }}
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>About Us</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      {/* About Car Section */}
      <div className="about-car content-area-5 py-5 bg-dark">
        <div className="container">
          <div className="row">
            {/* Carousel Section */}
            <div className="col-xl-5 col-lg-6">
              <div className="about-car-photo">
                <Carousel
                  id="carDetailsSlider"
                  className="car-details-sliders shadow-sm"
                  interval={3000}
                  fade
                >
                  {carouselItems.map((item) => (
                    <Carousel.Item key={item.id}>
                      <img
                        src={item.src}
                        className="img-fluid rounded AboutImg"
                        alt={item.alt}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Carousel Indicators */}
                <div className="pb-5 mb-5">
                  <ul className="carousel-indicators  list-inline">
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
            </div>

            {/* Text Section */}
            <div className="col-xl-7 col-lg-6 align-self-center pb-4">
              <div className="best-used-car">
                <h3 className="text-primary">
                  Welcome to{" "}
                  <span className="text-light">Youssef-Family-Car Website</span>
                </h3>
                <p className="lead text-light">
                  At Youssef-Family-Car, we pride ourselves on delivering
                  high-quality vehicles to customers who seek both reliability
                  and style. For over a decade, we've been helping drivers find
                  the perfect car, whether it's a dependable family vehicle or a
                  high-performance sports car. Our commitment to customer
                  satisfaction, transparency, and providing exceptional value
                  has earned us a reputation as a trusted name in the automotive
                  industry.
                </p>
                <p className="mb-0 text-light">
                  Over the years, we've adapted to changing technologies while
                  maintaining our commitment to quality and service, becoming a
                  trusted choice for car buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
