import React, { useState } from "react";
import { Formik } from "formik";
import "./EditProfile.css";
import { MDBInput } from "mdb-react-ui-kit";
import app_config from "../../config";
import Swal from 'sweetalert2';

const EditProfile = () => {
  const url = app_config.apiurl;
  const [selImage, setSelImage] = useState("");

  const edituserprofileSubmit = async (formdata) => {
    formdata.eheader = selImage;
    formdata.eimage = selImage;
    console.log(formdata);
    const res = await fetch(url + "/edituserprofile/add", {
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
        'Hurray!',
        'Profile Changes Successful!',
        'success'
      )
      console.log("Profile Edited");
    } else {
      // fail alert
      Swal.fire(
        'Oops...',
        'Error in Profile Changes!',
        'error'
      )
    }
  };

  const reuploadImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file reuploaded");
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
          <h4 className="heading1">Edit Your Profile</h4>
          <div className="form-outline px-4 py-4 mb-2">
            <Formik
              initialValues={{
                eusername: "",
                eemail: "",
                edescription: "",
                econtact: "",
                eheader: "",
                eimage: "",
                edited_at: new Date(), 
                updated_at: new Date()
              }}
              onSubmit={edituserprofileSubmit}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    label="Edit Your Username"
                    type="text"
                    id="eusername"
                    className="form-control mb-2"
                    value={values.eusername}
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Edit Email Address"
                    type="eemail"
                    id="eemail"
                    className="form-control mt-2 mb-2"
                    value={values.eemail}
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Edit Description/Bio"
                    type="textarea"
                    id="edescription"
                    className="form-control mt-2 mb-2"
                    value={values.edescription}
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Edit Contact"
                    type="text"
                    id="econtact"
                    className="form-control mt-2 mb-2"
                    value={values.econtact}
                    onChange={handleChange}
                  />
                  <label>Edit Profile Header</label>
                  <input
                    type="file"
                    className="form-control mt-2 mb-2"
                    onChange={reuploadImage}
                  />
                  <label>Edit Profile Picture</label>
                  <input
                    type="file"
                    className="form-control mt-2 mb-2"
                    onChange={reuploadImage}
                  />
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn2 btn-block mt-1 btn-rounded btn-outline-white mt-2"
                  >
                    Click to Edit Changes
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
export default EditProfile;