import React from 'react'
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import { FaRegHandPaper } from "react-icons/fa";
import "./RaisedRequestCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function RaiseMyRequest() {


     // const [val, setVal] = useState("");
  const data = [
    "Computer Networks",
    "Data Structures",
    "Discrete Mathematics",
    "Operating System",
    "MSBA",
    "DBMS",
    "TOC",
    "BEEE",
    "Vedic Mathematics",
    "Devops",
  ];
  
  const [subjectName, setSubjectName] = useState("");
  const [topic, setTopic] = useState("");
  // const [status, setTopic] = useState('false');
  const menteeEmailId = localStorage.getItem("email");
  const menteeName = "stud";
  const status = false;

  //handle to raise request
  const handleSubmit = async (e) => {
    e.preventDefault();
    const raiseReq = {
      subjectName,
      addTopic: topic,
      status,
      menteeEmailId,
      menteeName,
    };
    console.log(raiseReq);
    try {
      // Make the POST request using Axios
      const response = await axios.post(
        "http://localhost:9090/api/raiseRequests/addRaiseRequest",
        raiseReq
      );
      console.log(response.data); // Log the response data
      alert("Request Raised  Successfully !!")
      // Add any further actions or state updates here upon successful request
    } catch (error) {
      console.error(error); // Log any error that occurs during the request
      // Handle the error or show a relevant message to the user
    }
  };

  return (
    <div className="" style={{padding:"10px"}}>
    <div style={{margin:"auto"}}>
        {/* form section  */}
        <div
         style={{
           
         }}
       >
         <div className="card">
           <div className="card-body">
             <h5 className="card-title">Input Form</h5>
             <form onSubmit={handleSubmit}>
               <div className="form-group">
                 <label htmlFor="subjectName" className="form-label">
                   Subject Name
                   <FontAwesomeIcon
                     icon={faChevronDown}
                     className="dropdown-icon"
                   />
                 </label>
                 <select
                   id="subjectName"
                   className="form-control"
                   value={subjectName}
                   onChange={(e) => setSubjectName(e.target.value)}
                   placeholder="Select a subject"
                 >
                   <option value="">select valid option</option>
 
                   {data.map((s, i) => (
                     <option value={s}>{s}</option>
                   ))}
                 </select>
               </div>
               <div className="form-group">
                 <label htmlFor="topic" className="form-label">
                   Topic
                 </label>
                 <input
                   type="text"
                   id="topic"
                   className="form-control"
                   value={topic}
                   onChange={(e) => setTopic(e.target.value)}
                 />
               </div>
               <button type="submit" className="btn btn-primary">
                 Raise Request
               </button>
             </form>
           </div>
         </div>
       </div>
       {/* endFormsection //  */}

    </div>
     </div>
  )
}

export default RaiseMyRequest