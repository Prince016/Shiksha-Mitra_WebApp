import React, { useState } from "react";
import user from "./images/user.jpg";
import Image from "react-bootstrap/Image";
import "./user.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaShoppingBag,
  FaAccusoft,
  FaSignOutAlt,
} from "react-icons/fa";
// import { BiMessageAltError } from 'react-icons/fa';
import { TfiAlert } from "react-icons/tfi";
// 
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const authrole = localStorage.getItem("role");
 
  const email = localStorage.getItem("email");
  const condition1 = authrole === "1"; //mentor
  const condition2 = authrole === "2"; //mentee
  const menuItemForMentee = [
    {
      path: "/home",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/aboutme",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/myclasses",
      name: "Upcoming Classes",
      icon: <FaAccusoft />,
    },

    {
      path: "/history",
      name: "History",
      icon: <FaShoppingBag />,
    },
    {
      path: "/raiseMyRequest",
      name: "RaiseMyRequest",
      icon: <FaShoppingBag />,
    },
    {
      path: "/raisedRequest",
      name: "RaisedRequest",
      icon: <FaShoppingBag />,
    },
  ];

  const menuItemForMentor = [
    {
      path: "/home",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/aboutme",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/myclasses",
      name: "Upcoming Classes",
      icon: <FaAccusoft />,
    },
    {
      path: "/mentorhistory",
      name: "History",
      icon: <FaShoppingBag />,
    },
   
    {
      path: "/scheduleClass",
      name: "ScheduleClass",
      icon: <FaShoppingBag />,
    },
    
  ];

  return (
    <div className="">
      <div
        style={{
          position: "relative",
          width: isOpen ? "250px" : "50px",
          height: "1000px",
          transition: "width 1s, height 1s",

          // background: "linear-gradient( #ff6b08 ,  #eedd44)",
          background: "#022D6A",
        }}
        className="sidebar"
      >
        <div>
          <div>
            <div className="top_section">
              <div
                style={{ marginLeft: isOpen ? "50px" : "0px" }}
                className="bars"
              >
                <FaBars onClick={toggle} />
              </div>
            </div>
            {authrole ? (
        <div style={{ display: isOpen ? "block" : "none"}}>
          {/* // personal section in side bar  */}
          <div>
            <div style={{ display: isOpen ? "none" : "block", height: "90px" }}>

            </div>
           <div
              style={{ display: isOpen ? "block" : "none", lineHeight: "38px" }}
            >
              <div className="user_image">
                <Image
                  className="user_img"
                  roundedCircle="true"
                  // src={user}
                  src="https://rb.gy/9z0d7"
                  width="160"
                  alt="user"
                />
              </div>
              <div className="user_name">
                <p className="bold">{email}</p>
                <p className="normal">{condition1?"( mentor )":"( mentee )"}</p>
                
               
              </div>
            </div>
            </div>

          {/* // */}
        </div>
      ):null}
           

          </div>
         
        </div>

        {condition2 ? (
          <div>
            {menuItemForMentee.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassname="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        ) : condition1 ? (
          <div>
            {menuItemForMentor.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassname="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        ) : (
          <div style={{height:"700px" }}>   
          <div style={{display: isOpen ? "none" : "block", padding:"auto",marginLeft:"auto",marginRight:"auto"}}>  <div className="warningicon"><TfiAlert /></div></div>
          {/* <div style={{display: isOpen ? "none" : "block", padding:"auto",marginLeft:"auto",marginRight:"auto"}}>  <div className="warningicon"><TfiAlert onClick={toggle}/></div> */}
          <div style={{display: isOpen ? "block" : "none", padding:"10px"}}>Please Login First/ Invalid User</div>
          </div>
        )}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
