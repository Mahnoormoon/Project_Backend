import React, { useEffect, useState } from 'react';
//import { Link } from "react-router-dom";
//import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBInput,
    MDBListGroup
} from 'mdb-react-ui-kit';
const ToDo = () => {
    const [theme, setTheme] = useState('light');

    const themeData = {
        light: {
            btn: 'dark',
            bg: '#fff',
            text: 'dark',
            textColor: 'black'
        },
        dark: {
            btn: 'light',
            bg: '#222',
            text: 'light',
            textColor: 'white'
        },
        primary: {
            btn: 'primary',
            bg: 'primary',
            text: 'primary',
            textColor: 'white'
        },
        secondary: {
            btn: 'secondary',
            bg: '#3B71CA',
            text: 'secondary',
            textColor: 'white'
        },
        success: {
            btn: 'success',
            bg: '#14A44D',
            text: 'success',
            textColor: 'white'
        },
        danger: {
            btn: 'danger',
            bg: '#DC4C64',
            text: 'danger',
            textColor: 'white'
        },
        warning: {
            btn: 'warning',
            bg: '#E4A11B',
            text: 'warning',
            textColor: 'white'
        },
        info: {
            btn: 'info',
            bg: '#54B4D3',
            text: 'info',
            textColor: 'white'
        },
        pink1: {
            btn: '#F08080',
            bg: '#F08080',
            text: '#F08080',
            textColor: 'white'
        },
        pink2: {
            btn: '#F4978E',
            bg: '#F4978E',
            text: '#F4978E',
            textColor: 'white'
        },
        pink3: {
            btn: '#F8AD9D',
            bg: '#F8AD9D',
            text: '#F8AD9D',
            textColor: 'white'
        },
        pink4: {
            btn: '#FBC4AB',
            bg: '#FBC4AB',
            text: '#FBC4AB',
            textColor: 'white'
        },
        pink5: {
            btn: '#FFDAB9',
            bg: '#FFDAB9',
            text: '#FFDAB9',
            textColor: 'white'
        },
        yellow1: {
            btn: '#fdb833',
            bg: '#fdb833',
            text: '#fdb833',
            textColor: 'white'
        },
        yellow2: {
            btn: '#fdc43f',
            bg: '#fdc43f',
            text: '#fdc43f',
            textColor: 'white'
        },
        yellow3: {
            btn: '#ffda3d',
            bg: '#ffda3d',
            text: '#ffda3d',
            textColor: 'white'
        },
        yellow4: {
            btn: '#ffe94e',
            bg: '#ffe94e',
            text: '#ffe94e',
            textColor: 'white'
        },
        yellow5: {
            btn: '#fff75e',
            bg: '#fff75e',
            text: '#fff75e',
            textColor: 'white'
        },
    }
    return (
        <section style={{ backgroundColor: '#c3f1c38e' }}>
            <div className="container-md dropdown r-90 mt-4 mb-6 p-6">
                <button
                    className="btn dropdown-toggle hidden-arrow rounded-8"
                    type="button"
                    id="dropdownMenuButton3"
                    data-mdb-toggle="dropdown"
                >
                    <i className="fas fa-pen fa-sm icon">&nbsp;&nbsp;&nbsp;C u s t o m i z e</i>
                </button>
                <ul className="p-3 dropdown-menu">
                    <p className="lead fw-normal heading2 p-2 mb-2">Choose desired theme/color : </p>
                    <MDBRow className="p-3">
                        <MDBCard className="p-2">
                            <MDBCol>
                                <p className="lead fw-normal heading2 p-2 mb-2">Basic MDB options : </p>
                                <button style={{ backgroundColor: '#ecf3ec8e' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-black" onClick={e => setTheme('light')}>Light</button>
                                <button style={{ backgroundColor: '#222' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('dark')}>Dark</button>
                                <button style={{ backgroundColor: '#9FA6B2' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('primary')}>Primary</button>
                                <button style={{ backgroundColor: '#3B71CA' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('secondary')}>Secondary</button>
                                <button style={{ backgroundColor: '#14A44D' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('success')}>Success</button>
                                <button style={{ backgroundColor: '#DC4C64' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('danger')}>Danger</button>
                                <button style={{ backgroundColor: '#E4A11B' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('warning')}>Warning</button>
                                <button style={{ backgroundColor: '#54B4D3' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('info')}>Info</button>
                            </MDBCol>
                        </MDBCard>
                        <MDBCard className="p-2 mt-3">
                            <MDBCol>
                                <p className="lead fw-normal heading2 p-2 mb-2">Custom options : </p>
                                <MDBCard className="p-2 mt-3">
                                    <MDBCol>
                                        <p className="lead fw-normal heading2 p-2 mb-2">Pink Pallette : </p>
                                        <button style={{ backgroundColor: '#f08080' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink1')}>#1</button>
                                        <button style={{ backgroundColor: '#F4978E' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink2')}>#2</button>
                                        <button style={{ backgroundColor: '#F8AD9D' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink3')}>#3</button>
                                        <button style={{ backgroundColor: '#FBC4AB' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink4')}>#4</button>
                                        <button style={{ backgroundColor: '#FFDAB9' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink5')}>#5</button>
                                    </MDBCol>
                                    <MDBCol>
                                        <p className="lead fw-normal heading2 p-2 mb-2">Yellow Pallette : </p>
                                        <button style={{ backgroundColor: '#fdb833' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow1')}>#1</button>
                                        <button style={{ backgroundColor: '#fdc43f' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow2')}>#2</button>
                                        <button style={{ backgroundColor: '#ffda3d' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow3')}>#3</button>
                                        <button style={{ backgroundColor: '#ffe94e' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow4')}>#4</button>
                                        <button style={{ backgroundColor: '#fff75e' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow5')}>#5</button>
                                    </MDBCol>
                                </MDBCard>
                            </MDBCol>
                        </MDBCard>
                    </MDBRow>
                </ul>
            </div>
            <MDBContainer className="">
                <h3 className='display-4 fw-thin  text-center' style={{ color: "#5f8b5f" }}>My ToDo List</h3>
                <MDBCard className="mb-4" style={{ width: "100%" }}>
                    <MDBRow>
                        <MDBCol className="lg-4">
                            <MDBCard className="mb-4 mt-3 p-2">
                                <MDBCardBody className="text-center">
                                    <MDBInput
                                        label="ToDo Title"
                                        type="text"
                                        id="title"
                                        className="form-control mb-2"
                                    />
                                </MDBCardBody>
                                <button className="btn2 btn-outline-primary" type="button" id=" " data-mdb-ripple-color="dark">
                                    Add
                                </button>
                            </MDBCard>
                        </MDBCol>
                        {/*Add ToDo*/}
                        <MDBCol className="lg-8">
                            <MDBCard className="mb-4 mt-3 p-2">
                                <MDBCardBody className="text-center">
                                    <div class="input-group mb-2">
                                        <MDBInput
                                            type="text"
                                            className="form-control"
                                            id="todo"
                                            label="Enter Task"
                                        />
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker label="Date/Time" sx={{ width: '50%', height: '50%' }} />
                                        </LocalizationProvider>
                                        <button className="btn btn-outline-primary" type="button" id=" " data-mdb-ripple-color="dark">
                                            Add
                                        </button>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                            {/*ToDo List*/}
                            <MDBCard className="mb-4 mt-3 p-2">
                                <MDBCardBody className="text-center">
                                    <div className="input-group mb-2">
                                        <MDBListGroup
                                            type="text"
                                            className="form-control"
                                            label="Enter Task"
                                        />
                                        {/*<button class="btn btn-outline-primary" type="button" id=" " data-mdb-ripple-color="dark">
                                            Add
                                        </button>*/}
                                        <button className='btn btn-info' > <i style={{ color: "white" }} class="fas fa-pen"></i></button>
                                        <button className='btn btn-danger' > <i style={{ color: "white" }} class="fas fa-trash"></i></button>
                                        {/*style={{backgroundColor:""}} onClick={() => deleteUser(user._id)}*/}
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBCol className="lg-4">
                        <MDBCard className="mb-4 mt-3 p-2">
                            <MDBCardBody className="text-center">
                                <div className="dropdown">
                                    <button
                                        className="btn btn-primary dropdown-toggle w-100"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Show All ToDo Lists
                                    </button>
                                    <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                list1
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                list2
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                list3
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBCard>
            </MDBContainer>
        </section>
    )
}
export default ToDo