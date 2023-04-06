import React from 'react'
import './About.css';
import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
} from "mdb-react-ui-kit";
import blog1 from './blog1.jpg';
import blog2 from './blog2.jpg';
import blog3 from './blog3.jpg';
function Product2() {
    return (
        <div className="mainlogin">
            <div className="containerrrr" style={{ marginTop: '70px', marginBottom: '70px' }}>
                <MDBRow>
                    <MDBCol className="lg-4">
                        <MDBCard className="mt-2 p-2">
                            <MDBCardBody className="text-center">
                                <h4 className="mt-2">Blog: Study Methods</h4>
                                <p>get access to the various study methods and techniques like pomodoro from all over the internet at just one place...</p>
                                <MDBCol className="lg-8">
                                    <img className="img11 rounded-4 mt-3" src={blog2} alt="Team Member" />
                                </MDBCol>
                                <MDBCol className="lg-8">
                                    <img className="img11 rounded-4 mt-3" src={blog3} alt="Team Member" />
                                </MDBCol>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    );
}
export default Product2;