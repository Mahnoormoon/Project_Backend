import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import ProfileIcon from "./ProfileImg.jpg";
import {
  LocalizationProvider,
  StaticDatePicker,
  StaticTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import app_config from "../../config";
import "./ProfileForm.css";
import WeatherWidget from "./WeatherWidget";
import "./theme.css";
import dayjs from "dayjs";
const UserProfile = () => {
  const [theme, setTheme] = useState("light");

  const themeData = {
    light: {
      btn: "light",
      bg: "#fff",
      text: "dark",
      textColor: "black",
    },
    dark: {
      btn: "dark",
      bg: "#222",
      text: "dark",
      textColor: "white",
    },
    primary: {
      btn: "primary",
      bg: "primary",
      text: "primary",
      textColor: "white",
    },
    secondary: {
      btn: "secondary",
      bg: "#3B71CA",
      text: "secondary",
      textColor: "white",
    },
    success: {
      btn: "success",
      bg: "#14A44D",
      text: "success",
      textColor: "white",
    },
    danger: {
      btn: "danger",
      bg: "#DC4C64",
      text: "danger",
      textColor: "white",
    },
    warning: {
      btn: "warning",
      bg: "#E4A11B",
      text: "warning",
      textColor: "white",
    },
    info: {
      btn: "info",
      bg: "#54B4D3",
      text: "info",
      textColor: "white",
    },
    pink1: {
      btn: "btn-pink-1",
      bg: "#F08080",
      text: "#F08080",
      textColor: "white",
    },
    pink2: {
      btn: "btn-pink-2",
      bg: "#F4978E",
      text: "#F4978E",
      textColor: "white",
    },
    pink3: {
      btn: "btn-pink-3",
      bg: "#F8AD9D",
      text: "#F8AD9D",
      textColor: "white",
    },
    pink4: {
      btn: "btn-pink-4",
      bg: "#FBC4AB",
      text: "#FBC4AB",
      textColor: "white",
    },
    pink5: {
      btn: "btn-pink-5",
      bg: "#FFDAB9",
      text: "#FFDAB9",
      textColor: "white",
    },
    yellow1: {
      btn: "btn-yellow-1",
      bg: "#fdb833",
      text: "#fdb833",
      textColor: "white",
    },
    yellow2: {
      btn: "btn-yellow-2",
      bg: "#fdc43f",
      text: "#fdc43f",
      textColor: "white",
    },
    yellow3: {
      btn: "btn-yellow-3",
      bg: "#ffda3d",
      text: "#ffda3d",
      textColor: "white",
    },
    yellow4: {
      btn: "btn-yellow-4",
      bg: "#ffe94e",
      text: "#ffe94e",
      textColor: "white",
    },
    yellow5: {
      btn: "btn-yellow-5",
      bg: "#fff75e",
      text: "#fff75e",
      textColor: "white",
    },
    blue1: {
      btn: "btn-blue-1",
      bg: "#03045e",
      text: "#03045e",
      textColor: "white",
    },
    blue2: {
      btn: "btn-blue-2",
      bg: "#023e8a",
      text: "#023e8a",
      textColor: "white",
    },
    blue3: {
      btn: "btn-blue-3",
      bg: "#0077b6",
      text: "#0077b6",
      textColor: "white",
    },
    blue4: {
      btn: "btn-blue-4",
      bg: "#00b4d8",
      text: "#00b4d8",
      textColor: "white",
    },
    blue5: {
      btn: "btn-blue-5",
      bg: "#90e0ef",
      text: "#90e0ef",
      textColor: "white",
    },
    maroon1: {
      btn: "btn-maroon-1",
      bg: "#641220",
      text: "#641220",
      textColor: "white",
    },
    maroon2: {
      btn: "btn-maroon-2",
      bg: "#85182A",
      text: "#85182A",
      textColor: "white",
    },
    maroon3: {
      btn: "btn-maroon-3",
      bg: "#A71E34",
      text: "#A71E34",
      textColor: "white",
    },
    maroon4: {
      btn: "btn-maroon-4",
      bg: "#BD1F36",
      text: "#BD1F36",
      textColor: "white",
    },
    maroon5: {
      btn: "btn-maroon-5",
      bg: "#DA1E37",
      text: "#DA1E37",
      textColor: "white",
    },
    green1: {
      btn: "btn-green-1",
      bg: "#1b4332",
      text: "#1b4332",
      textColor: "white",
    },
    green2: {
      btn: "btn-green-2",
      bg: "#2d6a4f",
      text: "#2d6a4f",
      textColor: "white",
    },
    green3: {
      btn: "btn-green-3",
      bg: "#40916c",
      text: "#40916c",
      textColor: "white",
    },
    green4: {
      btn: "btn-green-4",
      bg: "#52b788",
      text: "#52b788",
      textColor: "white",
    },
    green5: {
      btn: "btn-green-5",
      bg: "#74c69d",
      text: "#74c69d",
      textColor: "white",
    },
    brown1: {
      btn: "btn-brown-1",
      bg: "#7f5539",
      text: "#7f5539",
      textColor: "white",
    },
    brown2: {
      btn: "btn-brown-2",
      bg: "#9c6644",
      text: "#9c6644",
      textColor: "white",
    },
    brown3: {
      btn: "btn-brown-3",
      bg: "#b08968",
      text: "#b08968",
      textColor: "white",
    },
    brown4: {
      btn: "btn-brown-4",
      bg: "#ddb892",
      text: "#ddb892",
      textColor: "white",
    },
    brown5: {
      btn: "btn-brown-5",
      bg: "#e6ccb2",
      text: "#e6ccb2",
      textColor: "white",
    },
    purple1: {
      btn: "btn-purple-1",
      bg: "#7b2cbf",
      text: "#7b2cbf",
      textColor: "white",
    },
    purple2: {
      btn: "btn-purple-2",
      bg: "#735D78",
      text: "#735D78",
      textColor: "white",
    },
    purple3: {
      btn: "btn-purple-3",
      bg: "#B392AC",
      text: "#B392AC",
      textColor: "white",
    },
    purple4: {
      btn: "btn-purple-4",
      bg: "#D1B3C4",
      text: "#D1B3C4",
      textColor: "white",
    },
    purple5: {
      btn: "btn-purple-5",
      bg: "#E8C2CA",
      text: "#E8C2CA",
      textColor: "white",
    },
  };

  const { id } = useParams();
  const url = app_config.apiurl;
  const [userProfileData, setUserprofileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const fetchUserProfile = async () => {
    setLoading(true);
    const res = await fetch(url + "/user/getbyid/" + currentUser._id);
    const data = (await res.json()).result;
    setUserprofileData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div
      style={{ backgroundColor: themeData[theme].bg }}
      className="gradient-custom-2"
    >
      <>
        <div className="container-md dropdown r-90 mt-4 mb-6 p-6">
          <button
            className="btn dropdown-toggle hidden-arrow rounded-8"
            type="button"
            id="dropdownMenuButton3"
            data-mdb-toggle="dropdown"
          >
            <i className="fas fa-pen fa-sm icon">
              &nbsp;&nbsp;&nbsp;C u s t o m i z e
            </i>
          </button>
          <ul className="p-3 dropdown-menu">
            <p className="lead fw-normal heading2 p-2 mb-2">
              Choose desired theme/color :{" "}
            </p>
            <MDBRow className="p-3">
              <MDBCard className="p-2">
                <MDBCol>
                  <p className="lead fw-normal heading2 p-2 mb-2">
                    Basic options :{" "}
                  </p>
                  <button
                    style={{ backgroundColor: "#ecf3ec8e" }}
                    className="p-2 mb-2 md btn-rounded btn-outline-white text-black"
                    onClick={(e) => setTheme("light")}
                  >
                    Light
                  </button>
                  <button
                    style={{ backgroundColor: "#222" }}
                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                    onClick={(e) => setTheme("dark")}
                  >
                    Dark
                  </button>
                  <button
                    style={{ backgroundColor: "#9FA6B2" }}
                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                    onClick={(e) => setTheme("primary")}
                  >
                    Primary
                  </button>
                  <button
                    style={{ backgroundColor: "#3B71CA" }}
                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                    onClick={(e) => setTheme("secondary")}
                  >
                    Secondary
                  </button>
                  <button
                    style={{ backgroundColor: "#14A44D" }}
                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                    onClick={(e) => setTheme("success")}
                  >
                    Success
                  </button>
                  <button
                    style={{ backgroundColor: "#DC4C64" }}
                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                    onClick={(e) => setTheme("danger")}
                  >
                    Danger
                  </button>
                  <button
                    style={{ backgroundColor: "#E4A11B" }}
                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                    onClick={(e) => setTheme("warning")}
                  >
                    Warning
                  </button>
                  <button
                    style={{ backgroundColor: "#54B4D3" }}
                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                    onClick={(e) => setTheme("info")}
                  >
                    Info
                  </button>
                </MDBCol>
              </MDBCard>
              <MDBCard className="p-2 mt-3">
                <MDBCol>
                  <p className="lead fw-normal heading2 p-2 mb-2">
                    Custom options :{" "}
                  </p>
                  <MDBCard className="p-2 mt-3">
                    <MDBCol>
                      <p className="lead fw-normal heading2 p-2 mb-2">
                        Pink Palette :{" "}
                      </p>
                      <button
                        style={{ backgroundColor: "#f08080" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("pink1")}
                      >
                        #1
                      </button>
                      <button
                        style={{ backgroundColor: "#F4978E" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("pink2")}
                      >
                        #2
                      </button>
                      <button
                        style={{ backgroundColor: "#F8AD9D" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("pink3")}
                      >
                        #3
                      </button>
                      <button
                        style={{ backgroundColor: "#FBC4AB" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("pink4")}
                      >
                        #4
                      </button>
                      <button
                        style={{ backgroundColor: "#FFDAB9" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("pink5")}
                      >
                        #5
                      </button>
                    </MDBCol>
                    <MDBCol>
                      <p className="lead fw-normal heading2 p-2 mb-2">
                        Yellow Palette :{" "}
                      </p>
                      <button
                        style={{ backgroundColor: "#fdb833" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("yellow1")}
                      >
                        #1
                      </button>
                      <button
                        style={{ backgroundColor: "#fdc43f" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("yellow2")}
                      >
                        #2
                      </button>
                      <button
                        style={{ backgroundColor: "#ffda3d" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("yellow3")}
                      >
                        #3
                      </button>
                      <button
                        style={{ backgroundColor: "#ffe94e" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("yellow4")}
                      >
                        #4
                      </button>
                      <button
                        style={{ backgroundColor: "#fff75e" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("yellow5")}
                      >
                        #5
                      </button>
                    </MDBCol>
                    <MDBCol>
                      <p className="lead fw-normal heading2 p-2 mb-2">
                        Blue Palette :{" "}
                      </p>
                      <button
                        style={{ backgroundColor: "#03045e" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("blue1")}
                      >
                        #1
                      </button>
                      <button
                        style={{ backgroundColor: "#023e8a" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("blue2")}
                      >
                        #2
                      </button>
                      <button
                        style={{ backgroundColor: "#0077b6" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("blue3")}
                      >
                        #3
                      </button>
                      <button
                        style={{ backgroundColor: "#00b4d8" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("blue4")}
                      >
                        #4
                      </button>
                      <button
                        style={{ backgroundColor: "#90e0ef" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("blue5")}
                      >
                        #5
                      </button>
                    </MDBCol>
                    <MDBCol>
                      <p className="lead fw-normal heading2 p-2 mb-2">
                        Maroon Palette :{" "}
                      </p>
                      <button
                        style={{ backgroundColor: "#641220" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("maroon1")}
                      >
                        #1
                      </button>
                      <button
                        style={{ backgroundColor: "#85182A" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("maroon2")}
                      >
                        #2
                      </button>
                      <button
                        style={{ backgroundColor: "#A71E34" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("maroon3")}
                      >
                        #3
                      </button>
                      <button
                        style={{ backgroundColor: "#BD1F36" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("maroon4")}
                      >
                        #4
                      </button>
                      <button
                        style={{ backgroundColor: "#DA1E37" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("maroon5")}
                      >
                        #5
                      </button>
                    </MDBCol>
                    <MDBCol>
                      <p className="lead fw-normal heading2 p-2 mb-2">
                        Green Palette :{" "}
                      </p>
                      <button
                        style={{ backgroundColor: "#1b4332" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("green1")}
                      >
                        #1
                      </button>
                      <button
                        style={{ backgroundColor: "#2d6a4f" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("green2")}
                      >
                        #2
                      </button>
                      <button
                        style={{ backgroundColor: "#40916c" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("green3")}
                      >
                        #3
                      </button>
                      <button
                        style={{ backgroundColor: "#52b788" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("green4")}
                      >
                        #4
                      </button>
                      <button
                        style={{ backgroundColor: "#74c69d" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("green5")}
                      >
                        #5
                      </button>
                    </MDBCol>
                    <MDBCol>
                      <p className="lead fw-normal heading2 p-2 mb-2">
                        Brown Palette :{" "}
                      </p>
                      <button
                        style={{ backgroundColor: "#7f5539" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("brown1")}
                      >
                        #1
                      </button>
                      <button
                        style={{ backgroundColor: "#9c6644" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("brown2")}
                      >
                        #2
                      </button>
                      <button
                        style={{ backgroundColor: "#b08968" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("brown3")}
                      >
                        #3
                      </button>
                      <button
                        style={{ backgroundColor: "#ddb892" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("brown4")}
                      >
                        #4
                      </button>
                      <button
                        style={{ backgroundColor: "#e6ccb2" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("brown5")}
                      >
                        #5
                      </button>
                    </MDBCol>
                    <MDBCol>
                      <p className="lead fw-normal heading2 p-2 mb-2">
                        Purple Palette :{" "}
                      </p>
                      <button
                        style={{ backgroundColor: "#7b2cbf" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("purple1")}
                      >
                        #1
                      </button>
                      <button
                        style={{ backgroundColor: "#735D78" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("purple2")}
                      >
                        #2
                      </button>
                      <button
                        style={{ backgroundColor: "#B392AC" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("purple3")}
                      >
                        #3
                      </button>
                      <button
                        style={{ backgroundColor: "#D1B3C4" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("purple4")}
                      >
                        #4
                      </button>
                      <button
                        style={{ backgroundColor: "#E8C2CA" }}
                        className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                        onClick={(e) => setTheme("purple5")}
                      >
                        #5
                      </button>
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
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{
                  backgroundImage: `url("${url}/${currentUser.header}")`,
                  height: "150px",
                }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  {/*Profile Picture*/}
                  <MDBCardImage
                    src={url + "/" + currentUser.image}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "10" }}
                  />
                </div>
              </div>
              <div
                className="p-4"
                style={{ marginTop: "65px", backgroundColor: "#ecf3ec8e" }}
              >
                {/*Profile Editor*/}
                <Link
                  style={{ zIndex: "10" }}
                  className={"my-btn " + themeData[theme].btn}
                  to={"/user/profileform"}
                >
                  Edit Profile
                </Link>
                <MDBTypography
                  className="mt-4"
                  tag="h4"
                  color={themeData[theme].text}
                >
                  {currentUser.fname}
                </MDBTypography>
                <MDBTypography tag="h6" color={themeData[theme].text}>
                  {currentUser.email}
                </MDBTypography>
                <MDBTypography tag="h6" color={themeData[theme].text}>
                  {currentUser.contact}
                </MDBTypography>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-3">
                  {/*User Description*/}
                  <p className="lead fw-normal mb-2">Description/Bio</p>
                  <div
                    className="p-4"
                    style={{ backgroundColor: themeData[theme].bg }}
                  >
                    <MDBCardText
                      className="font-italic mb-1"
                      style={{ color: themeData[theme].textColor }}
                    >
                      {currentUser.description}
                    </MDBCardText>
                  </div>
                </div>
                <div className="mb-3">
                  {/*Reminders*/}
                  <p className="lead fw-normal mb-2">My Notifications</p>
                  <div
                    className="p-4"
                    style={{ backgroundColor: themeData[theme].bg }}
                  >
                    <MDBCardText
                      className="font-italic mb-1"
                      style={{ color: themeData[theme].textColor }}
                    >
                      Show Reminders Here...
                    </MDBCardText>
                  </div>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <p className="lead fw-normal mb-2">My Widgets</p>
                  <MDBRow className="p-3 rounded-4">
                    <MDBCol
                      className="mb-2 rounded-5"
                      style={{ backgroundColor: themeData[theme].bg }}
                    >
                      {/*Calendar Widget*/}
                      <StaticDatePicker
                        defaultValue={dayjs(new Date())}
                        className="mb-2 mt-3 rounded-5"
                        sx={{ width: "44%", height: "78%" }}
                      />
                    </MDBCol>
                    <MDBCol
                      className="mb-2 rounded-5"
                      style={{ backgroundColor: themeData[theme].bg }}
                    >
                      {/*Clock Widget*/}
                      <StaticTimePicker
                        defaultValue={dayjs(new Date())}
                        className="mb-2 mt-3 rounded-5"
                        sx={{ width: "36%", height: "100%" }}
                      />
                    </MDBCol>
                    <MDBCol
                      className="mb-2 rounded-5"
                      style={{ backgroundColor: themeData[theme].bg }}
                    >
                      {/*Weather Widget*/}
                      <WeatherWidget className="mb-2 rounded-5" />
                    </MDBCol>
                  </MDBRow>
                </LocalizationProvider>
                <MDBCardBody className="text-black p-4">
                  <MDBRow className="g-2 p-2">
                    <MDBCol className="mb-2 w-100 rounded-3">
                      <div className="mb-3">
                        <p className="lead fw-normal mb-2">Go To :</p>
                        <div
                          className="p-3 justify-content-center align-items-center"
                          style={{ backgroundColor: "#e1e7e18e" }}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <Link
                            className={"my-btn " + themeData[theme].btn}
                            to={"/user/todo/" + currentUser._id}
                          >
                            My ToDo
                          </Link>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <Link
                            className={"my-btn " + themeData[theme].btn}
                            to={"/main/musiclisting/" + currentUser._id}
                          >
                            Music Player
                          </Link>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <Link
                            className={"my-btn " + themeData[theme].btn}
                            to={"/main/studylisting/" + currentUser._id}
                          >
                            Study Methods
                          </Link>
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
  );
};
export default UserProfile;
