import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import AnalysisPage from "./pages/AnalysisPage";
import DataPage from "./pages/DataPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "analysis/:ticker?",
        element: <AnalysisPage />,
    },
    {
        path: "data/:ticker?",
        element: <DataPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <RouterProvider router={router} />
    </>,
);
