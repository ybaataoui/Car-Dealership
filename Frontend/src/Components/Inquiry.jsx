import React, { useEffect, useState } from "react";
import "../Styles/Inquiry.css";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Inquiry({ inquiry, onDelete }) {
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  const formattedDate = new Date(inquiry.created_at).toLocaleDateString(
    "en-US"
  );
  console.log(car);

  useEffect(() => {
    getCarDetails();
  }, []);

  //Fetch car details by ID
  const getCarDetails = () => {
    api
      .get(`/api/cars/${inquiry.car}/`)
      .then((res) => setCar(res.data.car_title))
      .catch((error) => console.error(error));
  };

  return (
    <tbody>
      <tr>
        <td>{inquiry.id}</td>
        <td>{car}</td>
        <td>{inquiry.city}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(`/details/${inquiry.car}`);
            }}
          >
            View Car
          </button>
        </td>
        <td>
          <button
            className="delete-button btn btn-dark"
            onClick={() => onDelete(inquiry.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Inquiry;
