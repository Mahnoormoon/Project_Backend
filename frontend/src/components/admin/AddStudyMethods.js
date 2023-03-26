import { Formik } from "formik";
import React from 'react';
import { useNavigate } from "react-router-dom";
import "./AddStudyMethods.css";
import app_config from "../../config";
import { MDBInput } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';

const AddStudyMethods = () => {

    const url = app_config.apiurl;
    const navigate = useNavigate();
    const studySubmit = async (formdata) => {
        console.log(formdata);
        const res = await fetch(url + '/study/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res.status);
        if (res.status === 201) {
            const addstudymethoddata = (await res.json()).result;
            //success alert
            Swal.fire(
                'Hurray!',
                'Study Method Added',
                'success'
            )
            console.log(addstudymethoddata);
            if (addstudymethoddata.isAdmin) {
                sessionStorage.setItem("admin", JSON.stringify(addstudymethoddata));
                navigate("/main/studylisting");
            } else {
                sessionStorage.setItem("user", JSON.stringify(addstudymethoddata));
                navigate("/main/studylisting");
            }
        } else {
            // fail alert
            Swal.fire(
                'Oops...',
                'Error Adding Study Method',
                'error'
            )
        }
    }
    return (
        <div className="containerr py-3">
            <div className="container py-3 d-flex justify-content-center align-items-center">
                <div
                    className="card py-3 justify-content-center align-items-center"
                    style={{ width: "20rem" }}
                >
                    <h4 className="heading1">Add Study Method Here</h4>
                    <div className="form-outline px-4 py-4 mb-2">
                        <Formik
                            initialValues={{
                                stitle: "",
                                sdescription: "",
                                scredits: "",
                                created_at: new Date(),
                                updated_at: new Date()
                            }}
                            onSubmit={studySubmit}
                        >
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit}>
                                    <MDBInput
                                        label="Study Method Title"
                                        type="text"
                                        id="stitle"
                                        className="form-control mb-2"
                                        value={values.stitle}
                                        onChange={handleChange}
                                    />
                                    <label>Description</label>
                                    <textarea
                                        type="textarea"
                                        id="sdescription"
                                        className="form-control mt-2 mb-2"
                                        value={values.sdescription}
                                        onChange={handleChange}
                                    />
                                    <MDBInput
                                        label="Study Method Credits"
                                        type="textarea"
                                        id="scredits"
                                        className="form-control mt-2 mb-2"
                                        value={values.scredits}
                                        onChange={handleChange}
                                    />
                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        className="btn2 btn-block mt-1 btn-rounded btn-outline-white mt-2"
                                    >
                                        Click to Add
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
export default AddStudyMethods;