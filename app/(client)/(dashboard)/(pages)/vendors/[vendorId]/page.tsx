import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/prisma/client";
import EditVendorForm from "../_components/edit-vendor-form";

interface PageProps {
  params: {
    vendorId: string;
  };
}

const VendorPage = async ({ params }: PageProps) => {
  const { vendorId } = params;
  const session = await auth();

  // Protected Route
  if (!session?.user) {
    return redirect("/");
  }

  const vendor = await prisma.vendor.findUnique({
    where: {
      id: vendorId,
    },
  });

  if (!vendor) {
    return <>404</>;
  }

  return (
    <div className="py-5 md:pr-6 pl-4 pr-4 md:pl-1">
      <div className="flex items-end justify-between py-5">
        <div>
          <h1 className="text-3xl font-medium">Edit Vendor</h1>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-7 max-w-xl">
        <div>
          <h2 className="text-xl font-medium">{vendor.vendorName}</h2>
          <p className="text-xs text-gray-400 tracking-wide mt-2">
            {vendor.city} ({vendor.country})
          </p>
        </div>
        <div className="mt-8 relative">
          {/* <VendorCard /> */}
          <EditVendorForm initialData={vendor} vendorId={vendor.id} />
        </div>
      </div>
    </div>
  );
};

export default VendorPage;
