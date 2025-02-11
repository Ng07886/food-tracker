import { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doCreateUserWithEmailAndPassword,
} from "../../Firebase/Auth";
import { useAuth } from "../../context/authContext/index";
import "./Styles/styles.css";
import "../Home";
import { userIdVar } from "../../ApolloClient/ApolloState";
import { useMutation } from "@apollo/client";
import { INITIALIZE_USER } from "../../ApolloClient/mutations";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [buttonType, setButtonType] = useState("login");
  const [initializeUser, { data, loading, error }] = useMutation(
    INITIALIZE_USER
  );

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = async () => {
    checkUsername();
    checkPassword();
    if (!usernameError || !passwordError) {
      try {
        const res =
          buttonType === "login"
            ? await doSignInWithEmailAndPassword(username, password)
            : await doCreateUserWithEmailAndPassword(username, password);
        console.log("this is the res", res.user.uid);
        userIdVar(res.user.uid);
        setLoginError(false);
        handleInitialize();
        return navigate("/Home");
      } catch (error) {
        console.log(error);
        setLoginError(true);
      }
    }
  };

  const handleInitialize = async () => {
    try {
      console.log(userIdVar());
      const response = await initializeUser({
        variables: { userId: userIdVar() },
      });
      console.log("User initialized:", response.data.initializeUser);
    } catch (err) {
      console.error("Error initializing user:", err);
    }
  };

  useEffect(() => {
    if (loginError) {
      alert("invalid username or password");
    }
  }, [loginError]);

  const checkUsername = () => {
    if (!emailRegex.test(username)) {
      setUsernameError("Please enter a valid email.");
    } else {
      setUsernameError("");
    }
  };

  function checkPassword() {
    setPasswordError(password.length > 5 ? "" : "Username Error");
  }

  return (
    <Box className="login-container">
      <Box className="login-box">
        <Typography>Food Scanner</Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!usernameError} // Shows red border if error is present
          helperText={usernameError} // Displays the error message below the input
        ></TextField>
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError} // Shows red border if error is present
          helperText={passwordError} // Displays the error message below the input
        ></TextField>
        <Box className="button-container">
          <Button
            variant="outlined"
            onClick={() => {
              setButtonType("login");
              onSubmit();
            }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setButtonType("signup");
              onSubmit();
            }}
          >
            Signup
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
