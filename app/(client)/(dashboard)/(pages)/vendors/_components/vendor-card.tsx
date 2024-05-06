import { IconBadge } from "@/components/custom/icon-badge";
import { User } from "lucide-react";
import React from "react";

const VendorCard = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-7 max-w-xl">
      <div>
        <h2 className="text-xl font-medium">View vendor</h2>
        <p className="text-xs text-gray-400 tracking-wide mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="mt-8">
        <div className="flex">
          <IconBadge icon={User} />
          <h1>Vendor Namessss</h1>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
