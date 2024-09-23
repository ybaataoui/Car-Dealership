import React from "react";
import "../Styles/Inquiry.css";
import { Link } from "react-router-dom";

function Inquiry({ inquiry, onDelete }) {
  const formattedDate = new Date(inquiry.created_at).toLocaleDateString(
    "en-US"
  );

  return (
    <tbody>
      <tr>
        <td></td>
        <td>{inquiry.car_title}</td>
        <td>{inquiry.city}</td>
        <td>
          <Link to={`/cars/${inquiry.id}`} className="btn btn-dark">
            View Car
          </Link>
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
