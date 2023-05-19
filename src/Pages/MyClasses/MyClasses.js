import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScheduleCard from "./ScheduleCard";

function MyClasses() {
  const scheduleData = [
    {
      tutorName: "John Doe",
      topic: "Introduction to React",
      dateTime: "May 20, 2023 | 10:00 AM",
      classLink: "https://example.com/class-link-1",
    },
    {
      tutorName: "Jane Smith",
      topic: "CSS Fundamentals",
      dateTime: "May 22, 2023 | 2:00 PM",
      classLink: "https://example.com/class-link-2",
    },
    {
      tutorName: "Jane Smith",
      topic: "CSS Fundamentals",
      dateTime: "May 22, 2023 | 2:00 PM",
      classLink: "https://example.com/class-link-2",
    },
    {
      tutorName: "Jane Smith",
      topic: "CSS Fundamentals",
      dateTime: "May 22, 2023 | 2:00 PM",
      classLink: "https://example.com/class-link-2",
    },
    // Add more schedule items as needed
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API and set the data state
    axios.get('http://localhost:9090/ClassSchedule/get')
      .then(response => {
        setData(response.data);
        console.log(response.data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <>
      <div className="schedule-grid" style={{ width: "50%" , marginLeft:"auto" ,marginRight:"auto"}}>
        {data.map((data, index) => (
          <ScheduleCard
            key={index}
            tutorName={data.peerTutor}
            topic={data.topicName}
            dateTime={data.dateTime}
            classLink="Room 22"
          />
        ))}
      </div>
    </>
  );
}

export default MyClasses;

// import React from "react";
// import "./myClasses.css";
// import mentor_img from "../../Images/HeroJap.jpg";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// const MyclassNamees = () => {
//   const bull = (
//     <Box
//       component="span"
//       sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//     >
//       •
//     </Box>
//   );
//   return (
//     <>
//       <div className="card_align">
//         {/* <div>
//           <Card sx={{ maxWidth: 300 }}>
//             <CardContent>
//               <Typography
//                 sx={{
//                   fontSize: 20,
//                   fontWeight: "bold",
//                   textAlign: "center",
//                   marginBottom: "15px",
//                 }}
//                 color="text.primary "
//                 gutterBottom
//               >
//                 Class Details
//               </Typography>
//               <Typography sx={{ mb: 1 }}>Name - Rohan</Typography>
//               <Typography sx={{ mb: 1 }}>Roll No - 20CSU114</Typography>
//               <Typography sx={{ mb: 1 }}>Time - 2:00 PM</Typography>
//               <Typography sx={{ mb: 1 }}>Date - 13/01/2000</Typography>
//               <Typography>Day - Monday</Typography>
//               <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//             </CardContent>
//             <CardActions sx={{ display: "flex", alignItems: "stretch" }}>
//               <Button size="small">Class Link</Button>
//               <Button size="small">Room No- 23</Button>
//             </CardActions>
//           </Card>
//         </div> */}

//         <div class="flip-card">
//           <div class="flip-card-inner">
//             <div class="flip-card-front">
//               <img src={mentor_img} alt="Avatar" />
//             </div>
//             <div class="flip-card-back">
//               <Card sx={{ maxWidth: 300 }}>
//                 <CardContent>
//                   <Typography
//                     sx={{
//                       fontSize: 20,
//                       fontWeight: "bold",
//                       textAlign: "center",
//                       marginBottom: "15px",
//                     }}
//                     color="text.primary "
//                     gutterBottom
//                   >
//                     Class Details
//                   </Typography>
//                   <Typography sx={{ mb: 1 }}>Name - Rohan</Typography>
//                   <Typography sx={{ mb: 1 }}>Roll No - 20CSU114</Typography>
//                   <Typography sx={{ mb: 1 }}>Time - 2:00 PM</Typography>
//                   <Typography sx={{ mb: 1 }}>Date - 13/01/2000</Typography>
//                   <Typography>Day - Monday</Typography>
//                 </CardContent>
//                 <CardActions sx={{ display: "flex", alignItems: "stretch" }}>
//                   <Button size="small">Class Link</Button>
//                   <Button size="small">Room No- 23</Button>
//                 </CardActions>
//               </Card>
//             </div>
//           </div>
//         </div>

//         <div class="flip-card">
//           <div class="flip-card-inner">
//             <div class="flip-card-front">
//               <img src={mentor_img} alt="Avatar" />
//             </div>
//             <div class="flip-card-back">
//               <Card sx={{ maxWidth: 300 }}>
//                 <CardContent>
//                   <Typography
//                     sx={{
//                       fontSize: 20,
//                       fontWeight: "bold",
//                       textAlign: "center",
//                       marginBottom: "15px",
//                     }}
//                     color="text.primary "
//                     gutterBottom
//                   >
//                     Class Details
//                   </Typography>
//                   <Typography sx={{ mb: 1 }}>Name - Rohan</Typography>
//                   <Typography sx={{ mb: 1 }}>Roll No - 20CSU114</Typography>
//                   <Typography sx={{ mb: 1 }}>Time - 2:00 PM</Typography>
//                   <Typography sx={{ mb: 1 }}>Date - 13/01/2000</Typography>
//                   <Typography>Day - Monday</Typography>
//                 </CardContent>
//                 <CardActions sx={{ display: "flex", alignItems: "stretch" }}>
//                   <Button size="small">Class Link</Button>
//                   <Button size="small">Room No- 23</Button>
//                 </CardActions>
//               </Card>
//             </div>
//           </div>
//         </div>

//         <div class="flip-card">
//           <div class="flip-card-inner">
//             <div class="flip-card-front">
//               <img src={mentor_img} alt="Avatar" />
//             </div>
//             <div class="flip-card-back">
//               <Card sx={{ maxWidth: 300 }}>
//                 <CardContent>
//                   <Typography
//                     sx={{
//                       fontSize: 20,
//                       fontWeight: "bold",
//                       textAlign: "center",
//                       marginBottom: "15px",
//                     }}
//                     color="text.primary "
//                     gutterBottom
//                   >
//                     Class Details
//                   </Typography>
//                   <Typography sx={{ mb: 1 }}>Name - Rohan</Typography>
//                   <Typography sx={{ mb: 1 }}>Roll No - 20CSU114</Typography>
//                   <Typography sx={{ mb: 1 }}>Time - 2:00 PM</Typography>
//                   <Typography sx={{ mb: 1 }}>Date - 13/01/2000</Typography>
//                   <Typography>Day - Monday</Typography>
//                 </CardContent>
//                 <CardActions sx={{ display: "flex", alignItems: "stretch" }}>
//                   <Button size="small">Class Link</Button>
//                   <Button size="small">Room No- 23</Button>
//                 </CardActions>
//               </Card>
//             </div>
//           </div>
//         </div>

//         <div class="flip-card">
//           <div class="flip-card-inner">
//             <div class="flip-card-front">
//               <img src={mentor_img} alt="Avatar" />
//             </div>
//             <div class="flip-card-back">
//               <Card sx={{ maxWidth: 300 }}>
//                 <CardContent>
//                   <Typography
//                     sx={{
//                       fontSize: 20,
//                       fontWeight: "bold",
//                       textAlign: "center",
//                       marginBottom: "15px",
//                     }}
//                     color="text.primary "
//                     gutterBottom
//                   >
//                     Class Details
//                   </Typography>
//                   <Typography sx={{ mb: 1 }}>Name - Rohan</Typography>
//                   <Typography sx={{ mb: 1 }}>Roll No - 20CSU114</Typography>
//                   <Typography sx={{ mb: 1 }}>Time - 2:00 PM</Typography>
//                   <Typography sx={{ mb: 1 }}>Date - 13/01/2000</Typography>
//                   <Typography>Day - Monday</Typography>
//                 </CardContent>
//                 <CardActions sx={{ display: "flex", alignItems: "stretch" }}>
//                   <Button size="small">Class Link</Button>
//                   <Button size="small">Room No- 23</Button>
//                 </CardActions>
//               </Card>
//             </div>
//           </div>
//         </div>

//         <div class="flip-card">
//           <div class="flip-card-inner">
//             <div class="flip-card-front">
//               <img src={mentor_img} alt="Avatar" />
//             </div>
//             <div class="flip-card-back">
//               <Card sx={{ maxWidth: 300 }}>
//                 <CardContent>
//                   <Typography
//                     sx={{
//                       fontSize: 20,
//                       fontWeight: "bold",
//                       textAlign: "center",
//                       marginBottom: "15px",
//                     }}
//                     color="text.primary "
//                     gutterBottom
//                   >
//                     Class Details
//                   </Typography>
//                   <Typography sx={{ mb: 1 }}>Name - Rohan</Typography>
//                   <Typography sx={{ mb: 1 }}>Roll No - 20CSU114</Typography>
//                   <Typography sx={{ mb: 1 }}>Time - 2:00 PM</Typography>
//                   <Typography sx={{ mb: 1 }}>Date - 13/01/2000</Typography>
//                   <Typography>Day - Monday</Typography>
//                 </CardContent>
//                 <CardActions sx={{ display: "flex", alignItems: "stretch" }}>
//                   <Button size="small">Class Link</Button>
//                   <Button size="small">Room No- 23</Button>
//                 </CardActions>
//               </Card>
//             </div>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default MyclassNamees;
