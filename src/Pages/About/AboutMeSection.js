import React from 'react';
import { useEffect, useState } from 'react';
import './AboutMeSection.css'; // Import custom CSS file
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import axios from 'axios';

// function getUserDetails() {
//   // Retrieve user email from local storage
//   const userEmail = localStorage.getItem('email');

//   // Construct the URL for the GET request
//   const url = `http://localhost:9090/api/userDetails/${userEmail}`;
// console.log(url);
//   // Send the GET request
//   axios.get(url)
//     .then(response => {
//       // Handle successful response
//       const userDetails = response.data;
//       console.log(userDetails);
//        setUser(res);
//     })
//     .catch(error => {
//       // Handle error
//       console.error(error);
//     });
// }

function AboutMeSection() {
  // const name = 'John Doe';
  // const email = 'johndoe@example.com';
  // const branch = 'Computer Science';
  // const course = 'Bachelor of Technology';
  // const year = '2023';
  // const dob = 'January 1, 2000';
  // const phone = '123-456-7890';
  // const cgpa = '3.8';
  // const profileImage="https://media.istockphoto.com/id/1139495117/photo/facing-my-future-with-confidence.jpg?s=612x612&w=0&k=20&c=mtC9fv2OKeoGR4eAxSgm3Laukw7EBYYbHVRrO5D88PY=";
    // Call the function to get user details
   
  const [user, setUser] = useState({});
  var role =localStorage.getItem('role');
  
  if(role=='1'){
    role='Mentor'
  }else{
    role='Mentor'
  }
 
  useEffect(() => {
    console.log("effect");
    // Get user email from localStorage
    const userEmail = localStorage.getItem('email');
    
    // const cook = localStorage.getItem('cookies');
    // const Bearer =`Bearer ${cook}`;
    // // const reqHeader=.concat(" ",cook);
    // // console.log(reqHeader);
    // const config = {
    //   headers:{
    //     Cookie: "jwtCookieName=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYXN0aGFAZ21haWwuY29tIiwiaWF0IjoxNjg0NDI3ODk0LCJleHAiOjE2ODQ1MTQyOTR9.0Dqy5qz1c6pFglH7P41JlQ4uPJNDpJDrUOiOYFgyS5WonQ8DFCxghLW3veUEcS6CEUhV55oVq-dYFe47eVM4Jw",
    //   }
    // };
    
    // Make the GET request
    axios.get(`http://localhost:9090/api/userDetails/${userEmail}`)
      .then(response => {
        // Extract user details from the response
        // const { name, emailId, branch, course, year, dob, phone, cgpa, profilepic } = response.data;
        const res = response.data;

        // console.log(name);
        console.log("res=",res);
        // Set the user state
        setUser(res);
       
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []);





  return (
  <>
    <div className="about-me-section">
      <div className='topsection d-flex justify-content-between'>
      <h1 className='align-text-bottom mt-3'>About Me</h1>
      <img src={user.profilePic} alt="Profile" className="profile-image" />
      </div>

  
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            {user.name===null ? <td></td>:<td>{user.name}</td>}
            
          </tr>
          <tr>
            <td>Email:</td>
            <td>{user.emailId}</td>
          </tr>
          <tr>
            <td>Branch:</td>
            <td>{user.branch}</td>
          </tr>
          <tr>
            <td>Course:</td>
            <td>{user.course}</td>
          </tr>
          <tr>
            <td>Year:</td>
            <td>{user.year}</td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>{user.dob}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>CGPA:</td>
            <td>{user.cgpa}</td>
          </tr>
          <tr>
            <td>AccountRole:</td>
            <td>{role}</td>
          </tr>
        </tbody>
      </table>
    </div></>
  );
}

export default AboutMeSection;
