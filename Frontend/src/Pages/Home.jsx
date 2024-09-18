import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CompanyInformation from "./CompanyInformation";
import api from "../api";
import Car from "../Components/Car";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    api
      .get("/api/cars/")
      .then((res) => res.data)
      .then((data) => setCars(data))
      .catch((error) => alert(error));
  };


  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row">
          {cars.map(car => (
            <div className="col-md-3 mb-4" key={car.id}>
              <Car car={car} />  {/* Render CarItem for each car */}
            </div>
          ))}
        </div>
      </div>
      <CompanyInformation />
      <Footer />
    </div>
  );
}

export default Home;
