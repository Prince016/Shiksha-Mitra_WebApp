import { InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AddSubject = () => {
  return (
    <div>
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
        sx={{}}
      >
        <Typography>Add Subjects</Typography>
        <InputLabel>SubjectId</InputLabel>
        <TextField name="name" placeholder="Subject Id" margin="normal" />
        <InputLabel>SubjectName</InputLabel>
        <TextField name="name" placeholder="Subject Id" margin="normal" />
      </Box>
    </div>
  );
};

export default AddSubject;
