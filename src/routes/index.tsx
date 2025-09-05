import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import App from "../App";
import Cart from "./Cart";
import FullErrorPage from "./Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <FullErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
