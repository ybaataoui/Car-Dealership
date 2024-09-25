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

function Dashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");

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

  const deleteInquiry = (id) => {
    api
      .delete(`/api/inquiries/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Inquiry deleted!");
        else alert("Failed to delete inquiry.");
        getInquiries();
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="container">
      <TopBar />
      <NavBar />
      <div className="bg-light p-2">
        <div className="text  pt-4 pb-4 text-danger fw-bold">
          {username ? (
            <h1>Welcome, {username} !</h1>
          ) : (
            <h2 className="text-center">
              <LoadingIndicator />
            </h2>
          )}
        </div>
        <h4 className="text pb-4">
          {" "}
          Here are the list of the cars that you have inquired about:
        </h4>

        <table class="table table-striped table-hover">
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
              onDelete={deleteInquiry}
              key={inquiry.id}
            />
          ))}
        </table>
      </div>
      <CompanyInfromation />
      <Footer />
    </div>
  );
}

export default Dashboard;
