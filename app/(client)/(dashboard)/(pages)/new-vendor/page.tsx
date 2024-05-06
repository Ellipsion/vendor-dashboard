import { Input } from "@/components/custom/input";
import React from "react";
import FormInput from "./_components/form-input";
import VendorForm from "./_components/vendor-form";

const VendorPage = () => {
  return (
    <div className="py-5 md:pr-6 pl-4 pr-4 md:pl-1">
      <div className="flex items-end justify-between py-5">
        <div>
          <h1 className="text-3xl font-medium">Vendor</h1>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-7 max-w-xl">
        <div>
          <h2 className="text-xl font-medium">Create new vendor</h2>
          <p className="text-xs text-gray-400 tracking-wide mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="mt-8">
          <VendorForm create={true} />
        </div>
      </div>
    </div>
  );
};

export default VendorPage;
