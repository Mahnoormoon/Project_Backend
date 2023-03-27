import React from "react";
import "./Footer.css";
import logo from './ToDoCafe_Logo.png';

const Footer = () => {
  return (
    <footer className=" footer text-center text-lg-start text-white">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Connect with us on social media:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                {/*<i className="fas fa-pen me-3" />*/}
                <img
              src={logo}
              height={40}
              alt="ToDoCafe' Logo"
              loading="lazy"
                />
                &nbsp;&nbsp;ToDoCafe'
              </h6>
              <p>
                Makes your daily life<br></br>
                more productive.
              </p>
            </div>
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  To-Do List
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Music Player
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Study Methods
                </a>
              </p>
            </div>
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/main/aboutus" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="/main/contact" className="text-reset">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help Desk
                </a>
              </p>
            </div>
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> Lucknow 226024,<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uttar Pradesh, India
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                &nbsp;todocafe1306@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> + 91 8957316901
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href=" ">
          &nbsp;&nbsp;ToDoCafe.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;