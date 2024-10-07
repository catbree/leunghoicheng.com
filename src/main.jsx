import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./styles/global.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkEntryPage from "./pages/WorkEntryPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/work", element: <Navigate to="/" /> },
  { path: "work/:slug", element: <WorkEntryPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "*", element: <h1>Error Page</h1> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
