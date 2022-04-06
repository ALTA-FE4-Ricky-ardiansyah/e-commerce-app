import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");

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
