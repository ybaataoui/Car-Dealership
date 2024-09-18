import React from "react";
import { useState, useEffect } from "react";
import api from "../api";
import Inquiry from "../Components/Inquiry";
import "../Styles/InquiryList.css";
import NavBar from "../Components/Navbar";
import TopBar from "../Components/TopBar";
import Footer from "../Pages/Footer";
import LoadingIndicator from "../Components/LoadingIndicator"

function Dashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");

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

  const getInquiries = () => {
    api
      .get("/api/dashboard/")
      .then((res) => res.data)
      .then((data) => setInquiries(data))
      .catch((error) => alert(error));
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
        <div className="text text-center pt-4">
          {username ? <h2>Welcome, {username} !</h2> : <h2 className="text-center"><LoadingIndicator /></h2>}
        </div>
        <h2 className=""> Inquiries</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {inquiries.map((inquiry) => (
            <Inquiry inquiry={inquiry} onDelete={deleteInquiry} key={inquiry.id} />
          ))}

        </table>
      </div>
    </div>
  );
}

export default Dashboard;
