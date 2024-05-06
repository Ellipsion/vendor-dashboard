import { Button } from "@/components/ui/button";
import { LoaderCircle, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const Loading = () => {
  return (
    <div className="py-5 pr-6 pl-6 md:pl-1">
      <div className="flex items-end justify-between py-5">
        <div>
          <h1 className="text-3xl font-medium">Vendors</h1>
          <h5 className="text-sm text-neutral-400 m-1 font-medium">
            View and Manage vendors.
          </h5>
        </div>
        <div>
          <Link href={"/vendors/create"}>
            <Button variant={"default"} size={"sm"}>
              <Plus size={18} />
              <span className="text-xs mx-2 font-normal">Add vendor</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-xl h-[400px]">
        <div className="p-5">
          <h2 className="test-2xl font-medium">All Vendors</h2>
        </div>
        <div className="h-full flex items-center justify-center">
          <LoaderCircle className="animate-spin stroke-gray-400" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
