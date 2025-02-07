import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const HeaderPage = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#1976d2",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ color: "#fff" }} variant="h6">
          Dashboard
        </Typography>
        <div>
          <IconButton sx={{ color: "#fff", marginRight: "15px" }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPage;
