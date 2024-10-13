import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import CompanyInformation from "./CompanyInformation";
import HomeCarousel from "../Components/HomeCarousel";
import NavBar from "../Components/Navbar";
import TopBar from "../Components/TopBar";
import api from "../api";
import Car from "../Components/Car";
import "../Styles/Header.css";
import bgImage from "../assets/blackgrad.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [makes, setMakes] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMiles, setSelectedMiles] = useState("");
  const navigate = useNavigate();

  // Background Style
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  // Fetch cars when the component mounts
  useEffect(() => {
    fetchCars();
  }, []);

  // Fetch car makes
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await api.get("/api/makes/");
        setMakes(response.data);
      } catch (error) {
        console.error("Error fetching makes:", error);
      }
    };
    fetchMakes();
  }, []);

  // Fetch car models based on selected make
  useEffect(() => {
    const fetchCarModels = async () => {
      if (selectedMake) {
        const response = await api.get(`/api/makes/${selectedMake}/models/`);
        setCarModels(response.data);
      } else {
        setCarModels([]);
      }
    };
    fetchCarModels();
  }, [selectedMake]);

  // Fetch all cars
  const fetchCars = async () => {
    try {
      const response = await api.get("/api/cars/");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
      alert("An error occurred while fetching the car listings.");
    }
  };

  // Function to sort cars by created date (newest first)
  const filterCarByDate = (cars, order = "desc") => {
    if (!cars || !cars.length) return [];
    return cars.sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return order === "asc" ? dateA - dateB : dateB - dateA;
    });
  };

  // Sorted cars by newest first
  const sortedCars = filterCarByDate(cars, "asc");

  // Unique years for the year dropdown
  const uniqueYears = [...new Set(cars.map((car) => car.year))].sort();

  // Features cars
  console.log(cars);
  const featuresCars = cars.filter((car) => car.is_featured == true);

  // Handle search click and navigate to car results page
  const handleSearch = () => {
    const condition = selectedCondition;
    const make = selectedMake;
    const model = selectedModel;
    const year = selectedYear;
    const miles = selectedMiles;
    navigate("/cars", { state: { condition, make, model, year, miles } });
  };

  return (
    <div className="container" style={backgroundStyle}>
      <TopBar />
      <NavBar />
      <HomeCarousel />

      {/* Search bar */}
      <div className="d-flex flex-wrap searchbar-wrap mt-4 justify-content-between">
        {/* Condition Dropdown */}
        <div className="flex-grow-1 me-2">
          <select
            id="typeSelect"
            className="form-select bg-dark text-light"
            onChange={(e) => setSelectedCondition(e.target.value)}
            value={selectedCondition}
            aria-label="Select a car condition"
          >
            <option value="">-- Select Condition --</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
            <option value="Certified">Certified</option>
          </select>
        </div>

        {/* Make Dropdown */}
        <div className="flex-grow-1 me-2">
          <select
            id="makeSelect"
            className="form-select bg-dark text-light"
            onChange={(e) => setSelectedMake(e.target.value)}
            value={selectedMake}
            aria-label="Select a car make"
          >
            <option value="">-- Select Make --</option>
            {makes.length > 0 ? (
              makes.map((make) => (
                <option key={make.id} value={make.id}>
                  {make.name}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No makes available
              </option>
            )}
          </select>
        </div>

        {/* Model Dropdown */}
        <div className="flex-grow-1 me-2">
          <select
            id="modelSelect"
            className="form-select bg-dark text-light"
            onChange={(e) => setSelectedModel(e.target.value)}
            value={selectedModel}
            aria-label="Select a car model"
            disabled={carModels.length === 0}
          >
            <option value="">-- Select Model --</option>
            {carModels.length > 0 ? (
              carModels.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No models available
              </option>
            )}
          </select>
        </div>

        {/* Year Dropdown */}
        <div className="flex-grow-1 me-2">
          <select
            id="yearSelect"
            className="form-select bg-dark text-light"
            onChange={(e) => setSelectedYear(e.target.value)}
            value={selectedYear}
            aria-label="Select a car year"
          >
            <option value="">-- Select Year --</option>
            {uniqueYears.length > 0 ? (
              uniqueYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No years available
              </option>
            )}
          </select>
        </div>

        {/* Miles Dropdown */}
        <div className="flex-grow-1 me-2">
          <select
            id="mileageSelect"
            className="form-select bg-dark text-light"
            onChange={(e) => setSelectedMiles(e.target.value)}
            value={selectedMiles}
            aria-label="Select a car mileage"
          >
            <option value="">-- Select Mileage --</option>
            <option value="30000">30,000 or less</option>
            <option value="40000">40,000 or less</option>
            <option value="50000">50,000 or less</option>
            <option value="60000">60,000 or less</option>
          </select>
        </div>

        {/* Show Results Button */}
        <div className="ms-2">
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleSearch}
          >
            Show Results
          </button>
        </div>
      </div>

      {/* Sorted Cars Section */}
      <div className="mt-4 ">
        <div>
          <h2 className="text-white text-center pb-4">Recently Add</h2>
        </div>
        <div className="row flex-wrap">
          {sortedCars.map((car) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={car.id}
            >
              <Car car={car} /> {/* Render each car */}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-white text-center pb-4">Featured Cars</h2>
        </div>
        <div className="row flex-wrap">
          {featuresCars.map((car) => (
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
