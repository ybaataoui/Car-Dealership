import React from "react";
import { useState, useEffect } from "react";
import api from "../api";
import "../Styles/InquiryList.css";
import { Navigate, useNavigate } from "react-router-dom";



function NewInquiry() {
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();


    const createInquiry = (e) => {
        e.preventDefault();
        api
            .post("/api/dashboard/", { description, title })
            .then((res) => {
                if (res.status === 201) {
                    alert("Inquiry created!");
                    navigate("/dashboard");
                }
                else alert("Failed to make inquiry.");

            })
            .catch((err) => {
                console.log(err.res);
                alert("Failed to make inquiry.");
            });
    };

    return (
        <div className="container">
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

export default NewInquiry;
