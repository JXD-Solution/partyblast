"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePackage from "@/features/create-package/components/CreateEventForm";
import { Box } from "@mui/material";
import HomePageContainer from "@/features/home-page/components/HomePageContainer";

const Page = () => {
  return (
    <Router>
      <HomePageContainer />
      <Box component="main" sx={{ flexGrow: 1, padding: 3, marginLeft: 26 }}>
        <Routes>
          <Route
            path="/platform/party-list/create-event"
            element={<CreatePackage isCreatingEvent />}
          />
          <Route
            path="/platform/party-list/edit-event"
            element={<CreatePackage />}
          />
        </Routes>
      </Box>
    </Router>
  );
};

export default Page;
