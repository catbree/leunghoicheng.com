import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";

import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import WorkEntryPage from "./pages/WorkEntryPage";
import TestingPage from "./pages/TestingPage";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/work", element: <WorkPage />},
  {path: "work/:slug", element: <WorkEntryPage/>},
  {path: "/about", element: <AboutPage />},
  {path:"*", element:<h1>Error Page</h1>},
  {path: "/testing", element: <TestingPage />},
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
