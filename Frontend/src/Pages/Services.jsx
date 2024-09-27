import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLifeRing,
  faTachometerAlt,
  faWrench,
  faSnowflake,
  faOilCan,
  faTools,
  faCarAlt,
  faLock,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import Footer from "./Footer";
import ServiceCenter from "../Components/ServiceCenter";
import "../Styles/Services.css"; // Custom CSS for additional styling

const ServiceItem = ({ number, icon, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="service-info">
        <div className="number">{number}</div>
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="detail">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      number: 1,
      icon: faLifeRing,
      title: "24/7 Customer Support",
      description:
        "We offer round-the-clock customer support to ensure you get assistance whenever you need it, whether for inquiries or emergency services.",
    },
    {
      number: 2,
      icon: faTachometerAlt,
      title: "Fast Vehicle Servicing",
      description:
        "Our highly trained mechanics provide quick and efficient servicing, ensuring your vehicle is road-ready in minimal time without compromising quality.",
    },
    {
      number: 3,
      icon: faWrench,
      title: "Comprehensive Repairs",
      description:
        "From minor fixes to major repairs, we handle it all. Our experts ensure your car stays in peak condition, addressing mechanical and electrical issues.",
    },
    {
      number: 4,
      icon: faSnowflake,
      title: "Air Conditioning Service",
      description:
        "Stay cool with our top-notch air conditioning services. We check, repair, and refill your car’s A/C to maintain comfort in all weather conditions.",
    },
    {
      number: 5,
      icon: faOilCan,
      title: "Regular Oil Change",
      description:
        "Keep your engine healthy and extend its lifespan with our regular oil change service. We use high-quality oils to ensure optimal performance.",
    },
    {
      number: 6,
      icon: faTools,
      title: "Engine Diagnostics & Repair",
      description:
        "Our advanced diagnostic tools allow us to quickly identify engine issues and provide solutions, ensuring your vehicle’s heart runs smoothly.",
    },
    {
      number: 7,
      icon: faCarAlt,
      title: "Certified Dealership",
      description:
        "As a certified dealership, we offer a wide range of new and pre-owned vehicles with warranty and financing options to meet your needs.",
    },
    {
      number: 8,
      icon: faLock,
      title: "Vehicle Security Enhancements",
      description:
        "Protect your vehicle with our advanced security installations, including alarms, GPS tracking, and anti-theft systems for peace of mind.",
    },
    {
      number: 9,
      icon: faHandshake,
      title: "Trusted Partnerships",
      description:
        "We work with trusted automotive partners to offer exclusive deals and services. Our relationships ensure you always get the best value.",
    },
  ];

  return (
    <div className="services content-area">
      <div className="container">
        <TopBar />
        <NavBar />

        {/* Main title */}
        <div className="main-title text-center pt-4">
          <h1>
            Our <span>Services</span>
          </h1>
          <p>
            We offer a comprehensive range of automotive services designed to
            meet all your vehicle needs.
          </p>
        </div>
        <div className="row">
          {services.map((service) => (
            <ServiceItem
              key={service.number}
              number={service.number}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
