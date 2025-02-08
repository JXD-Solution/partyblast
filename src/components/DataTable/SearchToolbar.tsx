import React from "react";
import { Box, TextField, Button, AppBar, Toolbar } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const SearchToolbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "70%" }}>
          <TextField
            label="Search..."
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "white",
              marginRight: 1,
              width: "100%",
              maxWidth: "350px",
            }}
          />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", width: "30%" }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<RefreshIcon />}
          >
            Refresh
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SearchToolbar;
