import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

export default function Routing() {
  return (
    <BrowserRouter>
      {/* <ThemeContext.Provider value={theme}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* </ThemeContext.Provider> */}
    </BrowserRouter>
  );
}
