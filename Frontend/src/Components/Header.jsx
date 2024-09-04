import React from "react";
import NavBar from "./Navbar";
import Carousel from "./Carousel";
import { Container } from "react-bootstrap";
import Searchbar from "./Searchbar";

function Header() {
    return (
        <div className="container">
            <NavBar />
            <Carousel />
            <Searchbar />
        </div>

    )
};

export default Header;