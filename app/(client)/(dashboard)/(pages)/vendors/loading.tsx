import { IconBadge } from "@/components/custom/icon-badge";
import { Button } from "@/components/ui/button";
import { Landmark, MapPin, User } from "lucide-react";
import React from "react";

const LoaderStrip = () => {
  return (
    <div className="h-8 my-2 w-full bg-gray-200 rounded animate-pulse"></div>
  );
};

const Loader = () => {
  return (
    <div className="py-5 pr-6 pl-6 md:pl-1">
      <div className="flex items-end justify-between py-5">
        <div>
          <h1 className="text-3xl font-medium">Vendor</h1>
          <h5 className="text-sm text-neutral-400 m-1 font-medium">
            View and Edit a vendor.
          </h5>
        </div>
        <div>
          <Button variant={"ghost"}>Search</Button>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-xl p-6">
        <div>
          <div>
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-x-2">
              <div className="flex items-center gap-x-5 w-1/2">
                <IconBadge icon={User} />
                <LoaderStrip />
              </div>
              <div className="w-1/4">
                <LoaderStrip />
              </div>
            </div>
            <div className="mt-10 flex items-center gap-x-2 md:w-1/2">
              <Landmark size={15} className="stroke-muted-foreground" />
              <h1 className="text-sm leading-tight text-muted-foreground">
                Bank Details
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 md:w-1/2 ml-1 ">
              <LoaderStrip />
              <LoaderStrip />
            </div>
          </div>
          <div>
            <div className="mt-10 flex items-center gap-x-2">
              <MapPin size={15} className="stroke-muted-foreground" />
              <h1 className="text-sm leading-tight text-muted-foreground">
                Address
              </h1>
            </div>
            <div className=" mt-1 flex flex-col md:flex-row gap-x-2 md:w-1/2">
              <LoaderStrip />
              <LoaderStrip />
            </div>

            <div className="flex  gap-x-2 md:w-1/2">
              <LoaderStrip />
            </div>
            <div className="flex flex-col md:flex-row md:w-1/2">
              <LoaderStrip />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
