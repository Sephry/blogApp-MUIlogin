import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { color } from "@mui/system";

function Auth() {
  const [isSignup, setisSignup] = useState(false);
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const resetState = () => {
    setisSignup(!isSignup);
    setinputs({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              onChange={handleChange}
              name="name"
              value={inputs.name}
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}
          <TextField
            onChange={handleChange}
            name="email"
            value={inputs.email}
            margin="normal"
            type="email"
            variant="outlined"
            placeholder="Email"
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={inputs.password}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <Button
            endIcon={
              isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
            }
            onClick={() => setisSignup(!isSignup)}
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
          <Button
            endIcon={
              isSignup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
            }
            onClick={resetState}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Auth;
