import React from "react";
import { useRoutes } from "react-router-dom";
import List from "../List";
import Dashboard from "../page/Dashboard";
import Button from "../page/button/ButtonPage";

const Router = () =>
  useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "button",
          element: <Button />,
        },
        // { path: "tasks", element: <DashboardTasks /> },
      ],
    },
    // { path: "team", element: <AboutPage /> },
  ]);

export default Router;
