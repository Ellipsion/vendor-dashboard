import React from "react";
import VendorForm from "./create-vendor-form";

const EditVendorForm = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-7 max-w-xl">
      <div>
        <h2 className="text-xl font-medium">Edit vendor</h2>
        <p className="text-xs text-gray-400 tracking-wide mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="mt-8">
        <VendorForm create={true} />
      </div>
    </div>
  );
};

export default EditVendorForm;
