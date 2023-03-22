import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import ProfileIcon from './ProfileIcon.png';
import { LocalizationProvider, StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import app_config from '../../config';


const UserProfile = () => {

  const [theme, setTheme] = useState('light');

  const themeData = {
    light: {
      btn: 'dark'
    },
    dark: {
      btn: 'light'
    },
    primary: {
      btn: 'primary'
    }
  }

  const { id } = useParams();
  const url = app_config.apiurl;
  const [userProfileData, setUserprofileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const fetchUserProfile = async () => {
    setLoading(true);
    const res = await fetch(url + '/user/getbyid/' + currentUser._id);
    const data = (await res.json()).result;
    setUserprofileData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUserProfile();
  },)

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#c3f1c38e' }}>
      <button color="light"  onClick={e => setTheme('light')}>
        Light
      </button>
      <button color="dark" onClick={e => setTheme('dark')}>
        Dark
      </button>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" xl="7">
            <MDBCard>
              {/*Profile Header*/}
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: `url("${url}/${currentUser.image}")`, height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  {/*Profile Picture*/}
                  <MDBCardImage src={url + '/' + currentUser.image}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  {/*Profile Editor*/}
                  <MDBBtn color={themeData[theme].btn} style={{ height: '36px', overflow: 'visible' }}>
                    Edit profile
                  </MDBBtn>
                </div>
              </div>
              <div className="text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="ms-4" style={{ marginTop: '100px' }}>
                  <MDBTypography tag="h4">{currentUser.fname}</MDBTypography>
                  <MDBTypography tag="h6">{currentUser.email}</MDBTypography>
                  <MDBTypography tag="h6">{currentUser.contact}</MDBTypography>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-3">
                  {/*User Description*/}
                  <p className="lead fw-normal mb-2">Description/Bio</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">{currentUser.description}</MDBCardText>
                  </div>
                </div>
                <div className="mb-3">
                  {/*Reminders*/}
                  <p className="lead fw-normal mb-2">My Notifications</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Show Reminders Here...</MDBCardText>
                  </div>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MDBRow>
                    <MDBCol className="mb-2 w-10 rounded-3">
                      {/*Calendar Widget*/}
                      <StaticDatePicker />
                    </MDBCol>
                    <MDBCol className="mb-2 w-10 rounded-3">
                      {/*Clock Widget*/}
                      <StaticTimePicker />
                    </MDBCol>
                    <MDBCol className="mb-2 w-10 rounded-3">
                      {/*Weather Widget*/}
                    </MDBCol>
                  </MDBRow>
                </LocalizationProvider>
                <MDBCardBody className="text-black p-4">
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