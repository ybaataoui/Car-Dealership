import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import api from "../api";
import Car from "../Components/Car";


function CarSearch() {
    const location = useLocation();
    const { condition, make, model, year, miles } = location.state || {};
    const [cars, setCars] = useState([]);
    console.log(condition, make, model, year, miles);

    useEffect(() => {
        fetchCars();
    }, [])

    console.log(cars.map((car) => car.miles))
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
    const filterCars = (car) => {
        let matchesCondition = true
        let matchesMake = true
        let matchesModel = true
        let matchesYear = true
        let matchesMiles = true

        if (condition) {
            matchesCondition = car.condition === condition;
        }

        if (make) {
            matchesMake = car.make === Number(make);
        }

        if (model) {
            matchesModel = car.model === Number(model);
        }
        if (year) {
            matchesYear = car.year === Number(year);
        }
        if (miles) {
            matchesMiles = car.miles <= Number(miles);
        }
        //if no type is specifies, return all cars
        return matchesCondition && matchesMake && matchesModel && matchesYear && matchesMiles;
    }

    return (
        <div className="container">
            <TopBar />
            <NavBar />
            <div className="mt-4">
                <div className="row flex-wrap">
                    {cars.filter(filterCars).map((car) => (
                        <div
                            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                            key={car.id}
                        >
                            <Car car={car} /> {/* Render each car */}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CarSearch;