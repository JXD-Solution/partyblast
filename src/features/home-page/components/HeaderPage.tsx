import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HandshakeIcon from "@mui/icons-material/Handshake";
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HandshakeIcon />
          <Typography sx={{ color: "#fff", fontWeight: "bold" }} variant="h6">
            PartyBlast
          </Typography>
        </Box>

        <Box>
          <IconButton sx={{ color: "#fff", marginRight: "15px" }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPage;
