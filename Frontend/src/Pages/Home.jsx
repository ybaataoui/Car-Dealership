import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CompanyInformation from "./CompanyInformation";
import api from "../api";
import Car from "../Components/Car";

const Home = () => {
  const [cars, setCars] = useState([]);

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
    <div className="container">
      <Header />
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
