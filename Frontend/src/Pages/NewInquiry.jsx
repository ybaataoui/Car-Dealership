import React from "react";
import { useState, useEffect } from "react";
import api from "../api";
import "../Styles/InquiryList.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/logo-dark.png";
import "../Styles/Model.css";

function NewInquiry() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await api.get("api/userinfo/");
      setUsername(response.data.username);
    } catch (error) {
      console.error(error);
    }
  };

  const createInquiry = (e) => {
    e.preventDefault();
    api
      .post("/api/dashboard/", { description, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Inquiry created!");
          navigate("/dashboard");
        } else alert("Failed to make inquiry.");
      })
      .catch((err) => {
        console.log(err.res);
        alert("Failed to make inquiry.");
      });
  };

  return (
    <div className="container">
      <form onSubmit={createInquiry}>
        <div className="form-group">
          <img src={logo} className="text-start" />
          <hr />

          <h2 className="text-start">Hello, My Name is: </h2>
          <div className="input-container">
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={username}
              placeholder="First Name"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={username}
              placeholder="Last Name"
            />
          </div>
          <label htmlFor="title" className="text">
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
          <button className="btn btn-danger">Close</button>
        </div>
      </form>
    </div>
  );
}

export default NewInquiry;
