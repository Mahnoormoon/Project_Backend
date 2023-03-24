import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import "./ProfileForm.css";
import { MDBInput } from "mdb-react-ui-kit";
import app_config from "../../config";
import Swal from 'sweetalert2';

const ProfileForm = () => {
  const url = app_config.apiurl;
  const navigate = useNavigate();
  const [selImage, setSelImage] = useState("");
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  console.log(currentUser);

  const userprofileSubmit = async (formdata) => {
    formdata.header = selImage;
    formdata.image = selImage;
    console.log(formdata);
    const res = await fetch(url + "/user/update/"+currentUser._id, {
      method: "PUT",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    if (res.status === 200) {
      const userprofiledata = (await res.json()).result;
      //success alert
      Swal.fire(
        'Hurray!',
        'Added to Profile!',
        'success'
      );

      console.log(userprofiledata);
      if(userprofiledata.isAdmin){
        sessionStorage.setItem("admin", JSON.stringify(userprofiledata));
        navigate("/admin/profile");
      }else{
        sessionStorage.setItem("user", JSON.stringify(userprofiledata));
        navigate("/user/profile");
      }
    } else {
      // fail alert
      Swal.fire(
        'Oops...',
        'Error Adding to Profile!',
        'error'
      )
    }
  };

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.image);
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
  const uploadHeaderImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.header);
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
              initialValues={currentUser}
              onSubmit={userprofileSubmit}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    label="Your Username"
                    type="text"
                    id="username"
                    className="form-control mb-2"
                    value={values.fname}
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Email Address"
                    type="email"
                    id="email"
                    className="form-control mt-2 mb-2"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Description/Bio"
                    type="textarea"
                    id="description"
                    className="form-control mt-2 mb-2"
                    value={values.description}
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Contact"
                    type="text"
                    id="contact"
                    className="form-control mt-2 mb-2"
                    value={values.contact}
                    onChange={handleChange}
                  />
                  <label>Add Profile Header</label>
                  <input
                    type="file"
                    className="form-control mt-2 mb-2"
                    onChange={uploadHeaderImage}
                  />
                  <label>Add Profile Picture</label>
                  <input
                    type="file"
                    className="form-control mt-2 mb-2"
                    onChange={uploadProfileImage}
                  />
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn2 btn-block mt-1 btn-rounded btn-outline-white mt-2"
                  >
                    Click to Create
                  </button>
                  {/*<button type ="submit" className="btn2 btn-block mt-1 btn-rounded btn-outline-white mt-2 justify-content-center align-items-center" onSubmit={'/user/profile/'}>Click to Create</button>*/}
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