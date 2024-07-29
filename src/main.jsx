import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <div>Hello world, aboutpage!</div> },
  { path: "/work", element: <div>Hello world, workpage!</div> },
  { path: "/thoughts", element: <div>Hello world, thoughtpage, WIP!</div> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
