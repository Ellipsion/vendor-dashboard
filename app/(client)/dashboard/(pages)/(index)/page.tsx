import React from "react";
import { columns } from "../../_components/vendor-table/columns";
import { DataTable } from "../../_components/vendor-table/data-table";
import prisma from "@/prisma/client";

async function Dashboard() {
  const data = await prisma.vendor.findMany();
  return (
    <div className="p-5">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Dashboard;
