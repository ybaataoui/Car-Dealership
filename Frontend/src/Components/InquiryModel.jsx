import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; // Assuming you're using react-bootstrap
// import "../Styles/Model.css";
import logo from "../assets/logo-dark.png";
import api from "../api";

function InquiryModal({ show, handleClose, user, car }) {
  // State to manage form input values
  const [firstName, setFirstName] = useState(user || "");
  const [lastName, setLastName] = useState(user || "");
  const [customerNeed, setCustomerNeed] = useState("I'm interested in this");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const navigate = useNavigate();

  // console.log(car);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const inquiryData = {
      car_id: car.id,
      first_name: firstName,
      last_name: lastName,
      customer_need: customerNeed,
      city: city,
      state: state,
      email: email,
      phone: phone,
      message: message,
    };

    console.log("Inquiry Data: ", inquiryData);
    try {
      const res = await api.post("/api/inquiries/", inquiryData);
      setSubmissionStatus("success");
      setTimeout(() => {
        handleClose();
      }, 2000);

      navigate("/dashboard");
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      // alert("Failed to submit the form. Please try again.");
      setSubmissionStatus("error");
    }
  };


  return (
    <Modal show={show} onHide={handleClose} size="lg" >
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={logo} alt="Car Dealer Logo" style={{ width: "150px" }} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submissionStatus === "success" && (
          <div className="alert alert-success" role="alert">
            Your inquiry has been submitted successfully!
          </div>
        )}
        {submissionStatus === "error" && (
          <div className="alert alert-danger" role="alert">
            There was an error submitting the form. Please try again.
          </div>
        )}
        <form onSubmit={handleSubmit} className="form-container">
          {/* First and Last Name */}
          <div className="form-group">
            <label htmlFor="firstName">Hello, My Name is</label>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Customer Need */}
          <div className="form-group">
            <label htmlFor="customerNeed">I'm interested in:</label>
            <select
              className="form-control"
              value={customerNeed}
              onChange={(e) => setCustomerNeed(e.target.value)}
              required
            >
              <option value="I'm interested in this">
                I'm interested in this
              </option>
              <option value="I'd like to know your best price for this">
                I'd like to know your best price for this
              </option>
              <option value="I'd like to Schedule a Test Drive">
                I'd like to Schedule a Test Drive
              </option>
              <option value="Check home delivery options">
                Check home delivery options
              </option>
              <option value="I'd like a history report for this">
                I'd like a history report for this
              </option>
              <option value="Discuss Financing">Discuss Financing</option>
              <option value="Others [Mention Below]">
                Others [Mention Below]
              </option>
            </select>
          </div>

          {/* Car Title */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={car.car_title}
              required
              readOnly
            />
          </div>

          {/* City and State */}
          <div className="form-group">
            <label>I live in</label>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Email and Phone */}
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>You can reach me by email at</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label>or by cell at</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="[0-9]{10}" // Allows exactly 10 digits
                  maxLength="10" // Limits input to 10 characters
                  title="Enter a 10-digit phone number"
                />
              </div>
            </div>
          </div>

          {/* Additional Message */}
          <div className="form-group">
            <label>Additional Messages</label>
            <textarea
              className="form-control"
              placeholder="Enter your message here (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
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

export default InquiryModal;
