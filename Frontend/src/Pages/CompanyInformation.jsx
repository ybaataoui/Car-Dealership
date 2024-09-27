import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const CompanyInformation = () => {
  return (
    <div className="container pb-2">
      <div className="text-center text-lg-start text-white">
        {/* Grid container */}
        <div className="container  pb-0">
          <hr className="my-3" />
          {/* Section: Links */}
          <section>
            <div className="row">
              {/* Company name column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Car Dealership
                </h6>
                <p></p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Products column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-white">
                    New Inventory
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Used Inventory
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Certified Used Inventory
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Useful links column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Help
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Contact column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <FontAwesomeIcon icon={faHome} /> Orlando, Fl 32819, US
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> info@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> + 1 407 555 5555
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
