import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex justify-between mt-[5rem]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
