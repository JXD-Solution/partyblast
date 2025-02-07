"use client"; // add this at the top because this is a client component

import * as React from "react";
import { useRouter } from "next/navigation"; // useRouter instead of useNavigate
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { allRoutes } from "@/config/routes";

export const drawerWidth = 240;

const HomePageContainer = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter(); // useRouter from next/navigation

  const handleCreateEventClick = () => {
    router.push(allRoutes.platform.partyList.createEvent); // router.push instead of navigate
  };

  const handleEditEventClick = () => {
    router.push(allRoutes.platform.partyList.editEvent);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
              <ListItemButton onClick={handleCreateEventClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Create Event" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleEditEventClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Edit Event" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginLeft: drawerWidth,
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default HomePageContainer;
