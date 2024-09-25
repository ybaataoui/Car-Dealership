import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import teamData from "../data/teamData"; // Import your team data from a suitable source
import car1 from "../assets/car-1.jpg";
import car2 from "../assets/car-2.jpg";
import car3 from "../assets/car-3.jpg";

const AboutUs = () => {
  //   const teams = teamData; // Assuming teamData is an array of team member objects

  const carouselItems = [
    { id: 1, src: car1, alt: "slider-car" },
    { id: 2, src: car2, alt: "slider-car" },
    { id: 3, src: car3, alt: "slider-car" },
  ];

  return (
    <div className="bg-light">
      {/* Sub Banner */}
      <div className="sub-banner overview-bgi">
        <div className="container breadcrumb-area">
          <div className="breadcrumb-areas">
            <h1>About Us</h1>
            <ul className="breadcrumbs">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Car Section */}
      <div className="about-car content-area-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="about-car-photo">
                <Carousel id="carDetailsSlider" className="car-details-sliders">
                  {carouselItems.map((item) => (
                    <Carousel.Item key={item.id}>
                      <img
                        src={item.src}
                        className="img-fluid"
                        alt={item.alt}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <ul className="carousel-indicators car-properties list-inline nav nav-justified">
                  {carouselItems.map((item, index) => (
                    <li className="list-inline-item" key={index}>
                      <a
                        id={`carousel-selector-${index}`}
                        data-slide-to={index}
                        data-target="#carDetailsSlider"
                      >
                        <img
                          src={item.src}
                          className="img-fluid"
                          alt="small-car"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 align-self-center">
              <div className="best-used-car">
                <h3>
                  Welcome to <span>CarDealer Website</span>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="mb-0">
                  It has electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus
                  PageMaker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      {/* <div className="our-team content-area">
        <div className="container">
          <div className="main-title">
            <h1>
              Executive <span>Team</span>
            </h1>
            <p>
              Team working behind maintaining the quality of our Car Dealership
              Website.
            </p>
          </div>
          <div className="slick-slider-area clearfix">
            <div
              className="row slick-carousel"
              data-slick='{"slidesToShow": 4, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
            >
              {teams.map((team, index) => (
                <div className="slick-slide-item" key={index}>
                  <div className="team-1">
                    <div className="photo">
                      <a href="#">
                        <img
                          src={team.photoUrl}
                          alt="team-1"
                          className="img-fluid"
                        />
                      </a>
                      <div className="social-list clearfix">
                        <a
                          href={team.facebookLink}
                          target="_blank"
                          className="facebook-bg"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                        <a
                          href={team.twitterLink}
                          target="_blank"
                          className="twitter-bg"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                        <a
                          href={team.googlePlusLink}
                          target="_blank"
                          className="google-bg"
                        >
                          <i className="fa fa-google" />
                        </a>
                      </div>
                    </div>
                    <div className="details">
                      <h4>
                        <a href="team-detail.html">
                          {team.firstName} {team.lastName}
                        </a>
                      </h4>
                      <h5>{team.designation}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
