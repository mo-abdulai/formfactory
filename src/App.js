import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/excercise:id" element={<ExerciseDetails />} />
          </Routes>
        <Footer/>
      </Box>
    </div>
  );
};

export default App;
