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

const Home = () => {
  const [cars, setCars] = useState([]);
  const [makes, setMakes] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [type, setType] = useState('');
  const [year, setYear] = useState([]);
  const [mileage, setMileage] = useState([])
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMileage, setSelectedMileage] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');



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

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await api.get('/api/makes/');
        setMakes(response.data);
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    };
    fetchMakes();
  }, []);

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

  const fetchCars = async () => {
    try {
      const response = await api.get("/api/cars/");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
      alert("An error occurred while fetching the car listings.");
    }
  };

  // Function to handle the price filter
  const filterCarByPrice = (car) => {
    if (minPrice && car.price < minPrice) return false;
    if (maxPrice && car.price > maxPrice) return false;
    return true;
  }


  return (
    <div className="container" style={backgroundStyle}>
      <TopBar />
      <NavBar />
      <HomeCarousel />

      <div className="d-flex flex-wrap searchbar-wrap mt-4 justify-content-between">
        {/* Type Dropdown */}
        <div className="flex-grow-1 me-2">
          <select
            id="typeSelect"
            className="form-select bg-dark text-light"
            onChange={(e) => setSelectedType(e.target.value)}
            value={selectedType}
            aria-label="Select a car type"
          >
            <option value="" disabled>-- Select Type --</option>
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
            <option value="" disabled>-- Select Make --</option>
            {makes.length > 0 ? (
              makes.map((make) => (
                <option key={make.id} value={make.id}>{make.name}</option>
              ))
            ) : (
              <option value="" disabled>No makes available</option>
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
            disabled={carModels.length === 0} // Disable the model dropdown if no models are available
          >
            <option value="" disabled>-- Select Model --</option>
            {carModels.length > 0 ? (
              carModels.map((model) => (
                <option key={model.id} value={model.id}>{model.name}</option>
              ))
            ) : (
              <option value="" disabled>No models available</option>
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
            <option value="" disabled>-- Select Year --</option>
            {makes.length > 0 ? (
              makes.map((make) => (
                <option key={make.id} value={make.id}>{make.name}</option>
              ))
            ) : (
              <option value="" disabled>No years available</option>
            )}
          </select>
        </div>

        {/* Mileage Dropdown */}
        <div className="flex-grow-1 me-2">
          <select
            id="mileageSelect"
            className="form-select bg-dark text-light"
            onChange={(e) => setSelectedMileage(e.target.value)}
            value={selectedMileage}
            aria-label="Select a car mileage"
          >
            <option value="" disabled>-- Select Mileage --</option>
            {makes.length > 0 ? (
              makes.map((make) => (
                <option key={make.id} value={make.id}>{make.name}</option>
              ))
            ) : (
              <option value="" disabled>No mileage available</option>
            )}
          </select>
        </div>

        {/* Show Results Button */}
        <div className="ms-2">
          <button className="btn btn-danger" type="button" onClick="">
            Show Results
          </button>
        </div>
      </div>


      <div className="mt-4">
        <div className="row flex-wrap">
          {cars.filter(filterCarByPrice).map((car) => (
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
