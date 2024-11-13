import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import Footer from "./Footer";
import CompanyInformation from "./CompanyInformation";
import { useLocation, Link } from "react-router-dom";
import api from "../api";
import CarFeaturedTemplate from "../Components/CarFeaturedTemplate";
import "../Styles/CarSearch.css";

function UsedCars() {
    const location = useLocation();
    const { make, model, year, miles } = location.state || {};
    const [cars, setCars] = useState([]);
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [selectedMake, setSelectedMake] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const [filters, setFilters] = useState({
        condition: "Used", // Set default condition to "Used"
        make: make || "",
        model: model || "",
        year: year || "",
        miles: miles || "",
        minPrice: "",
        maxPrice: "",
        transmission: "",
    });

    const [sortOrder, setSortOrder] = useState("lowest");

    useEffect(() => {
        fetchCars();
        fetchMakes();
    }, [sortOrder]);

    useEffect(() => {
        if (make) setSelectedMake(make);
        if (model) setSelectedModel(model);
    }, [make, model]);

    useEffect(() => {
        const fetchModels = async () => {
            if (selectedMake) {
                const response = await api.get(`/api/makes/${selectedMake}/models/`);
                setModels(response.data);
            } else {
                setModels([]);
            }
        };
        fetchModels();
    }, [selectedMake]);

    const fetchMakes = async () => {
        try {
            const response = await api.get("/api/makes/");
            setMakes(response.data);
        } catch (error) {
            console.error("Error fetching makes:", error);
        }
    };

    const fetchCars = async () => {
        try {
            const response = await api.get("/api/cars/");
            const sortedCars = sortCars(response.data); // Sort all cars
            setCars(sortedCars);
        } catch (error) {
            console.error("Error fetching car data:", error);
            alert("An error occurred while fetching the car listings.");
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    }

    const filterCars = (car) => {
        const matchesCondition =
            !filters.condition || filters.condition === "All Types" || car.condition === filters.condition;
        const matchesMake = !filters.make || car.make === Number(filters.make);
        const matchesModel = !filters.model || car.model === Number(filters.model);
        const matchesYear = !filters.year || car.year === Number(filters.year);
        const matchesMiles = !filters.miles || car.miles <= Number(filters.miles);
        const matchesPrice =
            (!filters.minPrice || car.price >= Number(filters.minPrice)) &&
            (!filters.maxPrice || car.price <= Number(filters.maxPrice));
        const matchesTransmission =
            !filters.transmission ||
            car.transmission.toLowerCase() === filters.transmission.toLowerCase();

        return (
            matchesCondition &&
            matchesMake &&
            matchesModel &&
            matchesYear &&
            matchesMiles &&
            matchesPrice &&
            matchesTransmission
        );
    };

    const sortCars = (cars) => {
        return cars.sort((a, b) => {
            const priceA = Number(a.price);
            const priceB = Number(b.price);
            if (sortOrder === "lowest") {
                return priceA - priceB;
            } else if (sortOrder === "highest") {
                return priceB - priceA;
            } else if (sortOrder === "lowestM") {
                return a.miles - b.miles;
            } else if (sortOrder === "highestM") {
                return b.miles - a.miles;
            } else if (sortOrder === "oldestY") {
                return a.year - b.year;
            } else if (sortOrder === "newestY") {
                return b.year - a.year;
            }
            return 0;
        });
    };

    return (
        <div className="container ">
            <TopBar />
            <NavBar />
            <div className="container bg-white d-flex justify-content-center ">
                <div className="mt-4">
                    <div className="text-center">
                        <Breadcrumb className=" text-center">
                            <Breadcrumb.Item
                                linkAs={Link}
                                linkProps={{ to: "/" }}
                            >
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Cars</Breadcrumb.Item>
                        </Breadcrumb>
                        <h1>Featured Cars Search</h1>
                    </div>

                    <div className="row">
                        <div className="pb-4 mr-4">
                            <select
                                className="form-select ms-auto mr-4"
                                name="sort"
                                id="sort"
                                style={{ width: "auto" }}
                                value={sortOrder}
                                onChange={handleSortChange}>
                                <option value="lowest">Lowest Price</option>
                                <option value="highest">Highest Price</option>
                                <option value="lowestM">Lowest Mileage</option>
                                <option value="highestM">Highest Mileage</option>
                                <option value="newestY">Newest Year</option>
                                <option value="oldestY">Oldest Year</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-3 bg-white filter-menu">
                            <h2 className="pb-4 pt-2 text-dark">Car Search</h2>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="condition" className="form-label text-dark">
                                        Car Condition
                                    </label>
                                    <select
                                        className="form-select"
                                        id="condition"
                                        name="condition"
                                        value={filters.condition}
                                        onChange={(e) => {
                                            handleFilterChange(e);
                                            setFilters((prev) => ({
                                                ...prev,
                                                condition: e.target.value === "All Types" ? "" : e.target.value,
                                            }));
                                        }}
                                        style={{ color: "#000" }}
                                    >
                                        <option value="All Types">All Types</option>
                                        <option value="New">New</option>
                                        <option value="Used">Used</option>
                                        <option value="Certified">Certified</option>
                                    </select>
                                </div>

                                {/* Rest of filters remain the same */}
                                {/* Make Filter */}
                                <div className="mb-3">
                                    <label htmlFor="makeSelect" className="form-label">
                                        Make
                                    </label>
                                    <select
                                        className="form-select"
                                        id="makeSelect"
                                        name="make"
                                        value={filters.make}
                                        onChange={(e) => {
                                            handleFilterChange(e);
                                            setSelectedMake(e.target.value);
                                            setSelectedModel("");
                                        }}
                                        style={{
                                            color: "#000 !important",
                                            backgroundColor: "#fff",
                                        }}
                                    >
                                        <option value="">All Makes</option>
                                        {makes.map((make) => (
                                            <option key={make.id} value={make.id}>
                                                {make.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Model Filter */}
                                <div className="mb-3">
                                    <label htmlFor="modelSelect" className="form-label text-dark">
                                        Model
                                    </label>
                                    <select
                                        className="form-select"
                                        id="modelSelect"
                                        name="model"
                                        value={filters.model}
                                        onChange={handleFilterChange}
                                        style={{ color: "#000" }}
                                        disabled={!selectedMake}
                                    >
                                        <option value="">All Models</option>
                                        {models.map((model) => (
                                            <option
                                                key={model.id}
                                                value={model.id}
                                                style={{ color: "#000" }}
                                            >
                                                {model.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Year Filter */}
                                <div className="mb-3">
                                    <label htmlFor="yearSelect" className="form-label text-dark">
                                        Year
                                    </label>
                                    <select
                                        className="form-select"
                                        id="yearSelect"
                                        name="year"
                                        value={filters.year}
                                        onChange={(e) => {
                                            handleFilterChange(e);
                                            setSelectedYear(e.target.value);
                                        }}
                                        style={{ color: "#000" }}
                                    >
                                        <option value="">All Years</option>
                                        {cars.map((car) => (
                                            <option
                                                key={car.year}
                                                value={car.year}
                                                style={{ color: "#000" }}
                                            >
                                                {car.year}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Mileage Filter */}
                                <div className="mb-3">
                                    <label htmlFor="miles" className="form-label text-dark">
                                        Max Mileage
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="miles"
                                        name="miles"
                                        value={filters.miles}
                                        onChange={handleFilterChange}
                                        placeholder="e.g. 50000"
                                        style={{ color: "#000" }}
                                    />
                                </div>

                                {/* Price Range Filter */}
                                <div className="mb-3">
                                    <label className="form-label text-dark">Price Range</label>
                                    <div className="d-flex justify-content-between">
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="minPrice"
                                            value={filters.minPrice}
                                            onChange={handleFilterChange}
                                            placeholder="Min"
                                            style={{
                                                color: "#000",
                                                marginRight: "10px",
                                            }}
                                        />
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="maxPrice"
                                            value={filters.maxPrice}
                                            onChange={handleFilterChange}
                                            placeholder="Max"
                                            style={{ color: "#000" }}
                                        />
                                    </div>
                                </div>

                                {/* Transmission Filter */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="transmission"
                                        className="form-label text-dark"
                                    >
                                        Transmission
                                    </label>
                                    <select
                                        className="form-select"
                                        id="transmission"
                                        name="transmission"
                                        value={filters.transmission}
                                        onChange={handleFilterChange}
                                        style={{ color: "#000" }}
                                    >
                                        <option value="">All</option>
                                        <option value="Automatic">Automatic</option>
                                        <option value="Manual">Manual</option>
                                    </select>
                                </div>



                            </div>
                        </div>

                        <div className="col-8 col-md">
                            {cars.filter(filterCars).map((car) => (
                                <div key={car.id}>
                                    <CarFeaturedTemplate car={car} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <CompanyInformation />
            <Footer />
        </div>
    );
}

export default UsedCars;
