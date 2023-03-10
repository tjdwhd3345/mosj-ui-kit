import React from "react";
import { useRoutes } from "react-router-dom";
// import List from "../List";
import Dashboard from "../page/Dashboard";
import Button from "../page/button/ButtonPage";
import TreeViewPage from "../page/treeview/TreeViewPage";

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
        {
          path: "treeview",
          element: <TreeViewPage />,
        },
        // { path: "tasks", element: <DashboardTasks /> },
      ],
    },
    // { path: "team", element: <AboutPage /> },
  ]);

export default Router;
