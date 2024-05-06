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
  Delete,
  Landmark,
  MapPin,
  Pencil,
  Trash,
  User,
  X,
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
  initialData: Vendor;
  vendorId: string;
}

const EditVendorForm = ({ initialData, vendorId }: VendorFormProps) => {
  const [isEditing, setEditing] = useState(false);
  const toggleEditMode = () => setEditing((prev) => !prev);

  const router = useRouter();

  const { vendorName, bankAccountNumber, bankName, addressLine1 } = initialData;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vendorName,
      bankName,
      bankAccountNumber,
      addressLine1,
      addressLine2: initialData?.addressLine2 || "",
      city: initialData?.city || "",
      country: initialData?.country || "",
      zipCode: initialData?.zipCode || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.patch(`/api/vendors/${vendorId}`, values);
      const vendor = response?.data;
      toast.success("Vendor updated");
      router.refresh();
      toggleEditMode();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleCancel = () => {
    toggleEditMode();
    router.refresh();
  };

  const handleDelete = async () => {
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
    <>
      <div className="absolute p-5 w-10 h-full -top-24 right-20 md:top-0 md:-right-20">
        <div className="h-full w-28 md:w-fit flex md:flex-col gap-5">
          <>
            {!isEditing ? (
              <Button
                className="rounded-full shadow hover:pb-1 transition-all"
                size={"icon"}
                variant={"default"}
                onClick={toggleEditMode}
              >
                <Pencil size={18} />
              </Button>
            ) : (
              <Button
                className="rounded-full shadow hover:pb-1 transition-all bg-rose-400"
                size={"icon"}
                variant={"destructive"}
                onClick={handleCancel}
              >
                <X size={18} />
              </Button>
            )}
          </>
          <Button
            className="rounded-full shadow group  hover:pb-1 transition-all bg-white"
            size={"icon"}
            variant={"ghost"}
          >
            <Trash size={18} className="group-hover:stroke-rose-600" />
          </Button>
        </div>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            <div className="space-y-6">
              <FormInput
                form={form}
                label="Name"
                placeholder="Enter Vendor Name"
                name="vendorName"
              />
              <div className="flex flex-col md:flex-row gap-y-6 gap-x-4">
                <FormInput
                  form={form}
                  label="Bank"
                  placeholder="Enter Bank Name"
                  name="bankName"
                />
                <FormInput
                  form={form}
                  label="Account Number"
                  placeholder="Enter Bank Account Number"
                  name="bankAccountNumber"
                />
              </div>
              <FormInput
                form={form}
                label="Address Line 1"
                placeholder="Street Address"
                name="addressLine1"
              />
              <FormInput
                form={form}
                label="Address Line 2 (optional)"
                placeholder="Landmark..."
                name="addressLine2"
              />
              <div className="flex space-x-4">
                <FormInput
                  form={form}
                  label="City"
                  placeholder="Enter City Name"
                  name="city"
                />
                <FormInput
                  form={form}
                  label="Country"
                  placeholder="Select Country"
                  name="country"
                />
                <FormInput
                  form={form}
                  label="Zip Code"
                  placeholder="Enter Zip Code"
                  name="zipCode"
                />
              </div>
            </div>
            {isEditing && (
              <div className="mt-10 flex gap-x-2">
                <Button
                  type="submit"
                  size={"sm"}
                  className="text-xs font-normal tracking-wide"
                  disabled={isSubmitting}
                >
                  Update Vendor
                </Button>
                <Button
                  type="button"
                  size={"sm"}
                  variant={"secondary"}
                  disabled={isSubmitting}
                  className="text-xs"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            )}
          </form>
        </Form>
      </div>
    </>
  );
};

export default EditVendorForm;
