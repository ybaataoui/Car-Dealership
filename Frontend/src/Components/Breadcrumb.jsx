import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Styles/Header.CSS';  // Add your CSS file here

const CarBreadcrumb = () => {
    return (
        <Breadcrumb className="custom-breadcrumb">
            <Breadcrumb.Item className=""
                linkAs={Link}
                linkProps={{ to: "/" }}
                style={{ color: 'white' }}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
                linkAs={Link}
                linkProps={{ to: "/carsList" }}>
                Cars
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Car Details
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default CarBreadcrumb;
