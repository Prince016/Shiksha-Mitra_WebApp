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
function getUserDetails() {
  // Retrieve user email from local storage
  const userEmail = localStorage.getItem('email');

  // Construct the URL for the GET request
  const url = `http://localhost:9090/api/userDetails/${userEmail}`;
console.log(url);
  // Send the GET request
  axios.get(url)
    .then(response => {
      // Handle successful response
      const userDetails = response.data;
      console.log(userDetails);
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });
}

function AboutMeSection() {
  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const branch = 'Computer Science';
  const course = 'Bachelor of Technology';
  const year = '2023';
  const dob = 'January 1, 2000';
  const phone = '123-456-7890';
  const cgpa = '3.8';
  const profileImage="https://media.istockphoto.com/id/1139495117/photo/facing-my-future-with-confidence.jpg?s=612x612&w=0&k=20&c=mtC9fv2OKeoGR4eAxSgm3Laukw7EBYYbHVRrO5D88PY=";
    // Call the function to get user details
   


  // const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user email from localStorage
    const userEmail = localStorage.getItem('email');

    // Get cookies from document
    const cookies = document.cookie;
    console.log(cookies);

    // Make the GET request
    axios.get(`http://localhost:9090/api/userDetails/${userEmail}`, {
     headers: {
        Cookie: cookies, // Send cookies in the 'Cookie' header field
      },
    })
      .then(response => {
        // Extract user details from the response
        const { name, email, branch, course, year, dob, phone, cgpa, profilepic } = response.data;
        console.log(name);
        // Set the user state
        // setUser({
        //   name,
        //   email,
        //   branch,
        //   course,
        //   year,
        //   dob,
        //   phone,
        //   cgpa,
        //   profilepic,
        // });
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
      <img src={profileImage} alt="Profile" className="profile-image" />
      </div>

  
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Branch:</td>
            <td>{branch}</td>
          </tr>
          <tr>
            <td>Course:</td>
            <td>{course}</td>
          </tr>
          <tr>
            <td>Year:</td>
            <td>{year}</td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>{dob}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>CGPA:</td>
            <td>{cgpa}</td>
          </tr>
        </tbody>
      </table>
    </div></>
  );
}

export default AboutMeSection;
