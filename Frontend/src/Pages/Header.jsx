import React from "react";
import NavBar from "../Components/Navbar";
import Searchbar from "../Components/Searchbar";
import HomeCarousel from "../Components/HomeCarousel";

function Header() {
    return (
        <div className="container">
            <NavBar />
            <HomeCarousel />
            <Searchbar />
        </div>

    )
};

export default Header;