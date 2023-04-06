import React from 'react'
import './About.css';
import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
} from "mdb-react-ui-kit";
import todo from './todo.jpg';

function Product1() {
    return (
            <div className="mainlogin">
                <div className="containerrrr" style={{marginTop: '70px', marginBottom: '70px'}}>
                    <MDBRow>
                        <MDBCol className="lg-4">
                            <MDBCard className="mt-2 p-2">
                                <MDBCardBody className="text-center">
                                <h4 className="mt-2">To-Do List</h4>
                                    <p>customizable, compact, easy to user, categorize, edit, update, search, delete todos and schedule them for reminder notifications</p>
                                    <img className="img11 rounded-4 mt-3" src={todo} alt="Team Member" />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
    );
}
export default Product1;