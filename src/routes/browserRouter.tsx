import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import { LayoutPage } from "../pages/layoutPage";
import { LikedPage } from "../pages/likedPage";
import { MainPage } from "../pages/mainPage";
import { NotFoundPage } from "../pages/notFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LayoutPage />,
        children: [
          {
            path: "/",
            element: <MainPage />,
          },
          {
            path: "/cat",
            element: <LikedPage />,
          },
        ],
      },
      {
        path: "/notFound",
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <Navigate replace to="/notFound" />,
      },
    ],
  },
]);
