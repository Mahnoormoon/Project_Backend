import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { LocalizationProvider, StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import app_config from '../../config';

const UserProfile = () => {

  const [theme, setTheme] = useState('light');

  const themeData = {
    light: {
      btn: 'dark',
      bg: '#fff',
      text: '#222'
    },
    dark: {
      btn: 'light',
      bg: '#222',
      text: '#fff'
    },
    primary: {
      btn: 'primary',
      bg: '#9FA6B2',
      text: '#fff'
    },
    secondary: {
      btn: 'secondary',
      bg: '#3B71CA',
      text: '#fff'
    },
    success: {
      btn: 'success',
      bg: '#14A44D',
      text: '#fff'
    },
    danger: {
      btn: 'danger',
      bg: '#DC4C64',
      text: '#fff'
    },
    warning: {
      btn: 'warning',
      bg: '#E4A11B',
      text: '#fff'
    },
    info: {
      btn: 'info',
      bg: '#54B4D3',
      text: '#fff'
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
    <div style={{ backgroundColor: themeData[theme].bg }} className="gradient-custom-2">
      <>
        <div className="container dropdown r-90 mt-4 mb-6 p-6">
          <button
            className="btn btn-primary btn-floating dropdown-toggle hidden-arrow bg-danger"
            type="button"
            id="dropdownMenuButton2"
            data-mdb-toggle="dropdown"
            aria-expanded="true"
          >
            <i className="fas fa-pen fa-sm"></i> 
          </button>
          <ul className="dropdown-menu">
            <li>
              <button color="light" onClick={e => setTheme('light')}>
                Light
              </button>
            </li>
            <li>
              <button color="dark" onClick={e => setTheme('dark')}>
                Dark
              </button>
            </li>
            <li>
              <button color="primary" onClick={e => setTheme('primary')}>
                Primary
              </button>
            </li>
            <li>
              <button color="secondary" onClick={e => setTheme('secondary')}>
                Secondary
              </button>
            </li>
            <li>
              <button color="success" onClick={e => setTheme('success')}>
                Success
              </button>
            </li>
            <li>
              <button color="danger" onClick={e => setTheme('danger')}>
                Danger
              </button>
            </li>
            <li>
              <button color="warning" onClick={e => setTheme('warning')}>
                Warning
              </button>
            </li>
            <li>
              <button color="info" onClick={e => setTheme('info')}>
                Info
              </button>
            </li>
          </ul>
        </div>
      </>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" xl="7">
            <MDBCard>
              {/*Profile Header*/}
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: `url("${url}/${currentUser.header}")`, height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  {/*Profile Picture*/}
                  <MDBCardImage src={url + '/' + currentUser.image}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '10' }} />
                  {/*Profile Editor*/}
                  <Link style={{zIndex: 0}} className={'btn btn-' + themeData[theme].btn} to={'/user/profileform'}>Edit Profile</Link>
                </div>
              </div>
                <div className="p-4" style={{ marginTop: '65px', backgroundColor: '#ecf3ec8e' }}>
                  <MDBTypography tag="h4" color={themeData[theme].text} >{currentUser.fname}</MDBTypography>
                  <MDBTypography tag="h6" color={themeData[theme].text} >{currentUser.email}</MDBTypography>
                  <MDBTypography tag="h6" color={themeData[theme].text} >{currentUser.contact}</MDBTypography>
                </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-3">
                  {/*User Description*/}
                  <p className="lead fw-normal mb-2">Description/Bio</p>
                  <div className="p-4" style={{ backgroundColor: '#ecf3ec8e' }}>
                    <MDBCardText className="font-italic mb-1">{currentUser.description}</MDBCardText>
                  </div>
                </div>
                <div className="mb-3">
                  {/*Reminders*/}
                  <p className="lead fw-normal mb-2">My Notifications</p>
                  <div className="p-4" style={{ backgroundColor: '#ecf3ec8e' }}>
                    <MDBCardText className="font-italic mb-1">Show Reminders Here...</MDBCardText>
                  </div>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MDBRow className="mb-2 rounded-4" style={{ backgroundColor: '#ecf3ec8e' }}>
                    <MDBCol className="mb-2 mt-3 w-10 rounded-3">
                      {/*Calendar Widget*/}
                      <StaticDatePicker sx={{ width: '44%', height: '88%' }}/>
                    </MDBCol>
                    <MDBCol className="mb-2 w-10 rounded-3">
                      {/*Clock Widget*/}
                      <StaticTimePicker sx={{ width: '36%', height: '8%' }}/>
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
                        <div className="p-4" style={{ backgroundColor: '#e1e7e18e' }}>
                          <Link className={'ms-3 btn btn-' + themeData[theme].btn}>My ToDo</Link>
                          &nbsp;&nbsp;&nbsp;<Link className={'ms-4 btn btn-' + themeData[theme].btn} to={'/main/musiclisting/' + currentUser._id}>Music Player</Link>
                          &nbsp;&nbsp;&nbsp;<Link className={'ms-4 btn btn-' + themeData[theme].btn} to={'/main/studylisting/' + currentUser._id}>Study Methods</Link>
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