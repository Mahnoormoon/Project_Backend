import React, { useState } from "react";
import { Formik } from "formik";
import "./ProfileForm.css";
import { MDBInput } from "mdb-react-ui-kit";
import app_config from "../../config";
import Swal from 'sweetalert2';

const ProfileForm = () => {
  const url = app_config.apiurl;
  const [selImage, setSelImage] = useState("");
  const [selFile, setSelFile] = useState("");

  const userprofileSubmit = async (formdata) => {
    formdata.maudio = selFile;
    formdata.mimage = selImage;
    console.log(formdata);
    const res = await fetch(url + "/userprofile/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    if (res.status === 201) {
      //success alert
      Swal.fire(
        'Added to Profile!',
        'success'
      )
      console.log("Added to Profile");
    } else {
      // fail alert
      Swal.fire(
        'Oops...',
        'Error Adding to Profile!',
        'error'
      )
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };
  const uploadImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <div className="containerr py-3">
      <div className="container py-3 d-flex align-items-center">
        <div
          className="card py-3 align-items-center"
          style={{ width: "20rem" }}
        >
          <h4 className="heading1">Create Your Profile</h4>
          <div className="form-outline px-4 py-4 mb-2">
            <Formik
              initialValues={{
                pusername: "",
                pemail: "",
                pdescription: "",
                pcontact: "",
                mheader: "",
                mimage: "",
                created_at: new Date(), 
                updated_at: new Date()
              }}
              onSubmit={userprofileSubmit}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    label="Your Username"
                    type="text"
                    id="pusername"
                    className="form-control mb-2"
                    value={values.pusername}
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Email Address"
                    type="email"
                    id="pemail"
                    className="form-control mt-2 mb-2"
                    value={values.pemail}
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Description/Bio"
                    type="textarea"
                    id="mcredits"
                    className="form-control mt-2 mb-2"
                    value={values.mcredits}
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Contact"
                    type="text"
                    id="pcontact"
                    className="form-control mt-2 mb-2"
                    value={values.pcontact}
                    onChange={handleChange}
                  />
                  <label>Add Profile Header</label>
                  <input
                    type="file"
                    className="form-control mt-2 mb-2"
                    onChange={uploadFile}
                  />
                  <label>Add Profile Picture</label>
                  <input
                    type="file"
                    className="form-control mt-2 mb-2"
                    onChange={uploadImage}
                  />
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn2 btn-block mt-1 btn-rounded btn-outline-white mt-2"
                  >
                    Click to Create
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;