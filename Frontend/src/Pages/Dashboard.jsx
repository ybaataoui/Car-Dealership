import React from "react";
import { useState, useEffect } from "react";
import api from "../api";
import Inquiry from "../Components/Inquiry";
import "../Styles/InquiryList.css";
import NavBar from "../Components/Navbar";
import TopBar from "../Components/TopBar";
import Footer from "../Pages/Footer";
import LoadingIndicator from "../Components/LoadingIndicator";
import CompanyInfromation from "./CompanyInformation";
import { useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function Dashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedInquiryId, setSelectedInquiryId] = useState(null);

  const location = useLocation();
  const carID = location.state?.carID; // Safely access carID

  console.log("Received carID: ", carID);

  useEffect(() => {
    getUserInfo();
    getInquiries();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await api.get("api/userinfo/");
      setUsername(response.data.username);
    } catch (error) {
      console.error(error);
    }
  };

  const getInquiries = async () => {
    try {
      const res = await api.get("/api/dashboard/");
      setInquiries(res.data);
      console.log(`View details for carID: ${carID}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowModal = (id) => {
    setSelectedInquiryId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInquiryId(null);
  };

  const handleDeleteInquiry = () => {
    if (!selectedInquiryId) return;

    api
      .delete(`/api/inquiries/delete/${selectedInquiryId}/`)
      .then((res) => {
        if (res.status === 204) {
          // alert("Inquiry deleted!");
          getInquiries(); // Refresh the inquiries list
        } else {
          alert("Failed to delete inquiry.");
        }
      })
      .catch((error) => alert(error))
      .finally(() => handleCloseModal());
  };

  return (
    <div className="container">
      <TopBar />
      <NavBar />
      <div className="bg-light p-2">
        <div className="text pt-4 pb-4 text-danger fw-bold">
          {username ? (
            <h1>Welcome, {username}!</h1>
          ) : (
            <h2 className="text-center">
              <LoadingIndicator />
            </h2>
          )}
        </div>
        <div className="text pb-4">
          {!inquiries || inquiries.length === 0 ? (
            <div className="alert alert-warning" role="alert">
              You have not requested any inquiries yet!
            </div>
          ) : (
            <div className="alert alert-info" role="alert">
              Here is the list of the cars that you have inquired about:
            </div>
          )}
        </div>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Car Name</th>
              <th scope="col">Location</th>
              <th scope="col">View Car</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {inquiries.map((inquiry) => (
            <Inquiry
              inquiry={inquiry}
              carID={carID}
              onDelete={handleShowModal}
              key={inquiry.id}
            />
          ))}
        </table>
      </div>

      <CompanyInfromation />
      <Footer />

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this inquiry? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteInquiry}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dashboard;
