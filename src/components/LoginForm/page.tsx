"use client";

import React from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";

type LoginFormProps = {
  username?: string;
  password?: string;
  onClick?: () => void;
  error?: string;
  onSubmit?: () => void;
};

const LoginForm = ({ username, password, error, onSubmit }: LoginFormProps) => {
  return (
    <Container maxWidth="xs" sx={{ paddingTop: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
          padding: 3,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Login
        </Typography>

        <form onSubmit={onSubmit} style={{ width: "100%" }}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            margin="normal"
          />

          {error && (
            <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
