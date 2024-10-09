import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; // Assuming you're using react-bootstrap
// import "../Styles/Model.css";
import logo from "../assets/logo-dark.png";
import api from "../api";

function MessageModel({ show, handleClose, car }) {
  const [formData, setFormData] = useState({
    car_id: car.id,
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Message Data: ", formData);
    try {
      const res = await api.post("/api/messages/", formData);
      // Log the response
      console.log("Response: ", res.data);
      //alert("Form submitted successfully!");
      handleClose();
      navigate("/cars");
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={logo} alt="Car Dealer Logo" style={{ width: "150px" }} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="col-lg">
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
                    value={car.car_title}
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
            </div>
          </div>

          <hr />
          <Button type="submit" className="btn btn-block btn-dark">
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default MessageModel;
