import React from "react";
import Footer from "./Footer";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import { Link } from "react-router-dom";
import RegisterForm from "../Components/RegisterForm";

function Register() {
  return (
    <>
      <div className="container">
        <TopBar />
        <NavBar />
        <div className="navBar py-3 mb-4">
          <div className="breadcrumb-area ">
            <div className="breadcrumb-areas">
              <h1 className="text-center text-light">Register</h1>
              <ul className="breadcrumb justify-content-center">
                <li className="breadcrumb-item text-light">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active text-light">Register</li>
              </ul>
            </div>
          </div>
          <RegisterForm route="/api/user/register/" method="register" />;
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Register;
