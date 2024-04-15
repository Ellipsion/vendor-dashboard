"use client";

import {
  BarChart,
  Compass,
  Layout,
  LayoutList,
  List,
  Plus,
} from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const dashboardRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: LayoutList,
    label: "Vendors",
    href: "/vendors",
  },
  {
    icon: Plus,
    label: "New Vendor",
    href: "/vendors/create",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();
  const routes = dashboardRoutes;
  return (
    <div className="flex flex-col w-full py-3">
      {routes.map((route) => (
        <SidebarItem key={route.href} {...route} />
      ))}
    </div>
  );
};

export default SidebarRoutes;
