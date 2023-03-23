import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Services from "./components/main/Services";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";
import AdminProfile from "./components/admin/AdminProfile";
import NotFound from "./components/NotFound";
import UserProvider from "./context/UserProvider";
import AdminProvider from "./context/AdminProvider";
import { useState } from "react";

import AddMusic from "./components/admin/AddMusic";
import AddStudyMethods from "./components/admin/AddStudyMethods";
import MusicListing from "./components/main/MusicListing";
import ProfileForm from "./components/main/ProfileForm";
import ManageUser from "./components/admin/ManageUser";
import ManageToDo from "./components/admin/ManageToDo";
import ManageStudyMethods from "./components/admin/ManageStudyMethods";
import ManageMusic from "./components/admin/ManageMusic";
import ManageReminder from "./components/admin/ManageReminder";
import ManageContact from "./components/admin/ManageContact";
import UserAuth from "./auth/UserAuth";
import AdminAuth from "./auth/AdminAuth";
import ListStudyMethods from "./components/main/ListStudyMethods";
import StudyMethodPage from "./components/main/StudyMethodPage";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <BrowserRouter>
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route
              element={
                <AdminAuth>
                  <Admin />
                </AdminAuth>
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
              <Route element={<Login />} path="login" />
              <Route element={<Signup />} path="signup" />
              <Route element={<ManageUser />} path="manageuser" />
              <Route element={<ManageToDo />} path="managetodo" />
              <Route element={<ManageStudyMethods />} path="managestudymethods" />
              <Route element={<ManageMusic />} path="managemusic" />
              <Route element={<ManageReminder />} path="managereminder" />
              <Route element={<ManageContact />} path="managecontact" />
              <Route element={<AddMusic />} path="addmusic" />
              <Route element={<AddStudyMethods />} path="addstudymethods" />
            </Route>

            <Route element={<Main />} path="main">

              <Route element={<Home />} path="home" />
              <Route element={<About />} path="aboutus" />
              <Route element={<Contact />} path="contact" />
              <Route element={<Services />} path="services" />
              <Route element={<Login />} path="login" />
              <Route element={<Signup />} path="signup" />
              <Route element={<MusicListing />} path="musiclisting/:id" />
              <Route element={<ListStudyMethods />} path="studylisting/:id" />
              <Route element={<StudyMethodPage />} path="studymethod/:id" />
              <Route element={<ProfileForm />} path="profileform/:id" />
            </Route>

            <Route
              element={
                <UserAuth>
                  <User />
                </UserAuth>
              }
              path="user"
            >
              <Route path="profile" element={<UserProfile />} />
              <Route path="profileform" element={<ProfileForm />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
