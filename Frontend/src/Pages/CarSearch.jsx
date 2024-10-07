import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import Footer from "./Footer";
import CompanyInformation from "./CompanyInformation"
import { useLocation } from "react-router-dom";
import api from "../api";
import CarTemplate from "../Components/CarTemplate";
import "../Styles/CarSearch.css"



function CarSearch() {
    const location = useLocation();
    const { condition, make, model, year, miles } = location.state || {};
    const [cars, setCars] = useState([]);
    console.log(condition, make, model, year, miles);

    const [filters, setFilters] = useState({
        condition: condition || "",
        make: make || "",
        model: model || "",
        year: year || "",
        miles: miles || "",
        minPrice: "",
        maxPrice: "",
        transmission: "",
    });

    useEffect(() => {
        fetchCars();
    }, [])

    // console.log(cars.map((car) => car.miles))
    const fetchCars = async () => {
        try {
            const response = await api.get("/api/cars/");
            setCars(response.data);
        } catch (error) {
            console.error("Error fetching car data:", error);
            alert("An error occurred while fetching the car listings.");
        }
    };

    const handleFilterChange = (e) => {
        fetchCars()
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    // Function to handle the price filter
    const filterCars = (car) => {
        let matchesCondition = true
        let matchesMake = true
        let matchesModel = true
        let matchesYear = true
        let matchesMiles = true
        let matchesPrice = true;
        let matchesTransmission = true;

        if (filters.condition) {
            matchesCondition = car.condition === filters.condition;
        }

        if (filters.make) {
            matchesMake = car.make === Number(make);
        }

        if (filters.model) {
            matchesModel = car.model === Number(filters.model);
        }
        if (filters.year) {
            matchesYear = car.year === Number(filters.year);
        }
        if (filters.miles) {
            matchesMiles = car.miles <= Number(filters.miles);
        }
        if (filters.minPrice && filters.maxPrice) {
            matchesPrice = car.price >= Number(filters.minPrice) && car.price <= Number(filters.maxPrice);
        }

        if (filters.transmission) {
            matchesTransmission = car.transmission.toLowerCase() === filters.transmission.toLowerCase();
        }
        //if no type is specifies, return all cars
        return matchesCondition && matchesMake && matchesModel && matchesYear && matchesMiles && matchesPrice && matchesTransmission;
    }

    return (
        <div className="container">
            <TopBar />
            <NavBar />
            <div className="mt-4">
                <div className="row">
                    {/* Search / Filter Sidebar on the left */}
                    <div className="col-12 col-md-3 bg-light filter-menu">
                        <div className=" ">
                            {/* Car Condition Filter */}
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Car Condition</label>
                                <select className="form-select" id="condition" name="condition" value={filters.condition} onChange={handleFilterChange}>
                                    <option value="">All Types</option>
                                    <option value="New">New</option>
                                    <option value="Used">Used</option>
                                    <option value="Certified">Certified</option>
                                </select>
                            </div>

                            {/* Make Filter */}
                            <div className="mb-3">
                                <label htmlFor="make" className="form-label">Make</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="make"
                                    name="make"
                                    placeholder="Enter Make ID"
                                    value={filters.make}
                                    onChange={handleFilterChange}
                                />
                            </div>

                            {/* Model Filter */}
                            <div className="mb-3">
                                <label htmlFor="model" className="form-label">Model</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="model"
                                    name="model"
                                    placeholder="Enter Model"
                                    value={filters.model}
                                    onChange={handleFilterChange}
                                />
                            </div>

                            {/* Year Filter */}
                            <div className="mb-3">
                                <label htmlFor="year" className="form-label">Year</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="year"
                                    name="year"
                                    placeholder="Enter Year"
                                    value={filters.year}
                                    onChange={handleFilterChange}
                                />
                            </div>

                            {/* Mileage Filter */}
                            <div className="mb-3">
                                <label htmlFor="miles" className="form-label">Max Miles</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="miles"
                                    name="miles"
                                    placeholder="Max Miles"
                                    value={filters.miles}
                                    onChange={handleFilterChange}
                                />
                            </div>

                            {/* Price Range Filter */}
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price Range</label>
                                <div className="row">
                                    <div className="col">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="minPrice"
                                            name="minPrice"
                                            placeholder="Min Price"
                                            value={filters.minPrice}
                                            onChange={handleFilterChange}
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="maxPrice"
                                            name="maxPrice"
                                            placeholder="Max Price"
                                            value={filters.maxPrice}
                                            onChange={handleFilterChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Transmission Filter */}
                            <div className="mb-3">
                                <label htmlFor="transmission" className="form-label">Transmission</label>
                                <select className="form-select" id="transmission" name="transmission" value={filters.transmission} onChange={handleFilterChange}>
                                    <option value="">All Transmissions</option>
                                    <option value="Automatic">Automatic</option>
                                    <option value="Manual">Manual</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Single Car Display on the right */}
                    <div className="col-12 col-md-9 ">

                        {cars.filter(filterCars).map((car) => (

                            <div key={car.id}>
                                <CarTemplate car={car} />
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <CompanyInformation />
            <Footer />
        </div>
    );

}

export default CarSearch;