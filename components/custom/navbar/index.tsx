import React from "react";
import MobileSidebar from "../mobile-sidebar";
import { UserProfile } from "@/components/custom/user-profile";
import { Github, Home, Plus } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="m-5 md:m-6 p-4 h-full flex items-center bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl">
      <div className="flex w-full items-center justify-between">
        <MobileSidebar />
        <div className="hidden md:block">
          <Link
            href={"https://github.com/Ellipsion/vendor-dashboard"}
            target="_blank"
          >
            <Github />
          </Link>
          {/* navbar routes */}
        </div>
        <div className="flex items-center gap-x-6">
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
