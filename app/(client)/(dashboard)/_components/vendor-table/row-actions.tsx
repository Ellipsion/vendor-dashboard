"use client";

import React from "react";
import { Vendor } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PenIcon, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Table } from "@tanstack/react-table";
import { deleteVendor } from "./actions";
import { toast } from "react-hot-toast";
import DeleteVendorDialog from "@/components/custom/delete-vendor-dialog";

interface Props<TData> {
  vendor: Vendor;
  table: Table<TData>;
}

function RowActions<TData>({ vendor, table }: Props<TData>) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/vendors/${vendor.id}`);
  };

  const handleDelete = async () => {
    const res = await deleteVendor({ id: vendor.id });
    if (res) {
      router.refresh();
      toast(
        <div className="flex gap-x-5">
          <div className="flex items-center">
            <CheckCircle2 className="stroke-green-400" />
          </div>
          <div>
            <p className="text-sm  text-muted-foreground font-medium">
              Vendor deleted succesfully
            </p>
            <p className="text-xs text-gray-400 font-medium">
              &quot;{vendor.vendorName}&quot; has been deleted.
            </p>
          </div>
        </div>
      );
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex gap-5 w-10">
      <Button onClick={handleEdit} variant={"link"} size={"sm"}>
        <PenIcon size={16} strokeWidth={2} />
      </Button>
      <DeleteVendorDialog
        onContinue={handleDelete}
        vendorName={vendor.vendorName}
      >
        <Trash className="" size={16} strokeWidth={1} />
      </DeleteVendorDialog>
    </div>
  );
}

export default RowActions;
