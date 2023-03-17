import { Formik } from "formik";
import React from 'react';
import Signupimage from "./Signupimg.jpg";
import "./Signup.css";
import app_config from "../../config";
import { MDBInput } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';

const Signup = () => {

  const url = app_config.apiurl;

  const userSubmit = async (formdata) => {
    console.log(formdata);
    const res = await fetch(url + '/user/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(res.status);
    if(res.status===201){
      //success alert
      Swal.fire(
        'Hurray!',
        'Signup Successful',
        'success'
      )
      console.log('signup success');
    }else{
      // fail alert
      Swal.fire(
        'Oops...',
        'Signup Unsuccessful',
        'error'
      )
    }
  }
    return (
      <>
        {/* Section: Design Block */}
        <section className="mainsignup text-center text-lg-start">
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
                    <h3 class="heading fw-bold mb-3">Signup Now</h3>
                    <Formik initialValues={{ fname: '', lname: '', email: '', password: '', created_at: new Date(), updated_at: new Date() }} onSubmit={userSubmit}>

                      {({ values, handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                          {/* 2 column grid layout with text inputs for the first and last names */}
                          <div className="row">
                            <div className="col-md-4 mb-2">
                              <div className="form-outline">
                                <MDBInput
                                  label="First Name"
                                  type="text"
                                  id="fname"
                                  className="form-control"
                                  value={values.fname}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-4 mb-2">
                              <div className="form-outline">
                                <MDBInput
                                  label="Last Name"
                                  type="text"
                                  id="lname"
                                  className="form-control"
                                  value={values.lname}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          {/* Email input */}
                          <div className="form-outline mb-2">
                            <MDBInput
                              label="Email Address"
                              type="email"
                              id="email"
                              className="form-control"
                              value={values.email}
                              onChange={handleChange}
                            />
                          </div>
                          {/* Password input */}
                          <div className="form-outline mb-2">
                            <MDBInput
                              label="Password"
                              type="password"
                              id="password"
                              className="form-control"
                              value={values.password}
                              onChange={handleChange}
                            />
                          </div>
                          {/* Checkbox */}
                          <div className="form-check d-flex justify-content-center mb-2">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              defaultValue=""
                              id="checkbox"
                              defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="form2Example33">
                              Subscribe to our newsletter
                            </label>
                          </div>
                          {/* Submit button */}
                          <button
                            type="submit"
                            className="btn2 btn-block btn-rounded btn-outline-white mb-4"
                          >
                            Signup
                          </button>
                          {/* Register buttons */}
                          <div className="text-center">
                            <p>or sign up using:</p>
                            <button
                              type="button"
                              className="btn3 btn-outline-white btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-facebook-f" />
                            </button>
                            <button
                              type="button"
                              className="btn3 btn-outline-white btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-google" />
                            </button>
                            <button
                              type="button"
                              className="btn3 btn-outline-white btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-twitter" />
                            </button>
                            <button
                              type="button"
                              className="btn3 btn-outline-white btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-github" />
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <img
                  src={Signupimage}
                  className="w-100 rounded-4 shadow-4"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section >
        {/* Section: Design Block */}
      </>
    )
  }
  export default Signup