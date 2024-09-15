import React from "react";
import "../Styles/Inquiry.css"

function Inquiry({inquiry, onDelete}) {
    const formattedDate = new Date(inquiry.created_at).toLocaleDateString("en-US")
    return (
        <div className="inquiry-container">
            <p className="inquiry-title">{inquiry.title}</p>
            <p className="inquiry-description">{inquiry.description}</p>
            <p className="inquiry-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(inquiry.id)}>Delete</button>
        </div>
    )
}

export default Inquiry