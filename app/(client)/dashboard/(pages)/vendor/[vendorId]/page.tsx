import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface PageProps {
  params: {
    vendorId: string;
  };
}

const Vendor = async ({ params }: PageProps) => {
  const { vendorId } = params;
  const session = await auth();

  // Protected Route
  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div>
      <h1>Vendor</h1>
      <h2>{vendorId}</h2>
    </div>
  );
};

export default Vendor;
