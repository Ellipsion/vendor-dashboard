import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import VendorForm from "../_components/vendor-form";
import prisma from "@/prisma/client";
import { Button } from "@/components/ui/button";

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
        <VendorForm initialData={vendor} create={false} vendorId={vendor.id} />
      </div>
    </div>
  );
};

export default VendorPage;
