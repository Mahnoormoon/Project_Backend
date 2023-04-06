import React, { useEffect, useState } from "react";
import app_config from "../../config";
import "./theme.css";

const Reminders = () => {
  const [theme, setTheme] = useState("light");
  const [reminderList, setReminderList] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.apiurl;

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

  const getTodos = async (cb) => {
    const response = await fetch(url + "/todo/getbyuser/" + currentUser._id);
    const data = await response.json();
    console.log(data);
    cb(data.result);
  };

  const addToReminders = (todoData) => {
    let tasks = [];
    todoData.forEach((todo) => (tasks = [...tasks, ...todo.task]));
    console.log(tasks);
    const today = new Date().toISOString().slice(0, 10);
    console.log(today);
    setReminderList(tasks.filter((task) => task.date === today));
  };

  useEffect(() => {
    getTodos((data) => addToReminders(data));
  }, []);

  const getHourDifference = (targetTime) => {
    const now = new Date();
    const [hours, minutes] = targetTime.split(":");

    const targetDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes
    );

    const diffInMs = targetDate - now; // calculate the difference between the two dates in milliseconds
    const diffInHours = diffInMs / (1000 * 60 * 60); // convert milliseconds to hours

    if (diffInHours <= 0) {
      return <p className="text-danger">Overdue</p>;
    }
    else if (diffInHours < 0.5 && diffInHours > 0) {
      return <p className="text-warning">Due in half an hour</p>;
    }
    else if (diffInHours > 0.5) {
      return (
        <p className="text-primary">{`Due in about ${Math.ceil(diffInHours)} hours`}</p>
      );
    }else{
        return <p className="text-info">Invalid Time</p>;
    }
  };

  const showReminders = () => {
    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th className="h5">Title</th>
            <th className="h5">Time</th>
          </tr>
        </thead>
        <tbody>
          {reminderList.map((reminder) => (
            <tr>
              <td>
                <i class="fas fa-bell"></i>
              </td>
              <td className="fw-bold">{reminder.title}</td>
              <td className="fw-bold">{reminder.time}</td>
              <td className="fw-bold">{getHourDifference(reminder.time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <div className="card">
        <div className="card-header" style={{ backgroundColor: themeData[theme].bg }}>
          <p className="h4 m-0 text-white">Today's Tasks Reminder</p>
        </div>
        <div className="card-body">{showReminders()}</div>
      </div>
    </div>
  );
};

export default Reminders;
