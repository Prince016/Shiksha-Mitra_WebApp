import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  
    const [isSignup, setIsSignup] = useState(false);
    const [input, setInputs] = useState({
      name: "",
      email: "",
      password: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

      const sendRequest = async (type = "login") => {
        const res = await axios
          .post(`http://localhost:8000/api/user/${type}`, {
            name: input.name,
            email: input.email,
            password: input.password,
          })
          .catch((err) => console.log(err));
    
        const data = await res.data;
        console.log(data);
        return data;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        if (isSignup) {
          sendRequest("signup")
            // .then((data) => localStorage.setItem("userId", data.user._id))
            // .then(() => dispath(authActions.login()))
            // .then(() => navigate("/blogs"))
        } else {
          sendRequest()
            // .then((data) => console.log("User Id after the login------> ", data.user._id))
            // .then((data) => localStorage.setItem("userId", data.user._id))
            // .then(() => dispath(authActions.login()))
            // .then(() => navigate("/blogs"))
        }
      };

  return (
    <div> <form onSubmit={handleSubmit}>
    <Box
      maxWidth={600}
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
      justifyContent={"center"}
      boxShadow="10px 10px 20px #acc"
      padding={3}
      margin="auto"
      marginTop={5}
      borderRadius={5}
    >
      <Typography variant="h2" padding={3} textAlign="center">
        {isSignup ? "SignUp" : "Login"}
      </Typography>
      {isSignup && (
        <TextField
          name="name"
          onChange={handleChange}
          value={input.name}
          type="text"
          placeholder="Name"
          margin="normal"
        />
      )}
      <TextField
        name="email"
        onChange={handleChange}
        value={input.email}
        type="email"
        placeholder="Email"
        margin="normal"
      />
      <TextField
        name="password"
        onChange={handleChange}
        value={input.password}
        type="password"
        placeholder="Password"
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ borderRadius: 3, marginTop: 4 }}
        color="warning"
      >
        Submit
      </Button>
      <Button
        onClick={() => setIsSignup(!isSignup)}
        variant="contained"
        sx={{ borderRadius: 3, marginTop: 4 }}
        color="info"
      >
        Change to {isSignup ? "Login" : "Signup"}
      </Button>
    </Box>
  </form></div>
  )
}

export default Auth;