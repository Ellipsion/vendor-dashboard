import React from "react";
import { columns } from "../../_components/vendor-table/columns";
import { DataTable } from "../../_components/vendor-table/data-table";
import { Vendor } from "@prisma/client";
import data from "@/prisma/data.json";

async function Dashboard() {
  const vendors = data as Vendor[];
  return (
    <div className="p-5">
      <DataTable columns={columns} data={vendors} />
    </div>
  );
}

export default Dashboard;
