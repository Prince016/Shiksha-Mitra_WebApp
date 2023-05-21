import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ScheduleClass.css";

const ScheduleClass = () => {
  const [classRequests, setClassRequests] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState();
  const [inputDate, setinputDate] = useState("");
  const [scheduleForm, setScheduleForm] = useState({
    classId: "",
    peerTutor: "",
    schoolName: "",
    topicName: "",
    topicContext: "",
    dateTime: "",
    duration: "",
  });
  const emailMentor=localStorage.getItem('email');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9090/api/raiseRequests/getRaiseRequest"
      );
      setClassRequests(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = (classId) => {
    // Handle reject logic
    classRequests = classRequests.filter((item) => item.classId !== classId);
  };

  // const handleSchedule = (id) => {
  //   // setSelectedClass(classData);
  //   var m= classRequests.filter((item) => item.classId === id);
  //   console.log(m);
  //   console.log(inputDate);
  // };
  const handleSchedule = (cardId, inputValue) => {
    // Make POST request with specific card's data and input value
    const card = classRequests.find((card) => card.raiseRequestID === cardId);
    console.log(inputValue);
    // const [day, time] = inputValue.split("T");
    var getDatetime =localStorage.getItem('dateTime');
    console.log(card);
    const req = {
      classId: cardId,
      peerTutor: emailMentor,
      schoolName: "",
      topicName: card.subjectName,
      topicContext: card.addTopic,
      dateTime: getDatetime,
      duration: 30,
    };
    console.log("req", req);
    axios
      .post("http://localhost:9090/ClassSchedule/save", req)
      .then((response) => {
        console.log("0948585757474747", response.data);
        //set status true
        // Make PUT request to update the status
        axios
          .put(
            `http://localhost:9090/api/raiseRequests/updateRaiseRequestById/${cardId}?status=true`,
            
          )
          .then((response) => {
            console.log("status update", response.data);
            alert("ClassScheduled Successfully !!")
            // setData(updatedData);
          })
          .catch((error) => {
            console.error(error);
          });

        //endputreq
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleScheduleFormSubmit = () => {
    // Handle schedule form submission
    // Remove the selectedClass from the classRequests array
    setShowModal(false);
    setSelectedClass(null);
  };
  const handleInputChange = (cardId, value) => {
    localStorage.setItem("dateTime",value);
    const updatedCards = classRequests.map((card) => {
      if (card.raiseRequestID === cardId) {
        return { ...card, inputValue: value };
      }
      return card;
    });
    setClassRequests(updatedCards);
  };

  return (
    <div className="card-container">
      <div>
        {classRequests.map((classData, i) => (
          <div key={classData.raiseRequestID} className="class-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p>Subject Name: {classData.subjectName}</p>
                <p>Add Topic: {classData.addTopic}</p>
                <p>Status: {classData.status ? "Scheduled" : "Pending"}</p>
                <p>Mentee Email ID: {classData.menteeEmailId}</p>
                <p>Mentee Name: {classData.menteeName}</p>
                <button onClick={() => handleReject(classData.classId)}>
                  Reject <i className="fas fa-times"></i>
                </button>
              </div>
              <div>
                <input
                  className="schedule-btn"
                  type="datetime-local"
                  id="scheduletime"
                  name="scheduletime"
                  value={classData.inputValue}
                  style={{
                    border: "none",
                    borderRadius: "5px",
                    width: "100%",
                    textAlign: "bottom",
                  }}
                  onChange={(e) =>
                    handleInputChange(classData.classId, e.target.value)
                  }
                />
                <button
                  className="schedule-btn"
                  onClick={() =>
                    handleSchedule(
                      classData.raiseRequestID,
                      classData.inputValue
                    )
                  }
                >
                  Schedule Class
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleClass;

// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   InputLabel,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import { ImCross } from "react-icons/fa";
// import CloseIcon from "@mui/icons-material/Close";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// // import Button from '@mui/material/Button';

// const ScheduleClass = () => {

//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 800,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
//   };

//   const OpenModal = () => {};
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 600 }}>
//           <h2 id="child-modal-title">Class Sehudule</h2>
//           <InputLabel>Day</InputLabel>
//           <TextField
//           name="Day"

//           type="text"
//           placeholder="Day"
//           margin="normal"
//         />
//           <InputLabel>Date</InputLabel>
//           <TextField
//           name="name"

//           type="date"
//           placeholder="Date"
//           margin="normal"
//         />
//           <InputLabel>Class Link</InputLabel>
//           <TextField
//           name="name"

//           type="text"
//           placeholder="Link"
//           margin="normal"
//         />
//           <InputLabel>Time</InputLabel>
//           <TextField
//           name="name"

//           type="text"
//           placeholder="Time

//           "
//           margin="normal"
//         />
//         <br />
//         <Button >Schudule A Meeting</Button>
//         <br />
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>

//       <div
//         className="request-card"
//         style={{ margin: "27px", marginTop: "44px" }}
//       >
//         {Array.from(Array(3), (e, i) => {
//           return (
//             <Card key={i + 1} sx={{ maxWidth: 300 }}>
//               <CardContent>
//                 <Typography
//                   sx={{
//                     fontSize: 20,
//                     fontWeight: "bold",
//                     textAlign: "center",
//                     marginBottom: "15px",
//                   }}
//                   color="text.primary "
//                   gutterBottom
//                 >
//                   Request{" "}
//                   <span style={{ marginLeft: "15px", color: "red" }}>
//                     <CloseIcon />
//                   </span>
//                 </Typography>
//                 <Typography sx={{ mb: 1 }}>Subject - DBMS</Typography>
//                 <Typography sx={{ mb: 1 }}>
//                   Topic - this is the topic
//                 </Typography>
//               </CardContent>

//               <div className="sch-btn-contents">
//                 <div className="status">
//                   <h4>
//                     {" "}
//                     Status : <span className="pending"> Pending </span>
//                   </h4>
//                 </div>
//                 <div className="sch-btn">
//                   <Button
//                     sx={{ borderRadius: "17px" }}
//                     variant="contained"
//                     size="small"
//                     onClick={handleOpen}
//                   >
//                     Schedule{" "}
//                   </Button>
//                 </div>
//               </div>
//               {/* </CardActions> */}
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ScheduleClass;
