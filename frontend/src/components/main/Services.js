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
import AboutImg5 from './AboutImg5.png';
import AboutImg6 from './AboutImg6.png';
import Custom from './Custom.png';
function Services() {
  return (
    <div className="mainlogin">
      <div className="containerrrr mb-8">
        <p className="p9 heading2 justify-content-center align-items-center">ToDoCafe' Services</p>
        <MDBRow>
        <MDBCol className="lg-4 mb-8">
            <MDBCard className="mt-2 p-2">
              <MDBCardBody className="text-center">
                <img className="img11 rounded-4" src={Custom} alt="Team Member" />
                <h4 className="mt-2">Customizable User Profile</h4>
                <p className="mt-3">custom color themes, edit profile header and profile picture, editable calendar, clock and weather widgets and much more...</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <MDBCol className="lg-4 mb-8">
            <MDBCard className="mt-2 p-2">
              <MDBCardBody className="text-center">
                <img className="img11 rounded-4" src={AboutImg1} alt="Team Member" />
                <h4 className="mt-2">To-Do List</h4>
                <p>customizable, compact, easy to user, categorize, edit, update, search, delete todos and schedule them for reminder notifications</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <MDBCol className="lg-4 mb-8">
            <MDBCard className="mt-2 p-2">
              <MDBCardBody className="text-center">
                <img className="img11 rounded-4" src={AboutImg5} alt="Team Member" />
                <h4 className="mt-2">Music Player</h4>
                <p className="mt-4">play study music while studying to help calm the stress down and create a soothing learning environment</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <MDBCol className="lg-4 mb-8">
            <MDBCard className="mt-2 p-2">
              <MDBCardBody className="text-center">
                <img className="img11 rounded-4" src={AboutImg6} alt="Team Member" />
                <h4 className="mt-2">Blog Section</h4>
                <p>get access to the various study methods and techniques like pomodoro from all over the internet at just one place...</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="bgcolor d-flex justify-content-center align-items-center">Experience ToDoCafe'</h1>
            <Link id="dropdownMenuButton2" className="btn-outline-white btn w-50 h-20 justify-content-center btn-rounded" to="/main/signup">Clck&nbsp;&nbsp;to&nbsp;&nbsp;sign&nbsp;&nbsp;up</Link>
          </div>
          </div>
        </MDBRow>
        </div>
        </div>
  );
}

export default Services;