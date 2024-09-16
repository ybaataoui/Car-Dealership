import React from "react";
import LoginForm from "../Components/LoginForm";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="">
        <TopBar />
        <NavBar />
        <div className="navBar py-3 mb-4 ">
          <div className="text-center">
            <div className="breadcrumb-area ">
              <h1 className="text-light">Login To Your Account</h1>
              <ul className="breadcrumb justify-content-center">
                <li className="breadcrumb-item text-light">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active text-light">Login</li>
              </ul>
            </div>
          </div>
        </div>
        <LoginForm route="/api/token/" method="login" />;
        <Footer />
      </div>
    </>
  );
}

export default Login;
