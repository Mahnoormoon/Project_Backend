import React from 'react'
import { Formik } from "formik";
import "./AddMusic.css";
import { MDBInput } from 'mdb-react-ui-kit';
import app_config from "../../config";
const AddMusic = () => {
    const url = app_config.apiurl;

    const musicSubmit = async (formdata) => {
        console.log(formdata);
        const res = await fetch(url + '/music/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res.status);
        if (res.status === 201) {
            //success alert
            console.log('music added');
        } else {
            // fail alert
        }
    }
    return (
        <div className="containerr py-3">
            <div className="container py-3 d-flex align-items-center">
                <div className="card py-3 align-items-center" style={{ width: "20rem" }}>
                    <h4 className="heading1">Add Music Here</h4>
                    <div className="form-outline px-4 py-4 mb-2">
                        <Formik initialValues={{ mtitle: '', aname: '', mcredits: '', maudio: '', mimage: '' }} onSubmit={musicSubmit}>

                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit}>
                                    <MDBInput
                                        label="Music Title"
                                        type="text"
                                        id="mtitle"
                                        className="form-control mb-2"
                                        value={values.mtitle}
                                        onChange={handleChange}
                                    />
                                    <MDBInput
                                        label="Artist Name"
                                        type="text"
                                        id="aname"
                                        className="form-control mt-2 mb-2"
                                        value={values.aname}
                                        onChange={handleChange}
                                    />
                                    <MDBInput
                                        label="Music Credits"
                                        type="textarea"
                                        id="mcredits"
                                        className="form-control mt-2 mb-2"
                                        value={values.mcredits}
                                        onChange={handleChange}
                                    />
                                    <label>Add Audio File</label>
                                    <MDBInput
                                        type="file"
                                        id="maudio"
                                        className="form-control mt-2 mb-2"
                                        value={values.maudio}
                                        onChange={handleChange}
                                    />
                                    <label>Add Music Cover Image</label>
                                    <MDBInput
                                        type="file"
                                        id="mimage"
                                        className="form-control mt-2 mb-2"
                                        value={values.mimage}
                                        onChange={handleChange}
                                    />
                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        className="btn2 btn-block mt-1 btn-rounded btn-outline-white mt-2">
                                        Click to Add
                                    </button>
                                </form>
                            )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddMusic