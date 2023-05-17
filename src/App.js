import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import Subjects from "./Pages/Subjects/Subjects";
import Mentor from "./Pages/Mentor/Mentor";
import Navbar from "./Component/Navbar";
import Auth from "./Pages/Auth/Auth";
import MyClasses from "./Pages/MyClasses/MyClasses";
import AddSubject from "./Pages/Admin/AddSubject";
import RaisedRequest from "./Pages/Mentee/RaisedRequest";
import ScheduleClass from "./Pages/Mentor/ScheduleClass";
import History from "./Pages/Mentee/History";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const SignUpPage = location.pathname === "/signup";

  return (
    <React.Fragment>
      {isLoginPage || SignUpPage ? null : <Navbar />}

    
          <Sidebar>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/subjects" element={<Subjects />} />
              <Route exact path="/subject" element={<AddSubject />} />
              <Route exact path="/mentor" element={<Mentor />} />
              {/* <Route exact path="/auth" element={<Auth/>} /> */}
              <Route exact path="/myclasses" element={<MyClasses />} />
              <Route exact path="/raisedRequest" element={<RaisedRequest />} />
              <Route exact path="/scheduleClass" element={<ScheduleClass />} />
              <Route exact path="/history" element={<History />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
            {/* <Footer/> */}
          </Sidebar>
       
    </React.Fragment>
  );
}

export default App;
