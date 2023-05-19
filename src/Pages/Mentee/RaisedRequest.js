import { TypeSpecimenOutlined } from "@mui/icons-material";
import { InputLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React, { useState, useEffect } from "react";
import "./RasisedRequest.css";
import { FaRegHandPaper } from "react-icons/fa";
import "./RaisedRequestCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./RequestCards.css"; // Import the custom CSS file
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RaisedRequest = () => {
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
  // const onChange = (e) => {
  //   setVal(e.target.value);
  // };

  // const onSearch = (subject) => {
  //   console.log("search", subject);
  //   setVal(subject);
  // };

  // const [status, setTopic] = useState('false');
  const menteeEmailId = localStorage.getItem("email");

  //handle to generate card and delet
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const generateCards = async () => {
      try {
        // Fetch data from the GET API using Axios
        const response = await axios.get(
          `http://localhost:9090/api/raiseRequests/getRaisedRequestByEmail/${menteeEmailId}`
        );

        setRequests(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        // Handle the error or show a relevant message to the user
      }
    };

    generateCards();
  }, []);

  const handleCancelRequest = async (requestID) => {
    try {
      // Make the DELETE request using Axios
      await axios.delete(
        `http://localhost:9090/api/raiseRequests/deleteRaiseRequest/${requestID}`
      );

      // Perform any additional actions upon successful cancellation
      console.log("deleted succefully");
    } catch (error) {
      console.error(error);
      // Handle the error or show a relevant message to the user
    }
  };

  return (
    <div className="" style={{ padding: "10px" }}>
      <div style={{ margin: "auto" }}>
        {/* cards section  */}
        <div
          className="ms-12"
          style={{
            marginTop: "15px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="request-cards">
            {requests.map((request) => (
              <div key={request.raiseRequestID} className="request-card">
                <div className="card-header">
                  <FontAwesomeIcon
                    icon={faHandPaper}
                    className="raised-hand-icon"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Subject</b>: {request.subjectName}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      marginTop: "4px",
                      fontSize: "13px",
                      float: "center",
                    }}
                  >
                    {" "}
                    Request ID: {request.raiseRequestID}
                  </p>
                  <p className="card-text">
                    <b>Topics</b>: {request.addTopic}
                  </p>
                  <p className="card-text">
                    <b>Status</b> :{" "}
                    {request.status ? "Pending" : "Scheduled check MYCLASSES"}
                  </p>
                  {request.status ? (
                    <button
                      className="btn btn-danger cancel-button"
                      onClick={() =>
                        handleCancelRequest(request.raiseRequestID)
                      }
                    >
                      Cancel Request
                    </button>
                  ) : (
                    <Link to="/myclasses">
                      <button className="btn btn-primary cancel-button">
                        Check Schedule
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* end cards section  */}
      </div>
    </div>
  );
};

export default RaisedRequest;

// import { TypeSpecimenOutlined } from "@mui/icons-material";
// import { InputLabel, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import { Button } from "@mui/material";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import React, { useState } from "react";
// import "./RasisedRequest.css";
// import { FaRegHandPaper } from "react-icons/fa";

// const RaisedRequest = () => {
//   const [val, setVal] = useState("");
//   const data = [
//     "Computer Networks",
//     "Data Structures",
//     "Discrete Mathematics",
//     "Operating System",
//     "MSBA",
//     "DBMS",
//     "TOC",
//     "BEEE",
//     "Vedic Mathematics",
//     "Devops",
//   ];
//   const onChange = (e) => {
//     setVal(e.target.value);
//   };

//   const onSearch = (subject) => {
//     console.log("search", subject);
//     setVal(subject);
//   };

//   return (
//     <div>
//       {" "}
//       <div>
//         <Box
//           maxWidth={600}
//           display={"flex"}
//           flexDirection={"column"}
//           // alignItems="center"
//           // justifyContent={"center"}
//           boxShadow="10px 10px 20px #acc"
//           padding={3}
//           margin="auto"
//           marginTop={5}
//           borderRadius={5}
//         >
//           <Typography variant="h5" padding={3} textAlign="center" sx={{}}>
//             Creating the Request for the Mentor
//           </Typography>

//           <div className="sub-name-sec">
//             <div>
//               <InputLabel>SubjectName</InputLabel>
//             </div>
//             <div className="search-container">
//               <input
//                 className="subject_name"
//                 type="text"
//                 value={val}
//                 onChange={onChange}
//               />
//               <Button
//                 sx={{
//                   borderRadius: 3,
//                   marginLeft: "1px",
//                   height: "36px",
//                   width: "22px",
//                 }}
//                 variant="contained"
//                 color="success"
//                 onClick={() => onSearch(val)}
//               >
//                 Search
//               </Button>
//             </div>
//           </div>

//           <div>
//             <div className="dropdown">
//               {data
//                 .filter((item) => {
//                   const subject = val.toLowerCase();
//                   const SubjectName = item.toLowerCase();

//                   return (
//                     subject &&
//                     SubjectName.startsWith(subject) &&
//                     SubjectName !== subject
//                   );
//                 })
//                 .slice(0, 5)
//                 .map((item) => (
//                   <div
//                     onClick={() => onSearch(item)}
//                     className="dropdown-row"
//                     key={item}
//                   >
//                     {item}
//                   </div>
//                 ))}
//             </div>
//           </div>

//           <div className="topic-sec">
//             <div>
//               <InputLabel sx={{ marginRight: "56px" }}> Add Topic </InputLabel>
//             </div>
//             {/* <textarea className="topic-text" type="text" /> */}
//             <div>
//               <textarea name="topic-text" rows="2" cols="30" />
//             </div>
//           </div>

//           <div className="addRequest_btn">
//             <Button
//               // onClick={}
//               variant="contained"
//               sx={{ borderRadius: 3, marginTop: 4  }}
//               color="primary"
//             >
//               Add Request
//             </Button>
//           </div>
//         </Box>
//       </div>
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
//                   Rasied Request{" "}
//                   <span style={{ marginLeft: "15px" }}>
//                     <FaRegHandPaper />
//                   </span>
//                 </Typography>
//                 <Typography sx={{ mb: 1 }}>Subject - DBMS</Typography>
//                 <Typography sx={{ mb: 1 }}>
//                   Topic - this is the topic
//                 </Typography>
//                 <div className="status">
//                   <h4>
//                     {" "}
//                     Status : <span className="pending"> Pending </span>
//                   </h4>
//                 </div>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default RaisedRequest;
