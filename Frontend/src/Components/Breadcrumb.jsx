import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";


const CarBreadcrumb = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/carsList" }}>
                Cars
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Car Details
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default CarBreadcrumb;