import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import CompanyInformation from "./CompanyInformation";
import HomeCarousel from "../Components/HomeCarousel";
import NavBar from "../Components/Navbar";
import TopBar from "../Components/TopBar";
import api from "../api";
import Car from "../Components/Car";
import "../Styles/Header.css";
import bgImage from "../assets/bg-img-6.jpg";

const Home = () => {
  const [cars, setCars] = useState([]);
  const backgroundStyle = {
    backgroundImage: { bgImage },
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensures it covers the viewport height
  };

  // Fetch the list of cars when the component mounts
  useEffect(() => {
    fetchCars();
  }, []);

  // Function to retrieve car data from the API
  const fetchCars = async () => {
    try {
      const response = await api.get("/api/cars/");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
      alert("An error occurred while fetching the car listings.");
    }
  };

  return (
    <div className="container " style={backgroundStyle}>
      <TopBar />
      <NavBar />
      <HomeCarousel />
      <div className="d-flex searchbar-wrap mt-4">
        {/* Make Dropdown */}
        <div className="btn-group m-2 btn-search">
          <button
            className="btn btn-dark  custom-btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Make
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Acura
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Honda
              </a>
            </li>
          </ul>
        </div>

        {/* Model Dropdown */}
        <div className="btn-group m-2 btn-search">
          <button
            className="btn btn-dark btn-lg custom-btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Model
          </button>
          <ul className="dropdown-menu">{/* Add your models here */}</ul>
        </div>

        {/* Distance Dropdown */}
        <div className="btn-group m-2 btn-search">
          <button
            className="btn btn-dark custom-btn btn-lg dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Distance
          </button>
          <ul className="dropdown-menu">{/* Add distance options here */}</ul>
        </div>

        {/* Zip Code Input */}
        <div className="m-2 zip-input">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Zip Code"
          />
        </div>

        {/* Show Results Button */}
        <div className="m-2">
          <button className="btn btn-danger btn-lg btn-search" type="button">
            Show Results
          </button>
        </div>
      </div>

      <div className=" mt-4">
        <div className="row flex-wrap">
          {cars.map((car) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={car.id}
            >
              <Car car={car} /> {/* Render each car */}
            </div>
          ))}
        </div>
      </div>
      <CompanyInformation />
      <Footer />
    </div>
  );
};

export default Home;
