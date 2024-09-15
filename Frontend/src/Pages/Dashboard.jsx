import React from "react";
import { useState, useEffect } from "react";
import api from "../api";
import Inquiry from "../Components/Inquiry";
import "../Styles/InquiryList.css";
import NavBar from "../Components/Navbar";
import TopBar from "../Components/TopBar";

function Dashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getInquiries();
  }, []);

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

  const createInquiry = (e) => {
    e.preventDefault();
    api
      .post("/api/inquiries/", { description, title })
      .then((res) => {
        if (res.status === 201) alert("Inquiry created!");
        else alert("Failed to make inquiry.");
        getInquiries();
      })
      .catch((err) => {
        console.log(err.res);
        alert("Failed to make inquiry.");
      });
  };

  return (
    <div className="container">
      <TopBar />
      <NavBar />
      <div>
        <h2 className="text-light">Inquiries</h2>
        {inquiries.map((inquiry) => (
          <Inquiry
            inquiry={inquiry}
            onDelete={deleteInquiry}
            key={inquiry.id}
          />
        ))}
      </div>
      <h2 className="text-light">Create an Inquiry</h2>
      <form onSubmit={createInquiry}>
        <label htmlFor="title" className="text-light">
          Title:
        </label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="title">Description:</label>
        <br />
        <textarea
          name="content"
          id="content"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Dashboard;
