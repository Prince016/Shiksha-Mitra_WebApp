import {
  Button,
  Card,
  CardActions,
  CardContent,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ImCross } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import "./ScheduleClass.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Button from '@mui/material/Button';

const ScheduleClass = () => {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
  const OpenModal = () => {};
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <h2 id="child-modal-title">Class Sehudule</h2>
          <InputLabel>Day</InputLabel>
          <TextField
          name="Day"
        
          type="text"
          placeholder="Day"
          margin="normal"
        />
          <InputLabel>Date</InputLabel>
          <TextField
          name="name"
        
          type="date"
          placeholder="Date"
          margin="normal"
        />
          <InputLabel>Class Link</InputLabel>
          <TextField
          name="name"
        
          type="text"
          placeholder="Link"
          margin="normal"
        />
          <InputLabel>Time</InputLabel>
          <TextField
          name="name"
        
          type="text"
          placeholder="Time
          
          
          "
          margin="normal"
        />
        <br />
        <Button >Schudule A Meeting</Button>
        <br />
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>

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
                  Request{" "}
                  <span style={{ marginLeft: "15px", color: "red" }}>
                    <CloseIcon />
                  </span>
                </Typography>
                <Typography sx={{ mb: 1 }}>Subject - DBMS</Typography>
                <Typography sx={{ mb: 1 }}>
                  Topic - this is the topic
                </Typography>
              </CardContent>

              <div className="sch-btn-contents">
                <div className="status">
                  <h4>
                    {" "}
                    Status : <span className="pending"> Pending </span>
                  </h4>
                </div>
                <div className="sch-btn">
                  <Button
                    sx={{ borderRadius: "17px" }}
                    variant="contained"
                    size="small"
                    onClick={handleOpen}
                  >
                    Schedule{" "}
                  </Button>
                </div>
              </div>
              {/* </CardActions> */}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleClass;
