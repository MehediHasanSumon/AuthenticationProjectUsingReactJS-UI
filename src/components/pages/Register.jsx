import { Alert, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
function Register() {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const getUserData = new FormData(e.currentTarget);
    const userData = {
      name: getUserData.get("name"),
      username: getUserData.get("username"),
      email: getUserData.get("email"),
      password: getUserData.get("password"),
      password_confirmation: getUserData.get("password_confirmation"),
    };
    // console.log(userData);
    if (!userData.name) {
      setError({
        status: true,
        message: "Name is required!",
        type: "error",
      });
    } else if (!userData.username) {
      setError({
        status: true,
        message: "Username is required!",
        type: "error",
      });
    } else if (!userData.email) {
      setError({
        status: true,
        message: "Email is required!",
        type: "error",
      });
    } else if (!userData.password) {
      setError({
        status: true,
        message: "Password is required!",
        type: "error",
      });
    } else if (!userData.password_confirmation) {
      setError({
        status: true,
        message: "Confirm password is required!",
        type: "error",
      });
    } else if (userData.password !== userData.password_confirmation) {
      setError({
        status: true,
        message: "Password and confirm password isn't match!",
        type: "error",
      });
    } else {
      setError({
        status: false,
        message: "",
        type: "",
      });
      console.log(userData);
    }
  };
  return (
    <>
      <Box
        component="div"
        sx={{
          width: "500px",
          border: "1px solid #c2c2c2",
          margin: "auto",
          padding: "15px",
        }}
      >
        <Box component="form" noValidate id="myform" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="text"
            margin="normal"
            name="name"
            id="name"
            label="Name"
          />
          <TextField
            fullWidth
            type="text"
            margin="normal"
            name="username"
            id="username"
            label="Username"
          />
          <TextField
            fullWidth
            type="email"
            margin="normal"
            name="email"
            id="email"
            label="Email"
          />
          <TextField
            fullWidth
            type="password"
            name="password"
            id="password"
            margin="normal"
            label="Password"
          />
          <TextField
            fullWidth
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            margin="normal"
            label="Re-type Password"
          />
          <Box textAlign="center">
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </Box>
        </Box>
        {error.status ? (
          <Alert severity={error.type} sx={{ mt: 3 }}>
            {error.message}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}

export default Register;
