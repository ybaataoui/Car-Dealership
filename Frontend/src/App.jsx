import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import CarDetails from "./Pages/CarDetails";
import Dashboard from "./Pages/Dashboard";
import NewInquiry from "./Pages/NewInquiry";
import AboutUs from "./Pages/About";
import ContactUs from "./Pages/Contact";
import Services from "./Pages/Services";
import CarSearch from "./Pages/CarSearch";
import FeaturedCarsSearch from "./Pages/FeaturedCarsSearch";

function Logout() {
  localStorage.clear();
  return <Navigate to="/" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<CarSearch />} />
        <Route path="/newInquiry" element={<NewInquiry />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/featuredCarsSearch" element={<FeaturedCarsSearch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
