"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import HomePageContainer from "@/features/home-page/components/HomePageContainer";
import { DataTable } from "@/components/DataTable";

const Page = () => {
  return (
    <Router>
      <HomePageContainer />
      <Box component="main" sx={{ flexGrow: 1, padding: 3, marginLeft: 26 }}>
        <Routes>
          <Route path={"/platform/event-management"} element={<DataTable />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Page;
