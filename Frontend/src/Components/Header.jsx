import React from "react";
import NavBar from "./Navbar";
import Searchbar from "./Searchbar";
import HomeCarousel from "./HomeCarousel";

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