import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useStyles } from "./utils";
import nculogo from "./images/logo.png";
import './Navbar.css'

const Navbar = () => {
  const classes = useStyles();

  const [value, setValue] = useState();

  return (
    <div>
      {" "}
      <AppBar
        position="sticky"
        sx={{
          // background:
          //   "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
          background: "white",
        }}
      >
        <Toolbar>
          <Typography className={classes.font} variant="h4">
            <img
              // style={{ display: isOpen ? "block" : "none" }}

              className="Logo_img"
              src={nculogo}
              alt="ncu-logo"
              width={63}
              height={57}
            />

          </Typography>
            <h2
              style={{
                // color:
                //   "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
                // color:
                //   "orange",
              }}
              className="App-name"
            >
              SHIKSHA MITRA
            </h2>

          <Box display="flex" marginLeft="auto">
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                color="warning"
                sx={{ margin: 2, borderRadius: 10 }}
              >
                Login
              </Button>

              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                color="warning"
                sx={{ margin: 2, borderRadius: 10 }}
              >
                Signup
              </Button>
            </>

            {/* <Button
            onClick={() => dispath(authActions.logout())}
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            color="warning"
            sx={{ margin: 2, borderRadius: 10 }}
          >
            LogOut
          </Button> */}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
