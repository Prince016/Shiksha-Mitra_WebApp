import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { ImCross } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import './ScheduleClass.css'

const ScheduleClass = () => {
  return (
    <div>
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
                  <Button sx={{borderRadius:"17px"}} variant="contained" size="small">
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
