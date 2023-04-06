import React, { useEffect, useState } from "react";
import "./theme.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import app_config from "../../config";
import { Formik, useFormik } from "formik";
const ToDo = () => {
  const [theme, setTheme] = useState("light");
  const [selTask, setSelTask] = useState(null);

  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const url = app_config.apiurl;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [selTodo, setSelTodo] = useState(null);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState(null);
  const [taskTime, setTaskTime] = useState(null);

  const [search, setSearch] = useState('');
  const [dateSearch, setDateSearch] = useState('');

  const fetchTodo = async (cb1) => {
    const res = await fetch(url + "/todo/getall");
    const data1 = await res.json();
    console.log(data1);
    setTodoList(data1.result);
    cb1(data1.result);
    // const data2 = await res.json();
    // console.log(data2);
    // setTodoList(data2.result);
    // cb1(data1.result);
    // cb2(data2.result);
  };

  const saveTodo = async () => {
    if (text) {
      const res = await fetch(url + "/todo/add", {
        method: "POST",
        body: JSON.stringify({
          title: text,
          task: [],
          user: currentUser._id,
          created_at: new Date(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 201) {
        await fetchTodo((list) => {
          setSelTodo(list.length - 1);
        });
      }
      setText("");
    }
  };

  const addTask = async (id, task) => {
    const res = await fetch(url + "/todo/addtask/" + id, {
      method: "PUT",
      body: JSON.stringify({
        task: task,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    if (res.status === 200) {
      await fetchTodo((list) => {
  
      });
    }
    setTaskTitle("");
  };

  const removeTask = async (id, taskindex) => {
    let taskToUpdate = todoList[selTodo].task;
    taskToUpdate.splice(taskindex, 1);
    const res = await fetch(url + "/todo/update/" + id, {
      method: "PUT",
      body: JSON.stringify({
        task: taskToUpdate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    if (res.status === 200) {
      await fetchTodo((list) => {});
    }
  };

  const removeAllTask = async (id) => {
    const res = await fetch(url + "/todo/update/" + id, {
      method: "PUT",
      body: JSON.stringify({
        task: [],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    if (res.status === 200) {
      await fetchTodo((list) => {});
    }
  };

  useEffect(() => {
    fetchTodo(() => {});
  }, []);

  const themeData = {
    light: {
      btn:  "btn-light",
      bg: "#74b4748e",
      text: "#375e37",
      textColor: " #375e37",
    },
    dark: {
      btn: "light",
      bg: "#222",
      text: "light",
      textColor: "black",
    },
    primary: {
      btn: "primary",
      bg: "primary",
      text: "primary",
      textColor: "grey",
    },
    secondary: {
      btn: "secondary",
      bg: "#3B71CA",
      text: "secondary",
      textColor: "white",
    },
    success: {
      btn: "success",
      bg: "#14A44D",
      text: "success",
      textColor: "white",
    },
    danger: {
      btn: "danger",
      bg: "#DC4C64",
      text: "danger",
      textColor: "white",
    },
    warning: {
      btn: "warning",
      bg: "#E4A11B",
      text: "warning",
      textColor: "white",
    },
    info: {
      btn: "info",
      bg: "#54B4D3",
      text: "info",
      textColor: "black",
    },
    pink1: {
      btn: "btn-pink-1",
      bg: "#F08080",
      text: "#F08080",
      textColor: "white",
    },
    pink2: {
      btn: "btn-pink-2",
      bg: "#F4978E",
      text: "#F4978E",
      textColor: "white",
    },
    pink3: {
      btn: "btn-pink-3",
      bg: "#F8AD9D",
      text: "#F8AD9D",
      textColor: "white",
    },
    pink4: {
      btn: "btn-pink-4",
      bg: "#FBC4AB",
      text: "#FBC4AB",
      textColor: "white",
    },
    pink5: {
      btn: "btn-pink-5",
      bg: "#FFDAB9",
      text: "#FFDAB9",
      textColor: "white",
    },
    yellow1: {
      btn: "btn-yellow-1",
      bg: "#fdb833",
      text: "#fdb833",
      textColor: "white",
    },
    yellow2: {
      btn: "btn-yellow-2",
      bg: "#fdc43f",
      text: "#fdc43f",
      textColor: "white",
    },
    yellow3: {
      btn: "btn-yellow-3",
      bg: "#ffda3d",
      text: "#ffda3d",
      textColor: "white",
    },
    yellow4: {
      btn: "btn-yellow-4",
      bg: "#ffe94e",
      text: "#ffe94e",
      textColor: "white",
    },
    yellow5: {
      btn: "btn-yellow-5",
      bg: "#fff75e",
      text: "#fff75e",
      textColor: "white",
    },
    blue1: {
      btn: "btn-blue-1",
      bg: "#03045e",
      text: "#03045e",
      textColor: "white",
    },
    blue2: {
      btn: "btn-blue-2",
      bg: "#023e8a",
      text: "#023e8a",
      textColor: "white",
    },
    blue3: {
      btn: "btn-blue-3",
      bg: "#0077b6",
      text: "#0077b6",
      textColor: "white",
    },
    blue4: {
      btn: "btn-blue-4",
      bg: "#00b4d8",
      text: "#00b4d8",
      textColor: "white",
    },
    blue5: {
      btn: "btn-blue-5",
      bg: "#90e0ef",
      text: "#90e0ef",
      textColor: "white",
    },
    maroon1: {
      btn: "btn-maroon-1",
      bg: "#641220",
      text: "#641220",
      textColor: "white",
    },
    maroon2: {
      btn: "btn-maroon-2",
      bg: "#85182A",
      text: "#85182A",
      textColor: "white",
    },
    maroon3: {
      btn: "btn-maroon-3",
      bg: "#A71E34",
      text: "#A71E34",
      textColor: "white",
    },
    maroon4: {
      btn: "btn-maroon-4",
      bg: "#BD1F36",
      text: "#BD1F36",
      textColor: "white",
    },
    maroon5: {
      btn: "btn-maroon-5",
      bg: "#DA1E37",
      text: "#DA1E37",
      textColor: "white",
    },
    green1: {
      btn: "btn-green-1",
      bg: "#1b4332",
      text: "#1b4332",
      textColor: "white",
    },
    green2: {
      btn: "btn-green-2",
      bg: "#2d6a4f",
      text: "#2d6a4f",
      textColor: "white",
    },
    green3: {
      btn: "btn-green-3",
      bg: "#40916c",
      text: "#40916c",
      textColor: "white",
    },
    green4: {
      btn: "btn-green-4",
      bg: "#52b788",
      text: "#52b788",
      textColor: "white",
    },
    green5: {
      btn: "btn-green-5",
      bg: "#74c69d",
      text: "#74c69d",
      textColor: "white",
    },
    brown1: {
      btn: "btn-brown-1",
      bg: "#7f5539",
      text: "#7f5539",
      textColor: "white",
    },
    brown2: {
      btn: "btn-brown-2",
      bg: "#9c6644",
      text: "#9c6644",
      textColor: "white",
    },
    brown3: {
      btn: "btn-brown-3",
      bg: "#b08968",
      text: "#b08968",
      textColor: "white",
    },
    brown4: {
      btn: "btn-brown-4",
      bg: "#ddb892",
      text: "#ddb892",
      textColor: "white",
    },
    brown5: {
      btn: "btn-brown-5",
      bg: "#e6ccb2",
      text: "#e6ccb2",
      textColor: "white",
    },
    purple1: {
      btn: "btn-purple-1",
      bg: "#7b2cbf",
      text: "#7b2cbf",
      textColor: "white",
    },
    purple2: {
      btn: "btn-purple-2",
      bg: "#735D78",
      text: "#735D78",
      textColor: "white",
    },
    purple3: {
      btn: "btn-purple-3",
      bg: "#B392AC",
      text: "#B392AC",
      textColor: "white",
    },
    purple4: {
      btn: "btn-purple-4",
      bg: "#D1B3C4",
      text: "#D1B3C4",
      textColor: "#D1B3C4",
    },
    purple5: {
      btn: "btn-purple-5",
      bg: "#E8C2CA",
      text: "#E8C2CA",
      textColor: "white",
    },
  };

  const makeSearch1 = (val) => {
    fetchTodo((data1) => {
      setTodoList(data1.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase())))
    })
  }

  const makeSearch2 = (val) => {
    fetchTodo((data2) => {
      setTodoList(data2.filter(todo => todo.created_at.getDay(dateSearch)))
    })
  }

  const taskUpdate = async (data) => {
      let temp = todoList[selTodo].task;
      temp[selTask] = data;
    const res = await fetch(url + "/todo/update/" + todoList[selTodo]._id, {
        method: "PUT",
        body: JSON.stringify({
          task: temp,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 200) {
        await fetchTodo((list) => {});
      }
  };

  return (
    <section style={{ backgroundColor: themeData[theme].bg }}>
      <div className="container-md dropdown r-90 mt-4 mb-2 p-6">
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
                <p className="lead fw-normal heading2 p-2 mb-2">
                  Custom options :{" "}
                </p>
                <MDBCard className="p-2 mt-3">
                  <MDBCol>
                    <p className="lead fw-normal heading2 p-2 mb-2">
                      Pink Palette :{" "}
                    </p>
                    <button
                      style={{ backgroundColor: "#f08080" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("pink1")}
                    >
                      #1
                    </button>
                    <button
                      style={{ backgroundColor: "#F4978E" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("pink2")}
                    >
                      #2
                    </button>
                    <button
                      style={{ backgroundColor: "#F8AD9D" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("pink3")}
                    >
                      #3
                    </button>
                    <button
                      style={{ backgroundColor: "#FBC4AB" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("pink4")}
                    >
                      #4
                    </button>
                    <button
                      style={{ backgroundColor: "#FFDAB9" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("pink5")}
                    >
                      #5
                    </button>
                  </MDBCol>
                  <MDBCol>
                    <p className="lead fw-normal heading2 p-2 mb-2">
                      Yellow Palette :{" "}
                    </p>
                    <button
                      style={{ backgroundColor: "#fdb833" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("yellow1")}
                    >
                      #1
                    </button>
                    <button
                      style={{ backgroundColor: "#fdc43f" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("yellow2")}
                    >
                      #2
                    </button>
                    <button
                      style={{ backgroundColor: "#ffda3d" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("yellow3")}
                    >
                      #3
                    </button>
                    <button
                      style={{ backgroundColor: "#ffe94e" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("yellow4")}
                    >
                      #4
                    </button>
                    <button
                      style={{ backgroundColor: "#fff75e" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("yellow5")}
                    >
                      #5
                    </button>
                  </MDBCol>
                  <MDBCol>
                    <p className="lead fw-normal heading2 p-2 mb-2">
                      Blue Palette :{" "}
                    </p>
                    <button
                      style={{ backgroundColor: "#03045e" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("blue1")}
                    >
                      #1
                    </button>
                    <button
                      style={{ backgroundColor: "#023e8a" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("blue2")}
                    >
                      #2
                    </button>
                    <button
                      style={{ backgroundColor: "#0077b6" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("blue3")}
                    >
                      #3
                    </button>
                    <button
                      style={{ backgroundColor: "#00b4d8" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("blue4")}
                    >
                      #4
                    </button>
                    <button
                      style={{ backgroundColor: "#90e0ef" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("blue5")}
                    >
                      #5
                    </button>
                  </MDBCol>
                  <MDBCol>
                    <p className="lead fw-normal heading2 p-2 mb-2">
                      Maroon Palette :{" "}
                    </p>
                    <button
                      style={{ backgroundColor: "#641220" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("maroon1")}
                    >
                      #1
                    </button>
                    <button
                      style={{ backgroundColor: "#85182A" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("maroon2")}
                    >
                      #2
                    </button>
                    <button
                      style={{ backgroundColor: "#A71E34" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("maroon3")}
                    >
                      #3
                    </button>
                    <button
                      style={{ backgroundColor: "#BD1F36" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("maroon4")}
                    >
                      #4
                    </button>
                    <button
                      style={{ backgroundColor: "#DA1E37" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("maroon5")}
                    >
                      #5
                    </button>
                  </MDBCol>
                  <MDBCol>
                    <p className="lead fw-normal heading2 p-2 mb-2">
                      Green Palette :{" "}
                    </p>
                    <button
                      style={{ backgroundColor: "#1b4332" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("green1")}
                    >
                      #1
                    </button>
                    <button
                      style={{ backgroundColor: "#2d6a4f" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("green2")}
                    >
                      #2
                    </button>
                    <button
                      style={{ backgroundColor: "#40916c" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("green3")}
                    >
                      #3
                    </button>
                    <button
                      style={{ backgroundColor: "#52b788" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("green4")}
                    >
                      #4
                    </button>
                    <button
                      style={{ backgroundColor: "#74c69d" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("green5")}
                    >
                      #5
                    </button>
                  </MDBCol>
                  <MDBCol>
                    <p className="lead fw-normal heading2 p-2 mb-2">
                      Brown Palette :{" "}
                    </p>
                    <button
                      style={{ backgroundColor: "#7f5539" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("brown1")}
                    >
                      #1
                    </button>
                    <button
                      style={{ backgroundColor: "#9c6644" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("brown2")}
                    >
                      #2
                    </button>
                    <button
                      style={{ backgroundColor: "#b08968" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("brown3")}
                    >
                      #3
                    </button>
                    <button
                      style={{ backgroundColor: "#ddb892" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("brown4")}
                    >
                      #4
                    </button>
                    <button
                      style={{ backgroundColor: "#e6ccb2" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("brown5")}
                    >
                      #5
                    </button>
                  </MDBCol>
                  <MDBCol>
                    <p className="lead fw-normal heading2 p-2 mb-2">
                      Purple Palette :{" "}
                    </p>
                    <button
                      style={{ backgroundColor: "#7b2cbf" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("purple1")}
                    >
                      #1
                    </button>
                    <button
                      style={{ backgroundColor: "#735D78" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("purple2")}
                    >
                      #2
                    </button>
                    <button
                      style={{ backgroundColor: "#B392AC" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("purple3")}
                    >
                      #3
                    </button>
                    <button
                      style={{ backgroundColor: "#D1B3C4" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("purple4")}
                    >
                      #4
                    </button>
                    <button
                      style={{ backgroundColor: "#E8C2CA" }}
                      className="p-2 mb-2 md btn-rounded btn-outline-white text-white"
                      onClick={(e) => setTheme("purple5")}
                    >
                      #5
                    </button>
                  </MDBCol>
                </MDBCard>
              </MDBCol>
            </MDBCard>
          </MDBRow>
        </ul>
      </div>
      <MDBContainer className="">
        <h3
          className="display-4 fw-thin text-center mb-4"
          style={{ color: themeData[theme].textColor }}
        >
          My ToDo List
        </h3>
        <MDBCard className="mb-4 p-4" style={{ width: "100%" }}>
          <MDBRow>
            <MDBCol className="lg-4">
              <MDBCard className="mb-4 mt-2 p-2" style={{ backgroundColor: themeData[theme].bg }}>
                <MDBCardBody className="text-center">
                  <MDBInput
                    label="ToDo Title"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && saveTodo()}
                    className="form-control mb-2 text-white"
                  />
                </MDBCardBody>
                <button
                  className={"my-btn " + themeData[theme].btn}
                  type="button"
                  id=" "
                  data-mdb-ripple-color="dark"
                  onClick={saveTodo}
                >
                  Add
                </button>
              </MDBCard>
              <MDBCard className="mb-4 mt-3 p-2" style={{ backgroundColor: themeData[theme].bg }}>
                <MDBCardBody className="text-center">
                  <input onChange={e => setSearch(e.target.value)} value={search} placeholder="search by title" />
                  &nbsp;&nbsp;&nbsp;<button
                            className="btn btn-warning"
                            onClick={makeSearch1}
                          >
                            
                            <i
                              style={{ color: "white" }}
                              class="fas fa-search"
                            ></i>
                          </button>
                          <br></br>
                          <input onChange={e => setDateSearch(e.target.value)} value={dateSearch} placeholder="search by date" />
                  &nbsp;&nbsp;&nbsp;<button
                            className="btn btn-warning mt-1"
                            onClick={makeSearch2}
                          >
      
                            <i
                              style={{ color: "white" }}
                              class="fas fa-search"
                            ></i>
                          </button>
                  <ul className="list-group list-group-light mt-3">
                    {todoList.map((todo, index) => (
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <div>
                          <div
                            className="fw-bold"
                            style={{ color: themeData[theme].textColor }}
                          >
                            {todo.title}
                          </div>
                          <div
                            className="text-muted"
                            style={{ color: themeData[theme].textColor }}
                          >
                            {new Date(todo.created_at).toLocaleDateString()}
                          </div>
                        </div>
                        <button 
                          className={"my-btn " + themeData[theme].btn}
                          onClick={() => setSelTodo(index)}
                        >
                          View
                        </button>
                      </li>
                    ))}
                  </ul>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            {/*Add ToDo*/}
            <MDBCol className="lg-8">
              {selTodo !== null && (
                <>
                  <MDBCard className="mb-2 mt-4 p-2" style={{ backgroundColor: themeData[theme].bg }}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        value={todoList[selTodo].title}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ color: themeData[theme].textColor }}
                      >
                        Your ToDo Title
                      </label>
                    </div>
                    <MDBCardBody className="text-center">
                      <div class="input-group mb-2">
                        <MDBInput
                          type="text"
                          className="form-control text-white"
                          id="todo"
                          value={taskTitle}
                          onChange={(e) => setTaskTitle(e.target.value)}
                          label="Enter Task"
                        />
                          <MDBInput
                            placeholder="Date"
                            type="date"
                            className="form-control text-white"
                            onChange={(e) => {
                              setTaskDate(e.target.value);
                            }}
                          />
                          <MDBInput
                            placeholder="Time"
                            type="time"
                            className="form-control text-white"
                            onChange={(e) => {
                              setTaskTime(e.target.value);
                            }}
                          />
                        {/* </LocalizationProvider> */}
                        <button
                          className={"my-btn " + themeData[theme].btn}
                          type="button"
                          id=" "
                          data-mdb-ripple-color="dark"
                          onClick={(e) => {
                            addTask(todoList[selTodo]._id, {
                              title: taskTitle,
                              date: taskDate,
                              time: taskTime,
                            });
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                  {/*ToDo List*/}
                  <MDBCard className="mb-4 mt-3 p-2" style={{ backgroundColor: themeData[theme].bg }}>
                    <MDBCardBody className="text-center">
                      {todoList[selTodo].task.map((task, index) => (
                        <div className="input-group mb-2">
                          <input className="form-control" value={task.title} />
                          &nbsp;&nbsp;&nbsp;
                          <p className="text-white">{task.date}</p>
                          &nbsp;&nbsp;&nbsp;
                          <p className="text-white">{task.time}</p>
                          &nbsp;&nbsp;&nbsp;
                          <>
                            {/* Button trigger modal */}
                            <button
                              type="button"
                              className="btn btn-info"
                              data-mdb-toggle="modal"
                              data-mdb-target="#mymodal"
                              onClick={(e) => {
                                setSelTask(index);
                            }}
                            >
                              <i
                                style={{ color: "white" }}
                                class="fas fa-edit"
                              ></i>
                            </button>
                            {/* Modal */}
                            <div
                              className="modal fade"
                              id="mymodal"
                              tabIndex={-1}
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content" style={{ backgroundColor: themeData[theme].bg }}>
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title text-white"
                                      id="exampleModalLabel"
                                    >
                                      Edit {todoList[selTodo].title}
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-mdb-dismiss="modal"
                                      aria-label="Close"
                                    />
                                  </div>
                                  {selTask !== null && (
                                    <div className="modal-body">
                                      <Formik
                                        initialValues={
                                          todoList[selTodo].task[selTask]
                                        }
                                        onSubmit={taskUpdate}
                                      >
                                        {({
                                          values,
                                          handleSubmit,
                                          handleChange,
                                        }) => (
                                          <form onSubmit={handleSubmit}>
                                            <input
                                              onChange={handleChange}
                                              value={values.title}
                                              id="title"
                                              className="form-control"
                                              placeholder="title"
                                            />
                                            <input
                                              onChange={handleChange}
                                              value={values.date}
                                              id="date"
                                              type="date"
                                              className="form-control"
                                            />
                                            <input
                                              onChange={handleChange}
                                              value={values.time}
                                              id="time"
                                              type="time"
                                              className="form-control"
                                            />
                                            <div className="modal-footer justify-content-center align-items-center">
                                            <button className={"my-btn " + themeData[theme].btn} type="submit" data-mdb-dismiss="modal">
                                              Click to Save Changes
                                            </button>
                                            </div>
                                          </form>
                                        )}
                                      </Formik>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              removeTask(todoList[selTodo]._id, index);
                            }}
                          >
                            {" "}
                            <i
                              style={{ color: "white" }}
                              class="fas fa-trash"
                            ></i>
                          </button>
                        </div>
                      ))}
                      <div>
                        <button
                          className={"my-btn " + themeData[theme].btn}
                          type="button"
                          id=" "
                          data-mdb-ripple-color="dark"
                          onClick={(e) => removeAllTask(todoList[selTodo]._id)}
                        >
                          Delete All ?
                        </button>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </>
              )}
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </section>
  );
};
export default ToDo;
