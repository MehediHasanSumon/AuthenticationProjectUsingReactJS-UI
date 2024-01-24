import { Alert, Box, Button, TextField } from "@mui/material";
import { useState } from "react";

function PasswordReset() {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const getUserData = new FormData(e.currentTarget);
    const userData = {
      email: getUserData.get("email"),
    };

    if (!userData.email) {
      setError({
        status: true,
        message: "Email is required!",
        type: "error",
      });
    } else {
      //get Data
      console.log(userData.email);
      document.getElementById("myform").reset();
      setError({
        status: false,
        message: "",
        type: "",
      });
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
            id="email"
            name="email"
            label="Email"
          />
          <Box textAlign="center">
            <Button type="submit" variant="contained">
              Send Password Reset Link
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

export default PasswordReset;
