import { Alert, Box, Button, TextField } from "@mui/material";
import { useState } from "react";

function ConfrimPassword() {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const getUserData = new FormData(e.currentTarget);
    const userData = {
      password: getUserData.get("password"),
      password_confirmation: getUserData.get("password_confirmation"),
    };

    if (!userData.password) {
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
              Confirm Password
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

export default ConfrimPassword;
