import React from 'react'
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div className="containerr py-3">
      <div className="container py-3 d-flex align-items-center">
        <div
          className="card py-3 align-items-center"
          style={{ width: "200rem" }}
        >
          <h4 className="heading1">User Profile</h4>
          {/*Header*/}
          <div
            className="p-1 text-center bg-image"
            style={{
              backgroundImage: " ",
              height: 200,
              alt: "Header Image"
            }}
          >
            {/*Profile Image*/}
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
            className="rounded-circle"
            style={{ width: 180, height: 180 }}
            alt="Profile Image"
          />
          <Link className='btn btn2 mt-3' >Edit Profile</Link>
          <div
            className="card py-3 px-3 mt-3 align-items-center"
            style={{ width: "68rem", height: "10rem" }}
          >
            <h4 className="heading1">Description/Bio</h4>
          </div>
          {/*Reminders*/}
          <div
            className="card py-3 px-3 mt-1 align-items-center"
            style={{ width: "68rem", height: "7rem" }}
          >
            <h4 className="heading1">My Notifications</h4>
          </div>
          {/*Widgets*/}
          <div
            className="card py-3 px-3 mt-1 align-items-center"
            style={{ width: "68rem", height: "15rem" }}
          >
            <h4 className="heading1">Widgets</h4>
            {/*Calendar*/}
            {/*Clock*/}
            {/*Weather*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile