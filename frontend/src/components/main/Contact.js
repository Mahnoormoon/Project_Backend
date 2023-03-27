import { Formik } from "formik";
import React from 'react';
import Contactbg from "./Contactbg.jpg";
import "./Contact.css";
import app_config from "../../config";
import { MDBInput } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';

const Contact = () => {
  const url = app_config.apiurl;
  const contactSubmit = async (formdata) => {
    console.log(formdata);
    const res = await fetch(url + '/contact/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(res.status);
    if (res.status === 201) {
      //success alert
      Swal.fire(
        'Hurray!',
        'Message Sent',
        'success'
      )
      console.log('message sent');
    } else {
      // fail alert
      Swal.fire(
        'Oops...',
        'Error Sending Message',
        'error'
      )
    }
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
                  <h3 className="heading2 fw-bold mb-3">Contact Us</h3>
                  <Formik initialValues={{ cname: '', cemail: '', cmessage: '', added_at: new Date(), updated_at: new Date() }} onSubmit={contactSubmit}>

                    {({ values, handleSubmit, handleChange }) => (
                      <form onSubmit={handleSubmit}>
                        {/* Name input */}
                        <MDBInput
                          label="Full Name"
                          type="text"
                          id="name"
                          className="form-control mb-2"
                          value={values.cname}
                          onChange={handleChange}
                        />
                        {/* Email input */}
                        <MDBInput
                          label="Email Address"
                          type="email"
                          id="email"
                          className="form-control mt-2 mb-2"
                          value={values.cemail}
                          onChange={handleChange}
                        />
                        {/* Message input"" */}
                        <label className="heading2 fw-bold">Type your message...</label>
                        <textarea
                          type="textarea"
                          id="message"
                          className="form-control mt-2 mb-2"
                          value={values.cmessage}
                          onChange={handleChange}
                        />
                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn1 btn-rounded btn-block btn-outline-white mb-2">
                          Click to Send
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <img
                src={Contactbg}
                className="w-100 rounded-4 shadow-4 cascading-right"
                alt=""
              />
            </div>
            </div>
              <div className="card shadow-4" style={{ width: "18rem",
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
              left: "720px",
              bottom: "370px"
            }}>
                <ul className="list-group list-group-light">
                  <li className="list-group-item px-3"><i className="fab fa-google" />&nbsp;&nbsp;&nbsp;&nbsp;todocafe@gmail.com</li>
                  <li className="list-group-item px-3"><i className="fas fa-envelope" />&nbsp;&nbsp;&nbsp;&nbsp;+91 8957316901</li>
                  <li className="list-group-item px-3"><i className="fab fa-github" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project_ToDoCafe</li>
                  <li className="list-group-item px-3"><i className="fab fa-facebook-f" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ToDoCafe'</li>
                </ul>
              </div>
          </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>
  )
}
export default Contact