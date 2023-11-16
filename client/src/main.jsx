import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Products from "./routes/Products.jsx";
import ProductPage from "./routes/ProductPage.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products/all",
        element: <Products category="all" />,
      },
      {
        path: "products/percussion",
        element: <Products category="percussion" />,
      },
      {
        path: "products/stringed",
        element: <Products category="stringed" />,
      },
      {
        path: "products/wind",
        element: <Products category="wind" />,
      },
      {
        path: "products/keyboard",
        element: <Products category="keyboard" />,
      },
      {
        path: "products/accessories",
        element: <Products category="accessories" />,
      },
      {
        path: "products/id/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
