import React from 'react';
import { Link } from "react-router-dom";
import AdminIcon from './AdminIcon.jpg';
import {MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBProgress, MDBProgressBar} from 'mdb-react-ui-kit';
const AdminProfile = () => {
  return (
    <section style={{ backgroundColor: '#c3f1c38e' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={AdminIcon}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-2 mt-2">Student</p>
                <p className="text-muted mb-1">BCA-VI</p>
                <p className="text-muted mb-1">National P.G College, Lucknow</p>
                <div className="d-flex justify-content-center mb-2 mt-3">

                  <Link id="dropdownMenuButton2" className="btn-outline-white btn justify-content-center btn-rounded" to="/main/contact">Contact</Link>
                </div>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
              <button
                        className="btn dropdown-toggle hidden-arrow rounded-8 mt-2"
                        type="button"
                        id="dropdownMenuButton2"
                        data-mdb-toggle="dropdown"
                      >
                        <i className="fas fa-pen fa-sm icon">&nbsp;&nbsp;&nbsp;M a n a g e</i>
                      </button>
                      <ul className="p-3 dropdown-menu">
                        <li>
                          <Link class="dropdown-item" to="/admin/manageuser">Manage User</Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/admin/managecontact">Manage Contact</Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/admin/managetodo">Manage Todo</Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/admin/managereminder">Manage Reminder</Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/admin/managemusic">Manage Music</Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/admin/managestudymethods">Manage Study Methods</Link>
                        </li>
                      </ul>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Mahnoor</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">mahnoormoon530@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(+91) 8957316901</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Chandralok, Aliganj, Lucknow (226024)</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="12">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">ToDoCafe'</span> Manage Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>User Data</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Contact Form Data</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={35} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>ToDo Data</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Reminder Data</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Music Data</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={79} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Study Methods Data</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default AdminProfile