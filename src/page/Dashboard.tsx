import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  const components = ["button"];
  return (
    <>
      <div>Dashboard</div>
      {/* <NavLink to='messages' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Messages
      </NavLink> */}
      {components.map((comp) => (
        <NavLink key={comp} to={`/${comp}`}>
          {comp}
        </NavLink>
      ))}
      <Outlet />
    </>
  );
}

export default Dashboard;
