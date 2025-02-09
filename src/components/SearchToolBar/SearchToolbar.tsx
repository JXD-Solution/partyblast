import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  AppBar,
  Toolbar,
  InputAdornment,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search"; // Search icon

type SearchToolbarProps = {
  filterValue: string;
  onSearch: (query: string) => void;
  onRefresh: () => void;
  showAddAction: boolean;
};

export const SearchToolbar = ({
  filterValue,
  onSearch,
  onRefresh,
  showAddAction,
}: SearchToolbarProps) => {
  const [searchQuery, setSearchQuery] = useState(filterValue);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  // Trigger search when Enter key is pressed
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch(searchQuery);
    }
  };

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
        <Box
          sx={{
            display: "flex",
            width: "30%",
            gap: 0.5,
          }}
        >
          {showAddAction ? (
            <Button variant="text" color="primary" startIcon={<AddIcon />}>
              Create
            </Button>
          ) : null}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "70%",
            justifyContent: "flex-end",
          }}
        >
          <TextField
            label="Search..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            sx={{
              backgroundColor: "white",
              marginRight: 1,
              width: "100%",
              maxWidth: "350px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="text"
                    color="primary"
                    onClick={handleSearchClick}
                    sx={{
                      minWidth: "auto",
                      padding: 0,
                      marginRight: 0,
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button
          color="primary"
          startIcon={<RefreshIcon />}
          onClick={onRefresh}
        />
      </Toolbar>
    </AppBar>
  );
};
