import React, { useEffect, useState } from "react";
import app_config from "../../config";

const Reminders = () => {
  const [reminderList, setReminderList] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.apiurl;

  const getTodos = async (cb) => {
    const response = await fetch(url + "/todo/getbyuser/" + currentUser._id);
    const data = await response.json();
    console.log(data);
    // setReminderList(data.result);
    cb(data.result);
  };

  const addToReminders = (todoData) => {
    let tasks = [];
    todoData.forEach((todo) => (tasks = [...tasks, ...todo.task]));
    console.log(tasks);
    const today = new Date().toISOString().slice(0, 10);
    console.log(today);
    setReminderList(tasks.filter((task) => task.date === today));
    // tasks array is already sorted by date and time
    // tasks.sort((a, b) => {
    //     const dateA = new Date(`${a.date}T${a.time}`);
    //     const dateB = new Date(`${b.date}T${b.time}`);
    //     return dateA - dateB;
    //   });

    //   console.log(tasks);
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
        <div className="card-header bg-danger">
          <p className="h4 m-0 text-white">Today's Tasks Reminder</p>
        </div>
        <div className="card-body">{showReminders()}</div>
      </div>
    </div>
  );
};

export default Reminders;
