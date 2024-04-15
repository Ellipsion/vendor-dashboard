import React from "react";
import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";
import AuthorRoutes from "./author-routes";

const Sidebar = () => {
  return (
    <div className="flex flex-col overflow-y-auto bg-white m-5 shadow-sm rounded-2xl">
      <div className="px-6 pt-6">
        <Logo />
      </div>
      <div className="w-full border-t my-5"></div>
      <p className="text-sm text-gray-400 font-medium px-5">Vendors</p>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
        <div className="w-full border-t my-5"></div>
        <p className="text-sm text-gray-400 font-medium px-5">Ellipsion (Me)</p>
        <AuthorRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
