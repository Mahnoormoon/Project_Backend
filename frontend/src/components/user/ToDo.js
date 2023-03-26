import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import './theme.css';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from "mdb-react-ui-kit";
import app_config from "../../config";
const ToDo = () => {
    const [theme, setTheme] = useState("light");

    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState("");
    const url = app_config.apiurl;


    const fetchTodo = async () => {
        const res = await fetch(url + "/todo/getall");
        const data = await res.json();
        console.log(data);
        setTodoList(data.result);
    };


    const saveTodo = async () => {
        if (text) {
            const res = await fetch(url + "/todo/add", {
                method: "POST",
                body: JSON.stringify({
                    title: text,
                    description: "",
                    created_at: new Date(),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(res.status);
            if (res.status === 201) {
                await fetchTodo();
            }
            setText("");
        }
    };

    useEffect(() => {
        fetchTodo();
    }, [])

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
            btn: 'btn-pink-1',
            bg: '#F08080',
            text: '#F08080',
            textColor: 'white'
        },
        pink2: {
            btn: 'btn-pink-2',
            bg: '#F4978E',
            text: '#F4978E',
            textColor: 'white'
        },
        pink3: {
            btn: 'btn-pink-3',
            bg: '#F8AD9D',
            text: '#F8AD9D',
            textColor: 'white'
        },
        pink4: {
            btn: 'btn-pink-4',
            bg: '#FBC4AB',
            text: '#FBC4AB',
            textColor: 'white'
        },
        pink5: {
            btn: 'btn-pink-5',
            bg: '#FFDAB9',
            text: '#FFDAB9',
            textColor: 'white'
        },
        yellow1: {
            btn: 'btn-yellow-1',
            bg: '#fdb833',
            text: '#fdb833',
            textColor: 'white'
        },
        yellow2: {
            btn: 'btn-yellow-2',
            bg: '#fdc43f',
            text: '#fdc43f',
            textColor: 'white'
        },
        yellow3: {
            btn: 'btn-yellow-3',
            bg: '#ffda3d',
            text: '#ffda3d',
            textColor: 'white'
        },
        yellow4: {
            btn: 'btn-yellow-4',
            bg: '#ffe94e',
            text: '#ffe94e',
            textColor: 'white'
        },
        yellow5: {
            btn: 'btn-yellow-5',
            bg: '#fff75e',
            text: '#fff75e',
            textColor: 'white'
        },
        blue1: {
            btn: 'btn-blue-1',
            bg: '#03045e',
            text: '#03045e',
            textColor: 'white'
        },
        blue2: {
            btn: 'btn-blue-2',
            bg: '#023e8a',
            text: '#023e8a',
            textColor: 'white'
        },
        blue3: {
            btn: 'btn-blue-3',
            bg: '#0077b6',
            text: '#0077b6',
            textColor: 'white'
        },
        blue4: {
            btn: 'btn-blue-4',
            bg: '#00b4d8',
            text: '#00b4d8',
            textColor: 'white'
        },
        blue5: {
            btn: 'btn-blue-5',
            bg: '#90e0ef',
            text: '#90e0ef',
            textColor: 'white'
        },
        maroon1: {
            btn: 'btn-maroon-1',
            bg: '#641220',
            text: '#641220',
            textColor: 'white'
        },
        maroon2: {
            btn: 'btn-maroon-2',
            bg: '#85182A',
            text: '#85182A',
            textColor: 'white'
        },
        maroon3: {
            btn: 'btn-maroon-3',
            bg: '#A71E34',
            text: '#A71E34',
            textColor: 'white'
        },
        maroon4: {
            btn: 'btn-maroon-4',
            bg: '#BD1F36',
            text: '#BD1F36',
            textColor: 'white'
        },
        maroon5: {
            btn: 'btn-maroon-5',
            bg: '#DA1E37',
            text: '#DA1E37',
            textColor: 'white'
        },
        green1: {
            btn: 'btn-green-1',
            bg: '#1b4332',
            text: '#1b4332',
            textColor: 'white'
        },
        green2: {
            btn: 'btn-green-2',
            bg: '#2d6a4f',
            text: '#2d6a4f',
            textColor: 'white'
        },
        green3: {
            btn: 'btn-green-3',
            bg: '#40916c',
            text: '#40916c',
            textColor: 'white'
        },
        green4: {
            btn: 'btn-green-4',
            bg: '#52b788',
            text: '#52b788',
            textColor: 'white'
        },
        green5: {
            btn: 'btn-green-5',
            bg: '#74c69d',
            text: '#74c69d',
            textColor: 'white'
        },
        brown1: {
            btn: 'btn-brown-1',
            bg: '#7f5539',
            text: '#7f5539',
            textColor: 'white'
        },
        brown2: {
            btn: 'btn-brown-2',
            bg: '#9c6644',
            text: '#9c6644',
            textColor: 'white'
        },
        brown3: {
            btn: 'btn-brown-3',
            bg: '#b08968',
            text: '#b08968',
            textColor: 'white'
        },
        brown4: {
            btn: 'btn-brown-4',
            bg: '#ddb892',
            text: '#ddb892',
            textColor: 'white'
        },
        brown5: {
            btn: 'btn-brown-5',
            bg: '#e6ccb2',
            text: '#e6ccb2',
            textColor: 'white'
        },
        purple1: {
            btn: 'btn-purple-1',
            bg: '#10002b',
            text: '#10002b',
            textColor: 'white'
        },
        purple2: {
            btn: 'btn-purple-2',
            bg: '#3c096c',
            text: '#3c096c',
            textColor: 'white'
        },
        purple3: {
            btn: 'btn-purple-3',
            bg: '#0077b6',
            text: '#0077b6',
            textColor: 'white'
        },
        purple4: {
            btn: 'btn-purple-4',
            bg: '#5a189a',
            text: '#5a189a',
            textColor: 'white'
        },
        purple5: {
            btn: 'btn-purple-5',
            bg: '#7b2cbf',
            text: '#7b2cbf',
            textColor: 'white'
        },
        purple6: {
            btn: 'btn-purple-6',
            bg: '#9d4edd',
            text: '#9d4edd',
            textColor: 'white'
        },
        purple7: {
            btn: 'btn-purple-7',
            bg: '#c77dff',
            text: '#c77dff',
            textColor: 'white'
        },
        purple8: {
            btn: 'btn-purple-8',
            bg: '#e0aaff',
            text: '#e0aaff',
            textColor: 'white'
        },
    }

    return (
        <section style={{ backgroundColor: "#c3f1c38e" }}>
            <div className="container-md dropdown r-90 mt-4 mb-6 p-6">
                <button
                    className="btn dropdown-toggle hidden-arrow rounded-8"
                    type="button"
                    id="dropdownMenuButton3"
                    data-mdb-toggle="dropdown"
                >
                    <i className="fas fa-pen fa-sm icon">
                        &nbsp;&nbsp;&nbsp;C u s t o m i z e
                    </i>
                </button>
                <ul className="p-3 dropdown-menu">
                    <p className="lead fw-normal heading2 p-2 mb-2">
                        Choose desired theme/color :{" "}
                    </p>
                    <MDBRow className="p-3">
                        <MDBCard className="p-2">
                            <MDBCol>
                                <p className="lead fw-normal heading2 p-2 mb-2">
                                    Basic MDB options :{" "}
                                </p>
                                <button
                                    style={{ backgroundColor: "#ecf3ec8e" }}
                                    className="p-2 mb-2 md btn-rounded btn-outline-white text-black"
                                    onClick={(e) => setTheme("light")}
                                >
                                    Light
                                </button>
                                <button
                                    style={{ backgroundColor: "#222" }}
                                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                                    onClick={(e) => setTheme("dark")}
                                >
                                    Dark
                                </button>
                                <button
                                    style={{ backgroundColor: "#9FA6B2" }}
                                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                                    onClick={(e) => setTheme("primary")}
                                >
                                    Primary
                                </button>
                                <button
                                    style={{ backgroundColor: "#3B71CA" }}
                                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                                    onClick={(e) => setTheme("secondary")}
                                >
                                    Secondary
                                </button>
                                <button
                                    style={{ backgroundColor: "#14A44D" }}
                                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                                    onClick={(e) => setTheme("success")}
                                >
                                    Success
                                </button>
                                <button
                                    style={{ backgroundColor: "#DC4C64" }}
                                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                                    onClick={(e) => setTheme("danger")}
                                >
                                    Danger
                                </button>
                                <button
                                    style={{ backgroundColor: "#E4A11B" }}
                                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                                    onClick={(e) => setTheme("warning")}
                                >
                                    Warning
                                </button>
                                <button
                                    style={{ backgroundColor: "#54B4D3" }}
                                    className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                                    onClick={(e) => setTheme("info")}
                                >
                                    Info
                                </button>
                            </MDBCol>
                        </MDBCard>
                        <MDBCard className="p-2 mt-3">
                            <MDBCol>
                                <p className="lead fw-normal heading2 p-2 mb-2">Custom options : </p>
                                <MDBCard className="p-2 mt-3">
                                    <MDBCol>
                                        <p className="lead fw-normal heading2 p-2 mb-2">Pink Palette : </p>
                                        <button style={{ backgroundColor: '#f08080' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink1')}>#1</button>
                                        <button style={{ backgroundColor: '#F4978E' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink2')}>#2</button>
                                        <button style={{ backgroundColor: '#F8AD9D' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink3')}>#3</button>
                                        <button style={{ backgroundColor: '#FBC4AB' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink4')}>#4</button>
                                        <button style={{ backgroundColor: '#FFDAB9' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('pink5')}>#5</button>
                                    </MDBCol>
                                    <MDBCol>
                                        <p className="lead fw-normal heading2 p-2 mb-2">Yellow Palette : </p>
                                        <button style={{ backgroundColor: '#fdb833' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow1')}>#1</button>
                                        <button style={{ backgroundColor: '#fdc43f' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow2')}>#2</button>
                                        <button style={{ backgroundColor: '#ffda3d' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow3')}>#3</button>
                                        <button style={{ backgroundColor: '#ffe94e' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow4')}>#4</button>
                                        <button style={{ backgroundColor: '#fff75e' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('yellow5')}>#5</button>
                                    </MDBCol>
                                    <MDBCol>
                                        <p className="lead fw-normal heading2 p-2 mb-2">Blue Palette : </p>
                                        <button style={{ backgroundColor: '#03045e' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('blue1')}>#1</button>
                                        <button style={{ backgroundColor: '#023e8a' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('blue2')}>#2</button>
                                        <button style={{ backgroundColor: '#0077b6' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('blue3')}>#3</button>
                                        <button style={{ backgroundColor: '#00b4d8' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('blue4')}>#4</button>
                                        <button style={{ backgroundColor: '#90e0ef' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('blue5')}>#5</button>
                                    </MDBCol>
                                    <MDBCol>
                                        <p className="lead fw-normal heading2 p-2 mb-2">Maroon Palette : </p>
                                        <button style={{ backgroundColor: '#641220' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('maroon1')}>#1</button>
                                        <button style={{ backgroundColor: '#85182A' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('maroon2')}>#2</button>
                                        <button style={{ backgroundColor: '#A71E34' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('maroon3')}>#3</button>
                                        <button style={{ backgroundColor: '#BD1F36' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('maroon4')}>#4</button>
                                        <button style={{ backgroundColor: '#DA1E37' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('maroon5')}>#5</button>
                                    </MDBCol>
                                    <MDBCol>
                                        <p className="lead fw-normal heading2 p-2 mb-2">Green Palette : </p>
                                        <button style={{ backgroundColor: '#1b4332' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('green1')}>#1</button>
                                        <button style={{ backgroundColor: '#2d6a4f' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('green2')}>#2</button>
                                        <button style={{ backgroundColor: '#40916c' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('green3')}>#3</button>
                                        <button style={{ backgroundColor: '#52b788' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('green4')}>#4</button>
                                        <button style={{ backgroundColor: '#74c69d' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('green5')}>#5</button>
                                    </MDBCol>
                                    <MDBCol>
                                        <p className="lead fw-normal heading2 p-2 mb-2">Brown Palette : </p>
                                        <button style={{ backgroundColor: '#7f5539' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('brown1')}>#1</button>
                                        <button style={{ backgroundColor: '#9c6644' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('brown2')}>#2</button>
                                        <button style={{ backgroundColor: '#b08968' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('brown3')}>#3</button>
                                        <button style={{ backgroundColor: '#ddb892' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('brown4')}>#4</button>
                                        <button style={{ backgroundColor: '#e6ccb2' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('brown5')}>#5</button>
                                    </MDBCol>
                                    <MDBCol>
                                        <p className="lead fw-normal heading2 p-2 mb-2">Purple Palette : </p>
                                        <button style={{ backgroundColor: '#10002b' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('purple1')}>#1</button>
                                        <button style={{ backgroundColor: '#240046' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('purple2')}>#2</button>
                                        <button style={{ backgroundColor: '#3c096c' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('purple3')}>#3</button>
                                        <button style={{ backgroundColor: '#5a189a' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('purple4')}>#4</button>
                                        <button style={{ backgroundColor: '#7b2cbf' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('purple5')}>#5</button>
                                        <button style={{ backgroundColor: '#9d4edd' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('purple6')}>#6</button>
                                        <button style={{ backgroundColor: '#c77dff' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('purple7')}>#8</button>
                                        <button style={{ backgroundColor: '#e0aaff' }} className="p-2 mb-2 md btn-rounded btn-outline-white text-white" onClick={e => setTheme('purple8')}>#5</button>
                                    </MDBCol>
                                </MDBCard>
                            </MDBCol>
                        </MDBCard>
                    </MDBRow>
                </ul>
            </div>
            <MDBContainer className="">
                <h3
                    className="display-4 fw-thin  text-center"
                    style={{ color: "#5f8b5f" }}
                >
                    My ToDo List
                </h3>
                <MDBCard className="mb-4" style={{ width: "100%" }}>
                    <MDBRow>
                        <MDBCol className="lg-4">
                            <MDBCard className="mb-4 mt-3 p-2">
                                <MDBCardBody className="text-center">
                                    <MDBInput
                                        label="ToDo Title"
                                        type="text"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && saveTodo()}
                                        className="form-control mb-2"
                                    />
                                </MDBCardBody>
                                <button
                                    className="btn2 btn-outline-primary"
                                    type="button"
                                    id=" "
                                    data-mdb-ripple-color="dark"
                                    onClick={saveTodo}
                                >
                                    Add
                                </button>
                            </MDBCard>
                        </MDBCol>
                        {/*Add ToDo*/}
                        <MDBCol className="lg-8">
                            <MDBCard className="mb-2 mt-4 p-2">
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                    />
                                    <label htmlFor="floatingInput">Your Todo Title</label>
                                </div>
                                <MDBCardBody className="text-center">
                                    <div class="input-group mb-2">
                                        <MDBInput
                                            type="text"
                                            className="form-control"
                                            id="todo"
                                            label="Enter Task"
                                        />
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                label="Date/Time"
                                                sx={{ width: "50%", height: "50%" }}
                                                onChange={(v) => { console.log(v.$d); }}
                                            />
                                        </LocalizationProvider>
                                        <button
                                            className="btn btn-outline-primary"
                                            type="button"
                                            id=" "
                                            data-mdb-ripple-color="dark"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                            {/*ToDo List*/}
                            <MDBCard className="mb-4 mt-3 p-2">
                                <MDBCardBody className="text-center">
                                    {
                                        todoList.map((todo) => (
                                            <div className="input-group mb-2">
                                                <input className="form-control" value={todo.title} />
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{new Date(todo.created_at).toLocaleDateString() + "  "}
                                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{new Date(todo.created_at).toLocaleTimeString()}
                                                <button className="btn btn-info">
                                                    {" "}
                                                    <i style={{ color: "white" }} class="fas fa-pen"></i>
                                                </button>
                                                <button className="btn btn-danger">
                                                    {" "}
                                                    <i style={{ color: "white" }} class="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        ))

                                    }

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
                                    <ul
                                        className="dropdown-menu w-100"
                                        aria-labelledby="dropdownMenuButton"
                                    >
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
    );
};
export default ToDo;
