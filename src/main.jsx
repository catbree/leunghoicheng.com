import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import "./fonts/Lexend-VariableFont_wght.ttf";

import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import WorkEntryPage from "./pages/WorkEntryPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<WorkEntryPage />} />
        <Route path="*" element={<h1>Error Page</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
