import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import ProfileIcon from './ProfileIcon.png';
import { DemoItem, DateCalendar, TimeClock } from '@mui/x-date-pickers';
const UserProfile = () => {
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#c3f1c38e' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" xl="7">
            <MDBCard>
              {/*Profile Header*/}
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: ' ', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  {/*Profile Picture*/}
                  <MDBCardImage src={ProfileIcon}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  {/*Profile Editor*/}
                  <MDBBtn outline color="link" style={{ height: '36px', overflow: 'visible' }}>
                    Edit profile
                  </MDBBtn>
                </div>
              </div>
              <div className="text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="ms-4" style={{ marginTop: '100px' }}>
                  {/*User Details*/}
                  <MDBTypography tag="h4">Your Username</MDBTypography>
                  <MDBTypography tag="h6">Email</MDBTypography>
                  <MDBTypography tag="h6">Contact</MDBTypography>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-3">
                  {/*User Description*/}
                  <p className="lead fw-normal mb-2">Description/Bio</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Hii! I'm a Student</MDBCardText>
                  </div>
                </div>
                <div className="mb-3">
                  {/*Reminders*/}
                  <p className="lead fw-normal mb-2">My Notifications</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Show Reminders Here...</MDBCardText>
                  </div>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    {/*Calendar Widget*/}
                    ...
                    <DemoItem label="disabled">
                      <DateCalendar defaultValue={[dayjs('2022-04-17')]} disabled />
                    </DemoItem>
                  </MDBCol>
                  <MDBCol className="mb-2 w-100 rounded-3">
                    {/*Clock Widget*/}
                    ...
                    <DemoItem label="disabled">
                      <TimeClock />
                    </DemoItem>
                  </MDBCol>
                  <MDBCol className="mb-2 w-100 rounded-3">
                    {/*Weather Widget*/}
                    ...
                    <MDBCard
                      className="bg-dark text-white"
                      style={{ borderRadius: "40px" }}
                    >
                      <div className="bg-image" style={{ borderRadius: "35px" }}>
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                          className="card-img"
                          alt="weather"
                        />
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                        ></div>
                      </div>
                      <div className="card-img-overlay text-dark p-5">
                        <MDBTypography tag="h4" className="mb-0">Juneau, Alaska, US</MDBTypography>
                        <p className="display-2 my-3">1.28°C</p>
                        <p className="mb-2">
                          Feels Like: <strong>-1.08 °C</strong>
                        </p>
                        <MDBTypography tag="h5">Snowy</MDBTypography>
                      </div>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <MDBCardBody className="text-black p-4 mt-10">
                  <MDBRow className="g-2 p-2">
                    <MDBCol className="mb-2 w-100 rounded-3">
                      <div className="mb-3">
                        <p className="lead fw-normal mb-2">Go To :</p>
                        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                          <MDBBtn className="ms-4" outline color="link" style={{ height: '36px', overflow: 'visible' }}>
                            My ToDo
                          </MDBBtn>
                          <MDBBtn className="ms-4" outline color="link" style={{ height: '36px', overflow: 'visible' }}>
                            Music Player
                          </MDBBtn>
                          <MDBBtn className="ms-4" outline color="link" style={{ height: '36px', overflow: 'visible' }}>
                            Study Methods
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default UserProfile