import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import Footer from "./Footer";
import CompanyInformation from "./CompanyInformation";
import { useLocation, Link } from "react-router-dom";
import api from "../api";
import CarTemplate from "../Components/CarTemplate";
import "../Styles/CarSearch.css";

function CarSearch() {
    const location = useLocation();
    const { condition, make, model, year, miles } = location.state || {};
    const [cars, setCars] = useState([]);
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [selectedMake, setSelectedMake] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
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
        fetchMakes();
    }, []);

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
            const response = await api.get('/api/makes/');
            setMakes(response.data);
        } catch (error) {
            console.error('Error fetching makes:', error);
        }
    };

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
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    // Function to filter cars based on selected filters
    const filterCars = (car) => {
        const matchesCondition = !filters.condition || car.condition === filters.condition;
        const matchesMake = !filters.make || car.make === Number(filters.make);
        const matchesModel = !filters.model || car.model === Number(filters.model);
        const matchesYear = !filters.year || car.year === Number(filters.year);
        const matchesMiles = !filters.miles || car.miles <= Number(filters.miles);
        const matchesPrice = (!filters.minPrice || car.price >= Number(filters.minPrice)) &&
            (!filters.maxPrice || car.price <= Number(filters.maxPrice));
        const matchesTransmission = !filters.transmission ||
            car.transmission.toLowerCase() === filters.transmission.toLowerCase();

        return matchesCondition && matchesMake && matchesModel && matchesYear &&
            matchesMiles && matchesPrice && matchesTransmission;
    };

    return (
        <div className="container">
            <TopBar />
            <NavBar />
            <div className="mt-4">
                <div className="text-center">
                    <Breadcrumb className="custom-breadcrumb text-center">
                        <Breadcrumb.Item
                            className=""
                            linkAs={Link}
                            linkProps={{ to: "/" }}
                            style={{ color: "white" }}
                        >
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Cars</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="row">
                    {/* Search / Filter Sidebar on the left */}
                    <div className="col-12 col-md-3 bg-light filter-menu">
                        <div>
                            {/* Car Condition Filter */}
                            <div className="mb-3">
                                <label htmlFor="condition" className="form-label">Car Condition</label>
                                <select
                                    className="form-select"
                                    id="condition"
                                    name="condition"
                                    value={filters.condition}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">All Types</option>
                                    <option value="New">New</option>
                                    <option value="Used">Used</option>
                                    <option value="Certified">Certified</option>
                                </select>
                            </div>

                            {/* Make Filter */}
                            <div className="mb-3">
                                <label htmlFor="makeSelect" className="form-label">Make</label>
                                <select
                                    id="makeSelect"
                                    className="form-select"
                                    onChange={(e) => {
                                        setSelectedMake(e.target.value);
                                        handleFilterChange({ target: { name: "make", value: e.target.value } });
                                    }}
                                    value={selectedMake}
                                    aria-label="Select a car make"
                                >
                                    <option value="">-- Select Make --</option>
                                    {makes.length > 0 ? (
                                        makes.map((make) => (
                                            <option key={make.id} value={make.id}>{make.name}</option>
                                        ))
                                    ) : (
                                        <option value="" disabled>No makes available</option>
                                    )}
                                </select>
                            </div>

                            {/* Model Filter */}
                            <div className="mb-3">
                                <label htmlFor="modelSelect" className="form-label">Model</label>
                                <select
                                    id="modelSelect"
                                    className="form-select"
                                    onChange={(e) => {
                                        setSelectedModel(e.target.value);
                                        handleFilterChange({ target: { name: "model", value: e.target.value } });
                                    }}
                                    value={selectedModel}
                                    aria-label="Select a car model"
                                    disabled={models.length === 0} // Disable if no models are available
                                >
                                    <option value="">-- Select Model --</option>
                                    {models.length > 0 ? (
                                        models.map((model) => (
                                            <option key={model.id} value={model.id}>{model.name}</option>
                                        ))
                                    ) : (
                                        <option value="" disabled>No models available</option>
                                    )}
                                </select>
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
                                <select
                                    className="form-select"
                                    id="transmission"
                                    name="transmission"
                                    value={filters.transmission}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">All Transmissions</option>
                                    <option value="Automatic">Automatic</option>
                                    <option value="Manual">Manual</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Single Car Display on the right */}
                    <div className="col-12 col-md-9">
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

