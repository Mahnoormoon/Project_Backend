import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import ProfileIcon from './ProfileIcon.png';
//import dayjs from 'dayjs';
import { LocalizationProvider, StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import app_config from '../../config';


const UserProfile = () => {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '842c8cc564a613435cd7c464948dca54',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  const { id } = useParams();
  const url = app_config.apiurl;
  const [userProfileData, setUserprofileData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserProfile = async () => {
    setLoading(true);
    const res = await fetch(url + '/userprofile/getbyid/' + id);
    const data = (await res.json()).result;
    setUserprofileData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUserProfile();
  }, )

  const showUsername = () => {
    if (!loading && userProfileData) {
      return <div className='container'>
        {userProfileData.pusername}
      </div>
    } else {
      <h1>Loading ... </h1>
    }
  }
  const showEmail = () => {
    if (!loading && userProfileData) {
      return <div className='container'>
        {userProfileData.pemail}
      </div>
    } else {
      <h1>Loading ... </h1>
    }
  }
  const showContact = () => {
    if (!loading && userProfileData) {
      return <div className='container'>
        {userProfileData.pcontact}
      </div>
    } else {
      <h1>Loading ... </h1>
    }
  }
  const showUserProfileDescription = () => {
    if (!loading && userProfileData) {
      return <div className='container'>
        {userProfileData.pdescription}
      </div>
    } else {
      <h1>Loading ... </h1>
    }
  }

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
                  <MDBTypography tag="h4">{showUsername()}</MDBTypography>
                  <MDBTypography tag="h6">{showEmail()}</MDBTypography>
                  <MDBTypography tag="h6">{showContact()}</MDBTypography>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-3">
                  {/*User Description*/}
                  <p className="lead fw-normal mb-2">Description/Bio</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">{showUserProfileDescription()}</MDBCardText>
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
                      <ReactWeather
                        isLoading={isLoading}
                        errorMessage={errorMessage}
                        data={data}
                        lang="en"
                        locationLabel="Lucknow"
                        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                        showForecast
                      />
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