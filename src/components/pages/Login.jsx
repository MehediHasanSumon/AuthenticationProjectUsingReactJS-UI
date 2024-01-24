import { Alert, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    //Create FormData Object
    const getUserData = new FormData(e.currentTarget);
    const userData = {
      username: getUserData.get("username"),
      password: getUserData.get("password"),
    };
    // console.log(userData);

    if (!userData.username) {
      setError({
        status: true,
        message: "Username is required!",
        type: "error",
      });
    } else if (!userData.password) {
      setError({
        status: true,
        message: "Password is required!",
        type: "error",
      });
    } else {
      //see data
      console.log(userData.username);
      console.log(userData.password);
      document.getElementById("myform").reset();
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
            id="username"
            name="username"
            margin="normal"
            label="Username"
          />
          <TextField
            fullWidth
            type="password"
            id="password"
            name="password"
            margin="normal"
            label="Password"
          />
          <Box textAlign="center">
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Box>
        </Box>
        <Box>
          <NavLink to="/password-reset" style={{ textDecoration: "none" }}>
            Forget Password?
          </NavLink>
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

export default Login;
