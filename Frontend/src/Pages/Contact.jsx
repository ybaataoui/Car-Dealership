import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Alert } from "react-bootstrap";
import "../Styles/Contact.css";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import api from "../api";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [message, setMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/messages/", formData);
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 2000);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="container">
      <TopBar />
      <NavBar />
      <div className="contact-us-container pt-0">
        <div className="content-area-5 bg-dark">
          {/* Sub Banner */}
          <div className="sub-banner text-center ">
            <div className="text-center">
              <h1>Contact Us</h1>
              <Breadcrumb className="custom-breadcrumb ">
                <Breadcrumb.Item
                  className=""
                  linkAs={Link}
                  linkProps={{ to: "/" }}
                  style={{ color: "white" }}
                >
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          {/* Sub Banner end */}
          <div className="container ">
            {/* Success message */}
            {message && (
              <Alert variant="success" className="text-center">
                <strong>Thank you!</strong> We have received your message and
                will contact you as soon as possible.
              </Alert>
            )}
            {/* Success/Error message */}
            <form onSubmit={handleSubmit} className="contact-form mt-4 mb-4">
              <div className="row">
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-md-6 text-left">
                      <div className="form-group name">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group email">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group subject">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group number">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group message">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Write message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send-btn text-center">
                        <button
                          type="submit"
                          className="btn btn-md button-theme"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="contact-info-2">
                    <div className="ci-box">
                      <div className="icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <div className="detail">
                        <h5>Phone:</h5>
                        <p>
                          <a href="#">+1 555 555 5555</a>
                        </p>
                      </div>
                    </div>

                    <div className="ci-box">
                      <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="detail">
                        <h5>Email:</h5>
                        <p>
                          <a href="#">info@youssefinfo.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="ci-box">
                      <div className="icon">
                        <FontAwesomeIcon icon={faGlobe} />
                      </div>
                      <div className="detail">
                        <h5>Web:</h5>
                        <p>
                          <a href="#">www.youssef-family-car.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="ci-box mb-0">
                      <div className="icon">
                        <FontAwesomeIcon icon={faFax} />
                      </div>
                      <div className="detail">
                        <h5>Fax:</h5>
                        <p>
                          <a href="#">+1 125-010-0110</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Contact form section end */}
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
