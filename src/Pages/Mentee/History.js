import React from 'react';
import './history.css'; // Import the CSS file for styling
import  { useState, useEffect } from "react";
import axios from "axios";

function History() {
  // const historyData = [
  //   {
  //     topic: 'React Hooks',
  //     tutor: 'John Doe',
  //     date: 'May 1, 2023',
  //     status: 'Done',
  //     mentor: 'Mentor A',
  //     resourceLink: 'https://drive.google.com/xxxxx',
  //   },
  //   {
  //     topic: 'CSS Flexbox',
  //     tutor: 'Jane Smith',
  //     date: 'May 5, 2023',
  //     status: 'Cancelled',
  //     mentor: 'Mentor B',
  //     resourceLink: 'https://drive.google.com/yyyyy',
  //   },
  //   // Add more history items as needed
  // ];
  const [historyData, setData] = useState([]);
  const currentDate = new Date();
  
  var data_arr=[
    "2023-01-02",
    "2023-01-03",
    "2023-01-04",
    "2023-01-05",
    "2023-01-06",
    "2023-01-07",
    "2023-01-02",
    "2023-01-02",
    "2023-01-02",
    "2023-01-02",
    "2023-01-02",
    "2023-01-02",
    "2023-01-02",

];

  useEffect(() => {
    fetchData();
    // handleFilter();
    // handleDateFiltering();
    
  }, [data_arr]);
  console.log("insid eth euseeffect -----",historyData);
  // debugger
  const email= localStorage.getItem('email');
  const url =`http://localhost:9090/api/raiseRequests/getRaisedRequestByEmail/${email}`;
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      var d=response.data;
      console.log("fetchhistory======",d);
      const requests = d.map(async (o) => {
        const subResponse = await axios.get(`http://localhost:9090/ClassSchedule/getById/${o.raiseRequestID}`);
        const details = subResponse.data;

        // Append the details to the corresponding object
        const updatedObject = {
          ...o,
          peerTutor: details.peerTutor,
          dateTime: details.dateTime

        };
        console.log("updatedObject",updatedObject);
        // data_arr.push(updatedObject.dateTime);
        // historyData.push(updatedObject);
        
        return updatedObject;
      });

      
      // const updatedData = await Promise.all(requests);
      // const updatedData =requests ;
      // setData(updatedData);
      console.log("=========hisotrty data ==========",historyData);


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 const handleFilter = () => {
    // // filterRaised request whose is "true"
    // const filteredItems = historyData.filter(item => item.status === true);
    // setData(filteredItems);
    // console.log(historyData);
     // Filter the data array to include only objects with a date previous to the current date and status true
  const filteredData = historyData.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate < currentDate && item.status;
  });

  setData(filteredData);
  console.log("****************************");

  };
 
   console.log("this is the datae array ",data_arr);

  return (
    <div className="history-table-container" style={{padding:"20px",paddingTop:"80px"}}>
    <table className="history-table">
      <thead>
        <tr>
          <th className="header-cell">S.no</th>
          <th className="header-cell">Class Details</th>
          <th className="header-cell">Date</th>
          <th className="header-cell">Mentor/Mentee Name</th>
          <th className="header-cell">Resource Link</th>
        </tr>
      </thead>
      <tbody>
        {historyData.map((history, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td style={{padding:"6px"}}>
              <p><b>Subject</b>: {history.subjectName}</p>
              <p><b>Topic</b>: {history.addTopic}</p>
            </td>
            <td>
              {/* <p><b>Date</b>: {history.dateTime}</p> */}
              <p><b>Date</b>: {data_arr[index]}</p>
            </td>
            <td>jsmj11@gmail.com</td>
            <td>
              <a href="" target="_blank" rel="noopener noreferrer">
                Google Drive Link
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default History;







// import React from "react";
// import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./history.css";

// const History = () => {
//   return (
//     <div className="history-table">
//       {/* <Table  striped bordered hover size="sm">
//         <thead  >
//           <tr>
//             <th>#</th>
//             <th>Class Details</th>
//             <th>Mentor/Mentee</th>
//             <th>Resources Link</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>
//               <div>
//                 <p>
//                   <b> Subject :</b> <span>Computer Networks</span>
//                 </p>
//                 <p>
//                   <b> Topic :</b> <span>Computer Networks</span>
//                 </p>
//                 <p>
//                   <b> Day : </b> <span>Monday</span>
//                 </p>
//                 <p>
//                   <b> Time :</b> <span> 2:30 - 3:30 PM </span>
//                 </p>
//                 <p>
//                   <b> Status :</b> <span> Done </span>
//                 </p>
//               </div>
//             </td>
//             <td>Otto</td>
//             <td>
//               {" "}
//               <p>
//                 {" "}
//                 <Link target="_blank" to="https://www.google.co.in/">
//                   {" "}
//                   Materials{" "}
//                 </Link>{" "}
//               </p>
//             </td>
//           </tr>
        
          
//         </tbody>
//       </Table> */}

//       <table id="customers">
//         <tr>
//           <th>S.NO</th>
//           <th>Class Details</th>
//           <th>Mentor/Mentee</th>
//           <th>Resources Link</th>
//         </tr>

//         <tr>
//           <td className="countCell"></td>
//           <td>
//             <table id="classDetail-table">
//               <tr>
//                 {/* <th  style={{backgroundColor:"transparent", color:"black"}}> Subject </th> */}
//                 <th>
//                   <b> Subject </b>
//                 </th>
//                 <th>:</th>
//                 <th>Computer Networks</th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Topic </b>
//                 </th>
//                 <th>:</th>
//                 <th> this is topic</th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Day </b>
//                 </th>
//                 <th>:</th>
//                 <th> Monday </th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Time </b>
//                 </th>
//                 <th>:</th>
//                 <th> 2:30 - 3:30 PM </th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Status </b>
//                 </th>
//                 <th>:</th>
//                 <th> Done </th>
//               </tr>
//             </table>

            
//           </td>
//           <td>Rahul</td>
//           <td>
//             {" "}
//             <p>
//               {" "}
//               <Link target="_blank" to="https://www.google.co.in/">
//                 {" "}
//                 Materials{" "}
//               </Link>{" "}
//             </p>
//           </td>
//         </tr>
//         <tr>
//           <td className="countCell"></td>
//           <td>
//             <table id="classDetail-table">
//               <tr>
//                 {/* <th  style={{backgroundColor:"transparent", color:"black"}}> Subject </th> */}
//                 <th>
//                   <b> Subject </b>
//                 </th>
//                 <th>:</th>
//                 <th>Computer Networks</th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Topic </b>
//                 </th>
//                 <th>:</th>
//                 <th> this is topic</th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Day </b>
//                 </th>
//                 <th>:</th>
//                 <th> Monday </th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Time </b>
//                 </th>
//                 <th>:</th>
//                 <th> 2:30 - 3:30 PM </th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Status </b>
//                 </th>
//                 <th>:</th>
//                 <th> Done </th>
//               </tr>
//             </table>

            
//           </td>
//           <td>Rahul</td>
//           <td>
//             {" "}
//             <p>
//               {" "}
//               <Link target="_blank" to="https://www.google.co.in/">
//                 {" "}
//                 Materials{" "}
//               </Link>{" "}
//             </p>
//           </td>
//         </tr>
//         <tr>
//           <td className="countCell"></td>
//           <td>
//             <table id="classDetail-table">
//               <tr>
//                 {/* <th  style={{backgroundColor:"transparent", color:"black"}}> Subject </th> */}
//                 <th>
//                   <b> Subject </b>
//                 </th>
//                 <th>:</th>
//                 <th>Computer Networks</th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Topic </b>
//                 </th>
//                 <th>:</th>
//                 <th> this is topic</th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Day </b>
//                 </th>
//                 <th>:</th>
//                 <th> Monday </th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Time </b>
//                 </th>
//                 <th>:</th>
//                 <th> 2:30 - 3:30 PM </th>
//               </tr>
//               <tr>
//                 <th>
//                   <b> Status </b>
//                 </th>
//                 <th>:</th>
//                 <th> Done </th>
//               </tr>
//             </table>

            
//           </td>
//           <td>Rahul</td>
//           <td>
//             {" "}
//             <p>
//               {" "}
//               <Link target="_blank" to="https://www.google.co.in/">
//                 {" "}
//                 Materials{" "}
//               </Link>{" "}
//             </p>
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// };

// export default History;

