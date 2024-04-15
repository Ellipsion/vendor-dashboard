import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import VendorForm from "../_components/vendor-form";
import prisma from "@/prisma/client";

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
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Vendor</h1>
        </div>
      </div>
      <VendorForm initialData={vendor} create={false} vendorId={vendor.id} />
    </div>
  );
};

export default VendorPage;
