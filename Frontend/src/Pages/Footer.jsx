import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer text-light py-4">
      <div className="sub-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p className="copy mb-0">
                © {currentYear} Copyright: - www.youssef-family-car.com
              </p>
            </div>
            <div className="col-lg-4 text-end">
              <div className="social-list-2 text-lg-right  mt-3 mt-lg-0">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      href="#!"
                      className="btn btn-outline-light btn-floating m-1 text-white"
                      role="button"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#!"
                      className="btn btn-outline-light btn-floating m-1 text-white"
                      role="button"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#!"
                      className="btn btn-outline-light btn-floating m-1 text-white"
                      role="button"
                    >
                      <FontAwesomeIcon icon={faGoogle} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#!"
                      className="btn btn-outline-light btn-floating m-1 text-white"
                      role="button"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
