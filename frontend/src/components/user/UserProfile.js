import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import { LocalizationProvider, StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import app_config from '../../config';
import "./ProfileForm.css";
const UserProfile = () => {

  const [theme, setTheme] = useState('light');

  const themeData = {
    light: {
      btn: 'dark',
      bg: '#fff',
      text: 'dark',
      textColor:'black'
    },
    dark: {
      btn: 'light',
      bg: '#222',
      text: 'light',
      textColor:'white'
    },
    primary: {
      btn: 'primary',
      bg: 'primary',
      text: 'primary',
      textColor:'white'
    },
    secondary: {
      btn: 'secondary',
      bg: '#3B71CA',
      text: 'secondary',
      textColor:'white'
    },
    success: {
      btn: 'success',
      bg: '#14A44D',
      text: 'success',
      textColor:'white'
    },
    danger: {
      btn: 'danger',
      bg: '#DC4C64',
      text: 'danger',
      textColor:'white'
    },
    warning: {
      btn: 'warning',
      bg: '#E4A11B',
      text: 'warning',
      textColor:'white'
    },
    info: {
      btn: 'info',
      bg: '#54B4D3',
      text: 'info',
      textColor:'white'
    },
    pink1: {
      btn: '#F08080',
      bg: '#F08080',
      text: '#F08080',
      textColor:'white'
    },
    pink2: {
      btn: '#F4978E',
      bg: '#F4978E',
      text: '#F4978E',
      textColor:'white'
    },
    pink3: {
      btn: '#F8AD9D',
      bg: '#F8AD9D',
      text: '#F8AD9D',
      textColor:'white'
    },
    pink4: {
      btn: '#FBC4AB',
      bg: '#FBC4AB',
      text: '#FBC4AB',
      textColor:'white'
    },
    pink5: {
      btn: '#FFDAB9',
      bg: '#FFDAB9',
      text: '#FFDAB9',
      textColor:'white'
    },
    yellow1: {
      btn: '#fdb833',
      bg: '#fdb833',
      text: '#fdb833',
      textColor:'white'
    },
    yellow2: {
      btn: '#fdc43f',
      bg: '#fdc43f',
      text: '#fdc43f',
      textColor:'white'
    },
    yellow3: {
      btn: '#ffda3d',
      bg: '#ffda3d',
      text: '#ffda3d',
      textColor:'white'
    },
    yellow4: {
      btn: '#ffe94e',
      bg: '#ffe94e',
      text: '#ffe94e',
      textColor:'white'
    },
    yellow5: {
      btn: '#fff75e',
      bg: '#fff75e',
      text: '#fff75e',
      textColor:'white'
    },
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
        <div className="container-md dropdown r-90 mt-4 mb-6 p-6">
          <button
            className="btn dropdown-toggle hidden-arrow rounded-8"
            type="button"
            id="dropdownMenuButton3"
            data-mdb-toggle="dropdown"
          >
            <i className="fas fa-pen fa-sm icon">&nbsp;&nbsp;&nbsp;C u s t o m i z e</i> 
          </button>
          <ul className="p-3 dropdown-menu">
          <p className="lead fw-normal heading2 p-2 mb-2">Choose desired theme/color : </p>
            <MDBRow className="p-3">
            <MDBCard className="p-2">
              <MDBCol>
              <p className="lead fw-normal heading2 p-2 mb-2">Basic options : </p>
              <button style={{ backgroundColor: '#ecf3ec8e' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-black"onClick={e => setTheme('light')}>Light</button>
              <button style={{ backgroundColor: '#222' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white"  onClick={e => setTheme('dark')}>Dark</button>
              <button style={{ backgroundColor: '#9FA6B2' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('primary')}>Primary</button>
              <button style={{ backgroundColor: '#3B71CA' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white"  onClick={e => setTheme('secondary')}>Secondary</button>
              <button style={{ backgroundColor: '#14A44D' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white"  onClick={e => setTheme('success')}>Success</button>
              <button style={{ backgroundColor: '#DC4C64' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white"  onClick={e => setTheme('danger')}>Danger</button>
              <button style={{ backgroundColor: '#E4A11B' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('warning')}>Warning</button>
              <button style={{ backgroundColor: '#54B4D3' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('info')}>Info</button>
              </MDBCol>
              </MDBCard>
              <MDBCard className="p-2 mt-3">
                <MDBCol>
                <p className="lead fw-normal heading2 p-2 mb-2">Custom options : </p>
                <MDBCard className="p-2 mt-3">
                <MDBCol>
                <p className="lead fw-normal heading2 p-2 mb-2">Pink Pallette : </p>
                <button style={{ backgroundColor: '#f08080' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink1')}>#1</button>
                <button style={{ backgroundColor: '#F4978E' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink2')}>#2</button>
                <button style={{ backgroundColor: '#F8AD9D' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink3')}>#3</button>
                <button style={{ backgroundColor: '#FBC4AB' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink4')}>#4</button>
                <button style={{ backgroundColor: '#FFDAB9' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink5')}>#5</button>
                </MDBCol>
                <MDBCol>
                <p className="lead fw-normal heading2 p-2 mb-2">Yellow Pallette : </p>
                <button style={{ backgroundColor: '#fdb833' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow1')}>#1</button>
                <button style={{ backgroundColor: '#fdc43f' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow2')}>#2</button>
                <button style={{ backgroundColor: '#ffda3d' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow3')}>#3</button>
                <button style={{ backgroundColor: '#ffe94e' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow4')}>#4</button>
                <button style={{ backgroundColor: '#fff75e' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow5')}>#5</button>
                </MDBCol>
              </MDBCard>
                </MDBCol>
              </MDBCard>
              </MDBRow>
          </ul>
        </div>
      </>
      <MDBContainer className="mb-6 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" xl="10">
            <MDBCard>
              {/*Profile Header*/}
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: `url("${url}/${currentUser.header}")`, height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  {/*Profile Picture*/}
                  <MDBCardImage src={url + '/' + currentUser.image}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '10' }} />
                  {/*Profile Editor*/}
                  <Link style={{zIndex: '10'}} className={'btn btn-' + themeData[theme].btn} to={'/user/profileform'}>Edit Profile</Link>
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
                  <p className="lead fw-normal mb-2" >Description/Bio</p>
                  <div className="p-4" style={{ backgroundColor: themeData[theme].bg }}>
                    <MDBCardText className="font-italic mb-1" style={{ color: themeData[theme].textColor }}>{currentUser.description}</MDBCardText>
                  </div>
                </div>
                <div className="mb-3">
                  {/*Reminders*/}
                  <p className="lead fw-normal mb-2">My Notifications</p>
                  <div className="p-4" style={{ backgroundColor: themeData[theme].bg }}>
                    <MDBCardText className="font-italic mb-1" style={{ color: themeData[theme].textColor }} >Show Reminders Here...</MDBCardText>
                  </div>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <p className="lead fw-normal mb-2">My Widgets</p>
                  <MDBRow className="p-3 rounded-4">
                    <MDBCol className="mb-2 rounded-5" style={{ backgroundColor: themeData[theme].bg }}>
                      {/*Calendar Widget*/}
                      <StaticDatePicker className="mb-2 mt-3 rounded-5" sx={{ width: '44%', height: '100%' }}/>
                    </MDBCol>
                    <MDBCol className="mb-2 rounded-5" style={{ backgroundColor: themeData[theme].bg }}>
                      {/*Clock Widget*/}
                      <StaticTimePicker className="mb-2 mt-3 rounded-5" sx={{ width: '36%', height: '100%' }}/>
                    </MDBCol>
                    <MDBCol className="mb-2 w-10 rounded-5">
                      {/*Weather Widget*/}
                    </MDBCol>
                  </MDBRow>
                </LocalizationProvider>
                <MDBCardBody className="text-black p-4">
                  <MDBRow className="g-2 p-2">
                    <MDBCol className="mb-2 w-100 rounded-3">
                      <div className="mb-3">
                        <p className="lead fw-normal mb-2">Go To :</p>
                        <div className="p-3 justify-content-center align-items-center" style={{ backgroundColor: '#e1e7e18e' }}>
                          <Link className={'p-2 btn btn-' + themeData[theme].btn} to={'/user/todo/' + currentUser._id}>My ToDo</Link>
                          <Link className={'p-2 btn btn-' + themeData[theme].btn} to={'/main/musiclisting/' + currentUser._id}>Music Player</Link>
                          <Link className={'p-2 btn btn-' + themeData[theme].btn} to={'/main/studylisting/' + currentUser._id}>Study Methods</Link>
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