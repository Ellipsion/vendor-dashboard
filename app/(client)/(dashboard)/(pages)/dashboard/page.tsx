import React from "react";
import { columns } from "../../_components/vendor-table/columns";
import { DataTable } from "../../_components/vendor-table/data-table";
import prisma from "@/prisma/client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

async function Dashboard() {
  const data = await prisma.vendor.findMany();
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
      <div className="bg-white shadow-sm rounded-xl">
        <div className="p-5">
          <h2 className="test-2xl font-medium">All Vendors</h2>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
