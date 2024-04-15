import React from "react";
import MobileSidebar from "../mobile-sidebar";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/components/custom/user-profile";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <div className="m-5 md:my-6 md:mr-6 md:ml-1 p-4 h-full flex items-center bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl">
      <MobileSidebar />
      <div className="flex w-full items-center justify-between">
        <div className="">
          <p>home / vendors</p>
          {/* navbar routes */}
        </div>
        <div className="flex items-center gap-x-6">
          <div>
            <Button variant={"default"} size={"sm"}>
              <Plus size={18} />
              <span className="text-xs mx-2 font-normal">Add vendor</span>
            </Button>
          </div>
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
