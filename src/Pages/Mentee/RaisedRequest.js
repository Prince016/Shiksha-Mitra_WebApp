import { TypeSpecimenOutlined } from "@mui/icons-material";
import { InputLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";
import "./RasisedRequest.css";
import { FaRegHandPaper } from "react-icons/fa";


const RaisedRequest = () => {
  const [val, setVal] = useState("");
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
  const onChange = (e) => {
    setVal(e.target.value);
  };

  const onSearch = (subject) => {
    console.log("search", subject);
    setVal(subject);
  };

  return (
    <div>
      {" "}
      <div>
        <Box
          maxWidth={600}
          display={"flex"}
          flexDirection={"column"}
          // alignItems="center"
          // justifyContent={"center"}
          boxShadow="10px 10px 20px #acc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h5" padding={3} textAlign="center" sx={{}}>
            Creating the Request for the Mentor
          </Typography>

          <div className="sub-name-sec">
            <div>
              <InputLabel>SubjectName</InputLabel>
            </div>
            <div className="search-container">
              <input
                className="subject_name"
                type="text"
                value={val}
                onChange={onChange}
              />
              <Button
                sx={{
                  borderRadius: 3,
                  marginLeft: "1px",
                  height: "36px",
                  width: "22px",
                }}
                variant="contained"
                color="success"
                onClick={() => onSearch(val)}
              >
                Search
              </Button>
            </div>
          </div>

          <div>
            <div className="dropdown">
              {data
                .filter((item) => {
                  const subject = val.toLowerCase();
                  const SubjectName = item.toLowerCase();

                  return (
                    subject &&
                    SubjectName.startsWith(subject) &&
                    SubjectName !== subject
                  );
                })
                .slice(0, 5)
                .map((item) => (
                  <div
                    onClick={() => onSearch(item)}
                    className="dropdown-row"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>

          <div className="topic-sec">
            <div>
              <InputLabel sx={{ marginRight: "56px" }}> Add Topic </InputLabel>
            </div>
            {/* <textarea className="topic-text" type="text" /> */}
            <div>
              <textarea name="topic-text" rows="2" cols="30" />
            </div>
          </div>

          <div className="addRequest_btn">
            <Button
              // onClick={}
              variant="contained"
              sx={{ borderRadius: 3, marginTop: 4  }}
              color="primary"
            >
              Add Request
            </Button>
          </div>
        </Box>
      </div>
      <div
        className="request-card"
        style={{ margin: "27px", marginTop: "44px" }}
      >
        {Array.from(Array(3), (e, i) => {
          return (
            <Card key={i + 1} sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                  color="text.primary "
                  gutterBottom
                >
                  Rasied Request{" "}
                  <span style={{ marginLeft: "15px" }}>
                    <FaRegHandPaper />
                  </span>
                </Typography>
                <Typography sx={{ mb: 1 }}>Subject - DBMS</Typography>
                <Typography sx={{ mb: 1 }}>
                  Topic - this is the topic
                </Typography>
                <div className="status">
                  <h4>
                    {" "}
                    Status : <span className="pending"> Pending </span>
                  </h4>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RaisedRequest;
