import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import { Link, useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import  { useState } from 'react';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        TheNorthcapUniversity
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

// const SignupUser =()=>{
//    const response = fetch("http://localhost:8080/api/v1/signup",{
//     method:POST
//    })
// }

// axios intergeration
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [role, setRole] = React.useState("");
  
    const handleChange = (event) => {
      console.log(event.target.value); //printing
      setRole(event.target.value);
    };
    
  
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("role",role);//not 
      try {
        // Make the sign-up API request
        const response = await axios.post('http://localhost:9090/api/auth/signup', {
          email: email,
          password: password,
          role:role
        });
  
        // Handle the response
        console.log("signUp",response.data); // You can do something with the response data
  
        // Clear the form fields
        setEmail('');
        setPassword('');
        if (response.data != null) {
          alert("User Successfully Register !!!.. ");
          navigate("/login");
        }
      } catch (error) {
        // Handle the error
        console.error(error);
      }
  
     
    };
   
  
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random?Crypto)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign UP
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
  
                <FormControl
                  fullWidth
                  style={{
                    width: "20%",
                    textAlign: "center",
                    marginLeft: "200px",
                    marginTop: "20px",
                  }}
                >
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleChange}
                  >
                    <MenuItem value="1">Mentor</MenuItem>
                    <MenuItem value="2">Mentee</MenuItem>
                    {/* <MenuItem value="3">Thirty</MenuItem> */}
                  </Select>
                </FormControl>
                <br />
  
                <FormControlLabel
                  style={{ marginTop: "20px" }}
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/login" variant="body2">
                      {"Already have an account? Login"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  };
  
  export default Signup;






// const Signup = () => {
//   const [role, setRole] = React.useState("");

//   const handleChange = (event) => {
//     console.log(event.target.value);
//     setRole(event.target.value);
//   };

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });

//     const response = await fetch(`http://localhost:9090/api/auth/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: data.get("email"),
//         password: data.get("password"),
//         role,
//       }),
//     });
//     const json = await response.json();

//     console.log(json);

//     if (json != null) {
//       alert("User Successfully Register !!!.. ");
//       navigate("/login");
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: "100vh" }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: "url(https://source.unsplash.com/random?Crypto)",
//             backgroundRepeat: "no-repeat",
//             backgroundColor: (t) =>
//               t.palette.mode === "light"
//                 ? t.palette.grey[50]
//                 : t.palette.grey[900],
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign UP
//             </Typography>
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSubmit}
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />

//               <FormControl
//                 fullWidth
//                 style={{
//                   width: "20%",
//                   textAlign: "center",
//                   marginLeft: "200px",
//                   marginTop: "20px",
//                 }}
//               >
//                 <InputLabel id="demo-simple-select-label">Role</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={role}
//                   label="Role"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="1">Mentor</MenuItem>
//                   <MenuItem value="2">Mentee</MenuItem>
//                   {/* <MenuItem value="3">Thirty</MenuItem> */}
//                 </Select>
//               </FormControl>
//               <br />

//               <FormControlLabel
//                 style={{ marginTop: "20px" }}
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign Up
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link to="/login" variant="body2">
//                     {"Already have an account? Login"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// };

// export default Signup;
