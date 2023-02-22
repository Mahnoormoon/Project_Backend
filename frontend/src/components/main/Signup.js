import { Formik } from "formik";
import React from 'react'

const Signup = () => {
  const userSubmit = (formdata) => {
    console.log(formdata);
  }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SignUp Page</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        body{\n        display:flex;\n        justify-content: center;  \n        align-items: center;\n        height: 100vh;\n        margin:0;\n        background: url(signupbg.jpg);\n        background-size: cover;\n        background-position: center;\n    }\n    .signup{\n        width:20%;\n        padding:40px;\n        border-radius: 5px;\n        box-shadow:2px 2px 3px 2px rgba(184, 24, 51, 0.514);\n        background-color: white;\n        }\n    .signup-title{\n        font-size: 25px;\n        font-weight: bold;\n        text-align: center;\n        font-family: 'Montserrat',sans-serif;\n        color:rgb(184, 24, 51);\n    }\n    #id1{\n        display:block;\n        width:100%;\n        box-sizing: border-box;\n        padding: 5px;\n        border-radius: 5px;\n        margin-bottom: 20px;\n        border: no1px solid grey;\n    }\n    .btn1{\n        width: 100%;\n        padding: 10px;\n        border-radius: 5px;\n        background-color:rgb(184, 24, 51);\n        color:white;\n        font-weight: bold;\n        border: 1px solid rgba(0, 0, 0, 0.288);\n        margin-bottom: 20px;\n    }\n    .anchor{\n        display: block;\n        text-align: center;\n        text-decoration: none;\n        color:rgb(184, 24, 51);\n    }\n    "
        }}
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
        rel="stylesheet"
      />
      <div className="signup">
        <p className="signup-title">Sign Up</p>
        <Formik initialValues={{ fname: '', email: '', password: '' }} onSubmit={userSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <input type="text" id="id1" placeholder="Full Name" />
              <input type="text" id="id1" placeholder="Email Address" />
              <input type="password" id="id1" placeholder="Password" />
              <button className="btn1">Sign Up</button>
              <a className="anchor" href=" ">
                Already have an account?
              </a>
            </form>
          )}
        </Formik>
      </div>
    </>
  )
}
export default Signup