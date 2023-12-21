import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
