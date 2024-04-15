"use client";

import * as z from "zod";
import axios from "axios";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconBadge } from "@/components/custom/icon-badge";
import {
  CheckCircle2,
  Landmark,
  MapPin,
  Pencil,
  Trash,
  User,
} from "lucide-react";
import FormInput from "./form-input";
import { Vendor } from "@prisma/client";
import { useState } from "react";
import DeleteVendorDialog from "@/components/custom/delete-vendor-dialog";
import { deleteVendor } from "../../../_components/vendor-table/actions";

const formSchema = z.object({
  vendorName: z.string().min(1, { message: "Name is required" }),
  bankName: z.string().min(2, { message: "It is a required field" }),
  bankAccountNumber: z.string().min(2, { message: "It is a required field" }),
  addressLine1: z.string().min(2, { message: "It is a required field" }),
  addressLine2: z.string(),
  city: z.string(),
  country: z.string(),
  zipCode: z.string(),
});

interface VendorFormProps {
  initialData?: Vendor;
  create: boolean;
  vendorId?: string;
}

const VendorForm = ({ initialData, create, vendorId }: VendorFormProps) => {
  const [isEditing, setEditing] = useState<boolean>(create);
  const toggleEditMode = () => setEditing((current) => !current);

  const vendorName = initialData ? initialData.vendorName : "";

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vendorName: initialData?.vendorName || "",
      bankName: initialData?.bankName || "",
      bankAccountNumber: initialData?.bankAccountNumber || "",
      addressLine1: initialData?.addressLine1 || "",
      addressLine2: initialData?.addressLine2 || "",
      city: initialData?.city || "",
      country: initialData?.country || "",
      zipCode: initialData?.zipCode || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const createData = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/vendors", values);
      const vendor = response?.data;
      toast.success("Vendor created");
      router.push(`/vendors/${vendor?.id}`);
    } catch {
      toast.error("Something went wrong");
    }
  };

  const updateData = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.patch(`/api/vendors/${vendorId}`, values);
      const vendor = response?.data;
      toggleEditMode();
      toast.success("Vendor updated");
      router.refresh();
      router.push(`/vendors/${vendor?.id}`);
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
    if (create) {
      createData(values);
    } else {
      updateData(values);
    }
  };

  const handleDelete = async () => {
    if (!vendorId) {
      return;
    }
    const res = await deleteVendor({ id: vendorId });
    if (res) {
      router.replace("/dashboard");
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
              &quot;{vendorName}&quot; has been deleted.
            </p>
          </div>
        </div>
      );
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form className="p-2" onSubmit={form.handleSubmit(handleFormSubmit)}>
          <div>
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-x-2">
              <div className="flex items-center gap-x-5">
                <IconBadge icon={User} />
                <FormInput
                  form={form}
                  isSubmitting={isSubmitting}
                  label="Name"
                  placeholder="Vendor's Name"
                  name="vendorName"
                  isEditing={isEditing}
                  isLarge={true}
                />
              </div>
              <div className="flex w-full mb-10 md:mb-0 md:w-fit justify-end space-x-5">
                {!create &&
                  (isEditing ? (
                    <Button
                      type="button"
                      onClick={toggleEditMode}
                      variant={"destructive"}
                      size={"sm"}
                    >
                      Cancel
                    </Button>
                  ) : (
                    <>
                      <Button
                        type="button"
                        onClick={toggleEditMode}
                        variant={"secondary"}
                        size={"sm"}
                      >
                        <Pencil size={15} />
                        <span className="mx-1">Edit Vendor</span>
                      </Button>
                      <DeleteVendorDialog
                        onContinue={handleDelete}
                        vendorName={vendorName}
                      >
                        <Trash className="" size={16} strokeWidth={1} />
                      </DeleteVendorDialog>
                    </>
                  ))}
              </div>
            </div>
            <div className="mt-10 flex items-center gap-x-2 md:w-1/2">
              <Landmark size={15} className="stroke-muted-foreground" />
              <h1 className="text-sm leading-tight text-muted-foreground">
                Bank Details
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 md:w-1/2 ml-1 ">
              <FormInput
                form={form}
                isSubmitting={isSubmitting}
                label="Bank Name"
                placeholder="e.g. State Bank of India"
                name="bankName"
                isEditing={isEditing}
              />
              <FormInput
                form={form}
                isSubmitting={isSubmitting}
                label="Bank Account Number"
                placeholder="xxxx"
                name="bankAccountNumber"
                isEditing={isEditing}
              />
            </div>
          </div>
          <div>
            <div className="mt-10 flex items-center gap-x-2">
              <MapPin size={15} className="stroke-muted-foreground" />
              <h1 className="text-sm leading-tight text-muted-foreground">
                Address
              </h1>
            </div>
            <div className=" mt-1 flex flex-col md:flex-row gap-x-2 md:w-1/2">
              <FormInput
                form={form}
                isSubmitting={isSubmitting}
                label="Address Line 1"
                placeholder="Street address"
                name="addressLine1"
                isEditing={isEditing}
              />
              <FormInput
                form={form}
                isSubmitting={isSubmitting}
                label="Address Line 2"
                placeholder="Any landmark"
                name="addressLine2"
                isEditing={isEditing}
              />
            </div>

            <div className="flex  gap-x-2 md:w-1/2">
              <FormInput
                form={form}
                isSubmitting={isSubmitting}
                label="City"
                placeholder="City"
                name="city"
                isEditing={isEditing}
              />

              <FormInput
                form={form}
                isSubmitting={isSubmitting}
                placeholder="Zip Code"
                name="zipCode"
                label="Zip Code"
                isEditing={isEditing}
              />
            </div>
            <div className="flex flex-col md:flex-row md:w-1/2">
              <FormInput
                form={form}
                isSubmitting={isSubmitting}
                placeholder="Country"
                label="Country"
                name="country"
                isEditing={isEditing}
              />
            </div>
          </div>
          <div className="mt-5 w-full md:w-1/4">
            {isEditing && (
              <Button
                type="submit"
                className="w-full"
                disabled={!isValid || isSubmitting}
              >
                {create ? "Add" : "Update"}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default VendorForm;
