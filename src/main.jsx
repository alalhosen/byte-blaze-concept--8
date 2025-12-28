import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </>
);
