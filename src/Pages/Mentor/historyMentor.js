import React from 'react';
import './historyMentor.css'; // Import the CSS file for styling
import  { useState, useEffect } from "react";
import axios from "axios";

function History() {
//   const historyData = [
//     {
//       topic: 'React Hooks',
//       tutor: 'John Doe',
//       date: 'May 1, 2023',
//       status: 'Done',
//       mentor: 'Mentor A',
//       resourceLink: 'https://drive.google.com/xxxxx',
//     },
//     {
//       topic: 'CSS Flexbox',
//       tutor: 'Jane Smith',
//       date: 'May 5, 2023',
//       status: 'Cancelled',
//       mentor: 'Mentor B',
//       resourceLink: 'https://drive.google.com/yyyyy',
//     },
//     // Add more history items as needed
//   ];

  const [historyData, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const email= localStorage.getItem('email');
  const url =`http://localhost:9090/ClassSchedule/getAllClassScheduleByPeerTutor/${email}`;
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log("fetchMentorhistory",historyData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
   <div>
     <div className="history-table-container" style={{padding:"20px",paddingTop:"80px"}}>
    <h6 style={{color:"#022D6A",display:"flex"}}>Class History of {email}</h6>
    <table className="history-table">
      <thead>
        <tr>
          <th className="header-cell">S.no</th>
          <th className="header-cell">Class Details</th>
          <th className="header-cell">DateTime</th>
          <th className="header-cell">Resource Link</th>
        </tr>
      </thead>
      <tbody>
        {historyData.map((history, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td style={{padding:"6px"}}>
              <p><b>ClassID</b>:{history.classId}</p>
              <p><b>Topic</b>: {history.topicName}</p>
              <p><b>Topics</b>: {history.topicContext}</p>
              
            </td>
            <td>
            <p><b>Date</b>: {history.dateTime}</p>
            </td>
            
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

