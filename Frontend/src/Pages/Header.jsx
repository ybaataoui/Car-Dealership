import React from "react";
import NavBar from "../Components/Navbar";
import Searchbar from "../Components/Searchbar";
import HomeCarousel from "../Components/HomeCarousel";
import TopBar from "../Components/TopBar";

function Header() {
  return (
    <div className="container">
      <TopBar />
      <NavBar />
      <HomeCarousel />
      <Searchbar />
    </div>
  );
}

export default Header;
