import React, { useEffect } from "react";
import "../Styles/Inquiry.css";
import { Link, useNavigate } from "react-router-dom";

function Inquiry({ inquiry, carID, onDelete }) {
  const formattedDate = new Date(inquiry.created_at).toLocaleDateString(
    "en-US"
  );

  const navigate = useNavigate();

  // useEffect(() => {
  //   getCarDetails();
  // }, [])

  // //Fetch car details by ID
  // const getCarDetails = () => {
  //   api
  //     .get(`/api/cars/${carID}/`)
  //     .then((res) => setCar(res.data))
  //     .catch((error) => console.error(error));
  // };

  return (
    <tbody>
      <tr>
        <td></td>
        <td>{inquiry.car_title}</td>
        <td>{inquiry.city}</td>
        <td>

          <button
            onClick={() => {
              // Use carID in the function when needed
              navigate(`/details/${carID}`)
              // <Link to={`/details/${carID}`} className="btn btn-dark"></Link>
              console.log(`View details for carID: ${carID}`);
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
