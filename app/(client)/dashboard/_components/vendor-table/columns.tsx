"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Vendor } from "@prisma/client";

/* Display [paginated] list of vendors: 
    Vendor Name, Bank Account No., Bank Name, 
    Edit (link) / Delete (link)
*/

export const columns: ColumnDef<Vendor>[] = [
  {
    accessorKey: "vendorName",
    header: "Vendor Name",
  },
  {
    accessorKey: "bankAccountNumber",
    header: "Bank Account No.",
  },
  {
    accessorKey: "bankName",
    header: "Bank Name",
  },
];
