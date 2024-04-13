"use client";

import React from "react";
import { Vendor } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { PenIcon, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  vendor: Vendor;
}

const RowActions = ({ vendor }: Props) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/dashboard/vendor/${vendor.bankAccountNumber}`);
  };

  const handleDelete = () => {};
  return (
    <div className="flex gap-5 w-10">
      <Button onClick={handleEdit} variant={"ghost"} size={"sm"}>
        <PenIcon size={18} />
      </Button>
      <Button onClick={handleEdit} variant={"ghost"} size={"sm"}>
        <Trash size={18} />
      </Button>
    </div>
  );
};

export default RowActions;
