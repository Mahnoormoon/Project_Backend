import { Formik } from "formik";
import React from 'react';
import Loginimage from"./Loginimg.jpg";
import "./Login.css";

const Login = () => {
  const userSubmit = (formdata) => {
    console.log(formdata);
  }
  return (
    <>
      {/* Section: Design Block */}
      <section className="mainlogin text-center text-lg-start">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
          }}
        />
        {/* Jumbotron */}
        <div className="container py-3">
          <div className="row g-0 align-items-center">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)"
                }}
              >
                <div className="card-body p-3 shadow-3 text-center">
                  <h2 className="heading2 fw-bold mb-3">Login Now</h2>
                  <Formik initialValues={{ fname: '', lname: '', email: '', password: '' }} onSubmit={userSubmit}>

                    {({ values, handleSubmit, handleChange }) => (
                      <form onSubmit={handleSubmit}>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row">
                          <div className="col-md-4 mb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1"
                                className="form-control"
                              />
                              <label className="form-label" htmlFor="form3Example1">
                                First Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4 mb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example2"
                                className="form-control"
                              />
                              <label className="form-label" htmlFor="form3Example2">
                                Last Name
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* Email input */}
                        <div className="form-outline mb-2">
                          <input
                            type="email"
                            id="form3Example3"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Email Address
                          </label>
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            id="form3Example4"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                        </div>
                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn1 btn-rounded btn-block btn-outline-white mb-2"
                        >
                          Login
                        </button>
                        {/* Register buttons */}
                        <div className="text-center">
                          <p>or sign up using:</p>
                          <button
                            type="button"
                            className="btn4 btn-outline-white btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f" />
                          </button>
                          <button
                            type="button"
                            className="btn4 btn-outline-white btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-google" />
                          </button>
                          <button
                            type="button"
                            className="btn4 btn-outline-white btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-twitter" />
                          </button>
                          <button
                            type="button"
                            className="btn4 btn-outline-white btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-github" />
                          </button><br></br>
                          <br></br>
                          <a>Forgot Password</a>
                        </div>
                      </form>
                    ) }
                  </Formik>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <img
                src={Loginimage}
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>
  )
}
export default Login