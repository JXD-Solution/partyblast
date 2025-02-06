import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const CreatePackage = () => {
  const [packageName, setPackageName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState("");

  const handlePackageNameChange = (e) => setPackageName(e.target.value);
  const handleCustomerNameChange = (e) => setCustomerName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setError("Email cannot be empty");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setEmails((prevEmails) => [...prevEmails, email]);
    setEmail("");
    setError("");
  };

  // Handle package submission (Add Package)
  const handlePackageSubmit = (e) => {
    e.preventDefault();
    if (!packageName || !customerName || !description || !type) {
      setError("All fields are required");
      return;
    }

    setError("");
    setPackageName("");
    setCustomerName("");
    setDescription("");
    setType("");
  };

  const handleClear = () => {
    setPackageName("");
    setCustomerName("");
    setDescription("");
    setType("");
    setEmail("");
    setError("");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3 }}>
            <form onSubmit={handlePackageSubmit}>
              <TextField
                label="Package Name"
                value={packageName}
                onChange={handlePackageNameChange}
                fullWidth
                margin="normal"
                error={Boolean(error)}
                helperText={error && "Please enter a package name"}
              />
              <TextField
                label="Customer Name"
                value={customerName}
                onChange={handleCustomerNameChange}
                fullWidth
                margin="normal"
                error={Boolean(error)}
                helperText={error && "Please enter a customer name"}
              />
              <TextField
                label="Description"
                value={description}
                onChange={handleDescriptionChange}
                multiline
                rows={4}
                fullWidth
                margin="normal"
                error={Boolean(error)}
                helperText={error && "Please enter a description"}
              />
              <FormControl fullWidth margin="normal" error={Boolean(error)}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={handleTypeChange} label="Type">
                  <MenuItem value="Standard">Standard</MenuItem>
                  <MenuItem value="Premium">Premium</MenuItem>
                  <MenuItem value="Custom">Custom</MenuItem>
                </Select>
                {error && (
                  <FormHelperText>{"Please select a type"}</FormHelperText>
                )}
              </FormControl>
            </form>
          </Paper>
        </Grid>

        {/* Right Section: Email Form and List of Added Emails */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3 }}>
            <form onSubmit={handleEmailSubmit}>
              <TextField
                label="Enter Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                margin="normal"
                error={Boolean(error)}
                helperText={error}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Add Email
              </Button>
            </form>
          </Paper>

          <Paper sx={{ padding: 3, marginTop: 2 }}>
            <List sx={{ maxHeight: 200, overflowY: "auto" }}>
              <h3>Added Emails</h3>
              {emails.length === 0 ? (
                <ListItem>
                  <ListItemText primary="No emails added yet." />
                </ListItem>
              ) : (
                emails.map((email, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={email} />
                  </ListItem>
                ))
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 3,
          width: "100%",
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClear}
          sx={{ flexGrow: 1 }}
          size="small"
        >
          Clear
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handlePackageSubmit}
          sx={{ flexGrow: 1, textAlign: "right" }}
          size="small"
        >
          Add Package
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePackage;
