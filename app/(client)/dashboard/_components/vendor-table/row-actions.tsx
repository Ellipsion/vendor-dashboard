"use client";

import React from "react";
import { Vendor } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { PenIcon, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Table } from "@tanstack/react-table";
import { deleteVendor } from "./actions";
import { useToast } from "@/components/ui/use-toast";
import DeleteVendorDialog from "@/components/custom/vendor-delete-dialog";

interface Props<TData> {
  vendor: Vendor;
  table: Table<TData>;
}

function RowActions<TData>({ vendor, table }: Props<TData>) {
  const router = useRouter();
  const { toast } = useToast();

  const handleEdit = () => {
    router.push(`/dashboard/vendor/${vendor.id}`);
  };

  const handleDelete = async () => {
    const res = await deleteVendor({ id: vendor.id });
    if (res) {
      router.refresh();
      toast({
        title: "Vendor deleted succesfully",
        description: `Vendor "${vendor.vendorName}" has been deleted.`,
      });
    } else {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex gap-5 w-10">
      <Button onClick={handleEdit} variant={"default"} size={"sm"}>
        <PenIcon size={16} strokeWidth={2} />
      </Button>
      <DeleteVendorDialog
        onContinue={handleDelete}
        vendorName={vendor.vendorName}
      >
        <Button variant={"ghost"} size={"sm"}>
          <Trash size={16} strokeWidth={1} />
        </Button>
      </DeleteVendorDialog>
    </div>
  );
}

export default RowActions;
