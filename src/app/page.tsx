"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import HomePageContainer from "@/features/home-page/components/HomePageContainer";
import EventManagement from "@/features/event-management/components/EventManagement";
import { mockRow } from "@/mock/page";

const Page = () => {
  return (
    <Router>
      <HomePageContainer />
      <Box component="main" sx={{ flexGrow: 1, padding: 3, marginLeft: 26 }}>
        <Routes>
          <Route
            path={"/platform/event-management"}
            element={<EventManagement eventData={mockRow} />}
          />
        </Routes>
      </Box>
    </Router>
  );
};

export default Page;
