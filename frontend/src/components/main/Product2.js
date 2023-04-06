import React from 'react'
import './About.css';
import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
} from "mdb-react-ui-kit";
import study from './study.jpg';

function Product2() {
    return (
            <div className="mainlogin">
                <div className="containerrrr" style={{marginTop: '70px', marginBottom: '70px'}}>
                    <MDBRow>
                        <MDBCol className="lg-4">
                            <MDBCard className="mt-2 p-2">
                                <MDBCardBody className="text-center">
                                <h4 className="mt-2">Music Player</h4>
                                    <p>play study music while studying to help calm the stress down and create a soothing learning environment</p>
                                    <img className="img11 rounded-4 mt-3" src={study} alt="Team Member" />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
    );
}
export default Product2;