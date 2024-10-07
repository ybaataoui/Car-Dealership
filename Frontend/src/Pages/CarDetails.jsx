import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import api from "../api";
import CarBreadcrumb from "../Components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import TopBar from "../Components/TopBar";
import LoadingIndicator from "../Components/LoadingIndicator";
import InquiryModal from "../Components/InquiryModel";
import "../Styles/Model.css";

function CarDetails() {
  const { id } = useParams(); // Get car ID from the URL
  const [car, setCar] = useState(null); // state to hold car data
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [showModel, setShowModel] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getCarDetails();
    getUserInfo();
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const res = await api.get("api/check-user-logged-in/");
      setIsLoggedIn(res.data.is_logged_in);
    } catch (error) {
      console.error("User not logged in:", error);
    }
  };

  // Handle the Send a Message button click
  const handleSendMessage = () => {
    if (isLoggedIn) {
      setShowModel(true); // Show the message form if logged in
    } else {
      navigate("/login"); // Redirect to registration page if not logged in
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await api.get("api/userinfo/");
      setUsername(response.data.username);
    } catch (error) {
      console.error(error);
    }
  };

  // Event handlers for tab clicks
  const showDescription = () => setActiveTab("description");
  const showFeatures = () => setActiveTab("features");

  //Image Carousel index set
  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  //Fetch car details by ID
  const getCarDetails = () => {
    api
      .get(`/api/cars/${id}/`)
      .then((res) => setCar(res.data))
      .catch((error) => console.error(error));
  };

  if (!car) {
    return (
      <div>
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="bg-black pb-4">
        <div className="">
          <TopBar />
          <Navbar />
        </div>
        <div className="d-flex flex-column align-items-center pt-4">
          <h1 className="text-light">{car.car_title}</h1>
          <CarBreadcrumb />
        </div>
      </div>
      <div className=" container bg-light mb-4">
        <div className="row pt-4">
          <div className="col-8">
            <div className="d-flex justify-content-between w-100">
              <div className="text-start flex-fill ">
                <p className="fw-bold"> {car.car_title}</p>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {car.city}
                </p>
              </div>
              <div className="text-end flex-fill text-danger fw-bold">
                ${car.price.toLocaleString()}
              </div>
            </div>
            {/* Carousel pictures of the car */}
            <div className="carousel-container">
              <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                controls={false}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={car.car_photo}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={car.car_photo}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={car.car_photo}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="carousel-thumbnails">
                <img
                  className="carousel-thumbnail"
                  src={car.car_photo}
                  alt="Thumbnail 1"
                  onClick={() => handleSelect(0)}
                />
                <img
                  className="carousel-thumbnail"
                  src={car.car_photo}
                  alt="Thumbnail 2"
                  onClick={() => handleSelect(1)}
                />
                <img
                  className="carousel-thumbnail"
                  src={car.car_photo}
                  alt="Thumbnail 3"
                  onClick={() => handleSelect(2)}
                />
              </div>
            </div>
            {/* Description and features tabs */}
            <div>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === "description" ? "active" : ""
                      }`}
                    aria-current="page"
                    onClick={showDescription}
                  >
                    Description
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === "features" ? "active" : ""
                      }`}
                    onClick={showFeatures}
                  >
                    Features
                  </a>
                </li>
              </ul>
              {/* Tab Content */}
              <div className="mt-3">
                {activeTab === "description" && (
                  <div
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: car.description }}
                  />
                )}
                {activeTab === "features" && (
                  <ul>
                    {car.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          {/* Specs of the car */}
          <div className="col-4 text-center">
            <div className="border mb-4">
              {/* text button */}
              <button
                className="btn btn-danger mt-4 btn-lg"
                onClick={handleSendMessage}
                key={car.id}
              >
                Send a Message
              </button>

              {isLoggedIn && (
                <InquiryModal
                  show={showModel}
                  handleClose={() => setShowModel(false)}
                  user={username}
                  // carTitle={`${car.car_title} ${car.model}`}
                  car={car}
                />
              )}
              <h3 className="text-start mt-4 ms-3">Car Specs</h3>
              {/* Car details information */}
              <div className="container mt-4 specs">
                <table className="table specs">
                  <tbody>
                    <tr>
                      <td className="text-start">Color</td>
                      <td className="text-end">{car.color}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Model</td>
                      <td className="text-end">{car.model}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Year</td>
                      <td className="text-end">{car.year}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Condition</td>
                      <td className="text-end">{car.condition}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Body Style</td>
                      <td className="text-end">{car.body_style}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Engine</td>
                      <td className="text-end">{car.engine}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Transmission</td>
                      <td className="text-end">{car.transmission}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Interior</td>
                      <td className="text-end">{car.interior}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Miles:</td>
                      <td className="text-end">{car.miles}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Doors:</td>
                      <td className="text-end">{car.doors}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Passengers</td>
                      <td className="text-end">{car.passengers}</td>
                    </tr>
                    <tr>
                      <td className="text-start">MPG:</td>
                      <td className="text-end">{car.mileage}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Fuel Type:</td>
                      <td className="text-end">{car.fuel_type}</td>
                    </tr>
                    <tr>
                      <td className="text-start">Owner:</td>
                      <td className="text-end">{car.no_of_owners}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Questions section */}
              <div className="text-start ms-4">
                <h2> Got any Questions?</h2>
                <div className="">
                  <p>
                    <FontAwesomeIcon icon={faHome} className="text-danger" />{" "}
                    Orlando, Fl 32819, US
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-danger"
                    />{" "}
                    info@gmail.com
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="text-danger" /> +
                    1 407 555 5555
                  </p>
                </div>
                <div className="">
                  <a
                    href="#!"
                    className="btn btn-outline btn-floating m-1 "
                    role="button"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="#!"
                    className="btn btn-outline btn-floating m-1 "
                    role="button"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="#!"
                    className="btn btn-outline btn-floating m-1 "
                    role="button"
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a
                    href="#!"
                    className="btn btn-outline btn-floating m-1 "
                    role="button"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CarDetails;
