import React from 'react';
import { Link } from "react-router-dom";
import './About.css';
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import AboutImg1 from './AboutImg1.png';
import AboutImg2 from './AboutImg2.png';
import AboutImg3 from './AboutImg3.png';
import AboutImg4 from './AboutImg4.png';
import AboutImg5 from './AboutImg5.png';
import AboutImg6 from './AboutImg6.png';
import Question from './Question.png';
function AboutUs() {
  return (
    <div className="mainlogin">
      <div className="containerrrr mb-8">
        <p className="p9 heading2 justify-content-center align-items-center">Welcome to ToDoCafe'</p>
        <div className="row1">
          <div className="col-md-6">
            <h1 className="h9 bgcolor">About Us</h1>
            <p className="p4">We are a company that specializes in creating unique and innovative products for our customers. Our goal is to provide the highest quality products that meet the needs and preferences of our customers.</p>
            <p className="p4">We are dedicated to providing excellent customer service and support to ensure that our customers are satisfied with their purchases. We value our customers and strive to exceed their expectations in every way possible.</p>
          </div>
          <div className="col-md-6">
            <img className="img8 rounded-4" src={AboutImg2} alt="about us" />
          </div>
          <div className="col-md-6">
            <img className="img9 rounded-4" src={AboutImg3} alt="about us" />
          </div>
          <div className="col-md-6">
            <h1 className="h10 bgcolor">Our Vision</h1>
            <p className="p4">Our Vision is to create innovative solutions that help our customers achieve their goals.</p>
          </div>
          <div className="col-md-6">
            <h1 className="h10 bgcolor">Our Mission</h1>
            <p className="p4">Our mission is to create innovative solutions that help our customers achieve their goals.</p>
          </div>
          <div className="col-md-6">
            <img className="img10 rounded-4" src={AboutImg4} alt="about us" />
          </div>
          <div>
        <p className="p10 heading2 justify-content-center align-items-center">Our Products</p>
        <MDBRow>
          <MDBCol className="lg-4 mb-8">
            <MDBCard className="mt-2 p-2">
              <MDBCardBody className="text-center">
                <img className="img11 rounded-4" src={AboutImg1} />
                <h4 className="mt-2">To-Do List</h4>
                <p>Customizable and Compact</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <MDBCol className="lg-4 mb-8">
            <MDBCard className="mt-2 p-2">
              <MDBCardBody className="text-center">
                <img className="img11 rounded-4" src={AboutImg5} />
                <h4 className="mt-2">Music Player</h4>
                <p>Play Study Music</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <MDBCol className="lg-4 mb-8">
            <MDBCard className="mt-2 p-2">
              <MDBCardBody className="text-center">
                <img className="img11 rounded-4" src={AboutImg6} />
                <h4 className="mt-2">Study Methods</h4>
                <p>Study Methods and Techniques</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </div>
        <div className="col-md-6">
            <img className="img12 rounded-4" src={Question} alt="about us" />
          </div>
          <div className="col-md-6">
            <h1 className="h11 bgcolor">Curious?</h1>
            <p className="p4">Contact or Write to us if you want to know more...</p>
            <Link id="dropdownMenuButton2" className="btn-outline-white btn w-50 h-20 justify-content-center btn-rounded" to="/main/contact">Click&nbsp;&nbsp;Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;