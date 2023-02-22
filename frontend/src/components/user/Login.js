import { Formik } from "formik";
import React from 'react'

const Login = () => {
  const userSubmit = (formdata) => {
    console.log(formdata);
  }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login Page</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
        rel="stylesheet"
      />
      {/* Icon Link*/}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    *{\n        font-family: 'Montserrat',sans-serif;\n    }\n    .mycard{\n        /*border:1px solid red;*/\n        width:25%;\n        padding:40px;\n        border-radius: 5px;\n        /*box-shadow:x-offset y-offset blur size color*/\n        box-shadow:2px 2px 4px 3px rgba(0, 0, 0, 0.302);\n        background-color: white;\n        border-left: 25px solid rgb(194, 239, 240);\n    }\n    body{\n        display:flex;\n        justify-content: center;  \n        align-items: center;\n        height: 100vh;\n        margin:0;\n        /* background-color: cadetblue; */\n        /* background-image: linear-gradient(0deg, cadetblue,wheat); */\n        /* background-image: radial-gradient(wheat, #5f9ea0); */\n        /* background-image: url(' '); */\n        background-repeat: no-repeat;\n        background-size: cover; /*contain for Ist image*/\n        background-position: center;\n        background-image: linear-gradient(0deg,#ffffff93, #ffffff93), url('https://media.istockphoto.com/vectors/realistic-mountains-landscape-morning-wood-panorama-pine-trees-and-vector-id1150481340?k=20&m=1150481340&s=612x612&w=0&h=y_RdS4lPY2p7O_bh1ZhaeLLOOuSLNBaHZFMdmgdQaVE=');\n    }\n    .myinput{\n        display:block;\n        width:100%;\n        box-sizing: border-box;\n        padding: 5px;\n        border-radius: 5px;\n        /* margin-bottom: 20px; */\n        border: no1px solid grey;\n    }\n    /* Pseudo-Classes */\n    .myinput:focus{\n        outline: 1px solid rgb(21, 103, 105);\n        background-color: rgb(194, 239, 240);\n    }\n    .card-title{\n        font-size: 25px;\n        font-weight: bold;\n        text-align: center;\n        font-family: Montserrat;\n        color:white;\n        text-shadow: 2px 2px 4px rgb(138, 194, 196);\n    }\n    .mybtn{\n        width: 100%;\n        padding: 10px;\n        border-radius: 5px;\n        background-color:cadetblue;\n        color:white;\n        font-weight: bold;\n        border: 1px solid rgba(0, 0, 0, 0.397);\n        margin-bottom: 20px;\n        transition-duration: 0.3s;\n    }\n    /* Pseudo-Classes */\n    .mybtn:hover{\n        background-color: rgb(21, 103, 105);\n        color: rgb(185, 225, 226);\n        outline: 1px solid rgb(194, 239, 240);\n    }\n    .link{\n        display: block;\n        text-align: center;\n        text-decoration: none;\n        color:gray;\n    }\n    /* Pseudo-Classes */\n    .link:visited{\n        color: rgb(21, 103, 105);\n    }\n    #logo{\n        width: 60px;\n        height: 60px;\n        /* margin-left: 138px; */\n        margin:auto;\n        display: block;\n    }\n"
        }}
      />
      <div className="mycard">
        <img
          id="logo"
          src=""
          alt=""
        />
        <p className="card-title">Login To Continue</p>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={userSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                {/* Icon */}
                <i className="fas fa-user    " /> &nbsp;&nbsp;
                <input type="text" className="myinput" placeholder="Email Address" />
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                {/* Icon */}
                <i className="fas fa-key    " /> &nbsp;&nbsp;
                <input type="password" className="myinput" placeholder="Password" />
              </div>
              <button className="mybtn">Login</button>
              <a className="link" href="">
                Forgot Password
              </a>
            </form>
          )}
        </Formik>
      </div>
    </>
  )
}
export default Login