"use client";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { EventData } from "../types";
import { nanoid } from "nanoid";

type CreatePackageProps = {
  previousData?: EventData;
  onSubmit?: () => void;
  isCreatingEvent?: boolean;
};

const CreatePackage = ({
  previousData,
  onSubmit,
  isCreatingEvent,
}: CreatePackageProps) => {
  const [formData, setFormData] = useState({
    id: previousData?.id || nanoid(),
    emailSubject: previousData?.emailSubject || "",
    customerName: previousData?.customerName || "",
    description: previousData?.description || "",
    packageType: previousData?.packageType || "",
    file: previousData?.file || null,
    guestEmailList: previousData?.guestEmailList || [],
    dateTime: previousData?.dateTime || "",
    place: previousData?.place || "",
  });

  const [guestEmail, setGuestEmail] = useState("");
  const [errors, setErrors] = useState({
    emailSubject: "",
    customerName: "",
    packageType: "",
    guestEmail: "",
    dateTime: "",
    place: "",
  });

  const titleForm = `${isCreatingEvent ? "Create" : "Edit"} Event Invitation`;
  const submitActionText = `${isCreatingEvent ? "Create" : "Save"}`;

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleTypeChange = (e: SelectChangeEvent<string>) => {
    setFormData((prev) => ({ ...prev, packageType: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({ ...prev, file: selectedFile }));
  };

  const handleGuestEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestEmail(e.target.value);
  };

  const handleGuestEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(guestEmail)) {
      setErrors((prev) => ({
        ...prev,
        guestEmail: "Please enter a valid email",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      guestEmailList: [...prev.guestEmailList, guestEmail],
    }));
    setGuestEmail("");
    setErrors((prev) => ({ ...prev, guestEmail: "" }));
  };

  const handleSubmit = () => {
    const { emailSubject, customerName, packageType, dateTime, place } =
      formData;
    let valid = true;
    const newErrors = { ...errors };

    if (!emailSubject) {
      newErrors.emailSubject = "Please enter a package name";
      valid = false;
    }
    if (!customerName) {
      newErrors.customerName = "Please enter a customer name";
      valid = false;
    }
    if (!packageType) {
      newErrors.packageType = "Please select a package type";
      valid = false;
    }
    if (!dateTime) {
      newErrors.dateTime = "Please select a date and time";
      valid = false;
    }
    if (!place) {
      newErrors.place = "Please enter a place for the event";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log({
        id: formData.id,
        emailSubject,
        guestEmailList: formData.guestEmailList,
        customerName,
        file: formData.file,
        packageType,
        dateTime,
        place,
      });
      if (onSubmit) onSubmit();
      handleClear();
    }
  };

  const handleClear = () => {
    setFormData({
      id: nanoid(),
      emailSubject: "",
      customerName: "",
      description: "",
      packageType: "",
      file: null,
      guestEmailList: [],
      dateTime: "",
      place: "",
    });
    setGuestEmail("");
    setErrors({
      emailSubject: "",
      customerName: "",
      packageType: "",
      guestEmail: "",
      dateTime: "",
      place: "",
    });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "left",
          fontSize: "24px",
          marginBottom: 3,
        }}
      >
        {titleForm}
      </Typography>
      <Paper sx={{ padding: 3 }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            label="Customer Name"
            value={formData.customerName}
            onChange={handleChange("customerName")}
            fullWidth
            margin="normal"
            error={Boolean(errors.customerName)}
            helperText={errors.customerName}
          />

          <TextField
            label="Email Subject"
            value={formData.emailSubject}
            onChange={handleChange("emailSubject")}
            fullWidth
            margin="normal"
            error={Boolean(errors.emailSubject)}
            helperText={errors.emailSubject}
          />

          <TextField
            label="Description"
            value={formData.description}
            onChange={handleChange("description")}
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />

          <FormControl
            fullWidth
            margin="normal"
            error={Boolean(errors.packageType)}
          >
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.packageType}
              onChange={handleTypeChange}
              label="Type"
            >
              <MenuItem value="Birthday">Birthday</MenuItem>
              <MenuItem value="Anniversary">Anniversary</MenuItem>
              <MenuItem value="Debut">Debut</MenuItem>
            </Select>
            {errors.packageType && (
              <FormHelperText>{errors.packageType}</FormHelperText>
            )}
          </FormControl>

          <TextField
            label="Event Date & Time"
            type="datetime-local"
            value={formData.dateTime}
            onChange={handleChange("dateTime")}
            fullWidth
            margin="normal"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            error={Boolean(errors.dateTime)}
            helperText={errors.dateTime}
          />

          <TextField
            label="Place"
            value={formData.place}
            onChange={handleChange("place")}
            fullWidth
            margin="normal"
            error={Boolean(errors.place)}
            helperText={errors.place}
          />

          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ marginTop: 2 }}
            size="small"
          >
            Upload File
            <input
              type="file"
              hidden
              onChange={handleFileChange}
              accept=".doc,.docx,.jpg,.jpeg,.png,.gif,.pdf"
            />
          </Button>
          {formData.file && (
            <Box sx={{ marginTop: 2 }}>
              <p>File Selected: {formData.file.name}</p>
            </Box>
          )}
        </form>

        <form onSubmit={handleGuestEmailSubmit}>
          <TextField
            label="Enter Guest Email"
            type="email"
            value={guestEmail}
            onChange={handleGuestEmailChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.guestEmail)}
            helperText={errors.guestEmail}
          />

          <Button
            type="submit"
            variant="contained"
            size="small"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Add Email Guest
          </Button>
        </form>

        <Paper sx={{ padding: 3, marginTop: 5 }}>
          <List sx={{ maxHeight: 200, overflowY: "auto" }}>
            <h3>Email Guest</h3>
            {formData.guestEmailList.length === 0 ? (
              <ListItem sx={{ padding: 0 }}>
                <ListItemText primary="No emails added yet." />
              </ListItem>
            ) : (
              formData.guestEmailList.map((email, index) => (
                <ListItem key={index} sx={{ padding: 0 }}>
                  <ListItemText primary={`${index + 1}. ${email}`} />
                </ListItem>
              ))
            )}
          </List>
        </Paper>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: 3,
          width: "100%",
          gap: 2,
        }}
      >
        {isCreatingEvent ? (
          <Button
            variant="outlined"
            color="error"
            onClick={handleClear}
            size="small"
          >
            Clear
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="error"
            onClick={handleClear}
            size="small"
          >
            Cancel
          </Button>
        )}
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          size="small"
        >
          {submitActionText}
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePackage;
