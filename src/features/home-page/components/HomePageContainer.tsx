import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HeaderPage from "./HeaderPage";
import { allRoutes } from "@/config/routes";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

export const drawerWidth = 215;

const HomePageContainer = () => {
  const navigate = useNavigate();

  const handleEventTabClick = () => {
    navigate(allRoutes.platform.eventManagement);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HeaderPage />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleEventTabClick}>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <EditCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="Event Management" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginLeft: drawerWidth,
          overflowY: "auto",
        }}
      />
    </Box>
  );
};

export default HomePageContainer;
