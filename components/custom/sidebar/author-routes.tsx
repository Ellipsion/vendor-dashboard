"use client";

import { Gem, Github } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const dashboardRoutes = [
  {
    icon: Github,
    label: "Github",
    href: "https://github.com/Ellipsion",
  },
  {
    icon: Gem,
    label: "Portfolio",
    href: "https://www.ellipsion.tech/",
  },
];

const AuthorRoutes = () => {
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

export default AuthorRoutes;
