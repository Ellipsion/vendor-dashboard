"use client";

import * as z from "zod";
import axios from "axios";
import Link from "next/link";
// import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconBadge } from "@/components/custom/icon-badge";
import { Banknote, LayoutDashboard, Locate, LocateFixed } from "lucide-react";
import FormInput from "./form-input";
import { Vendor } from "@prisma/client";
import { useState } from "react";

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
  create: boolean;
  vendorId: string;
}

const VendorForm = ({ initialData, create, vendorId }: VendorFormProps) => {
  const [isEditing, setEditing] = useState<boolean>(create);
  const toggleEditMode = () => setEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vendorName: initialData.vendorName,
      bankName: initialData.bankName,
      bankAccountNumber: initialData.bankAccountNumber,
      addressLine1: initialData.addressLine1,
      addressLine2: initialData.addressLine2 || "",
      city: initialData.city || "",
      country: initialData.country || "",
      zipCode: initialData.zipCode || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const createData = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/vendors", values);
      const vendor = response?.data;
      //   toast.success("Course created");
      router.push(`/dashboard/vendors/${vendor?.id}`);
    } catch {
      //   toast.error("Something went wrong");
    }
  };

  const updateData = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.patch(`/api/vendors/${vendorId}`, values);
      const vendor = response?.data;
      toggleEditMode();
      //   toast.success("Vendor updated");
      router.refresh();
      // router.push(`/dashboard/vendors/${vendor?.id}`);
    } catch {
      //   toast.error("Something went wrong");
    }
  };

  const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
    if (create) {
      createData(values);
    } else {
      updateData(values);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
          onSubmit={form.handleSubmit(handleFormSubmit)}
        >
          <div>
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-2">
                <IconBadge icon={LayoutDashboard} />
                <h1 className="text-xl">Basic Details</h1>
              </div>
              {isEditing ? (
                <Button
                  type="button"
                  onClick={toggleEditMode}
                  variant={"destructive"}
                  size={"sm"}
                >
                  Cancel
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={toggleEditMode}
                  variant={"secondary"}
                  size={"sm"}
                >
                  Edit Vendor
                </Button>
              )}
            </div>
            <div className="mt-6 border bg-slate-100 rounded-md">
              <FormInput
                form={form}
                isSubmitting={isSubmitting}
                label="Name"
                placeholder="Vendor's Name"
                name="vendorName"
                isEditing={isEditing}
              />
            </div>
            <div className="mt-6 flex items-center gap-x-2">
              <IconBadge icon={Banknote} />
              <h1 className="text-xl">Bank Details</h1>
            </div>
            <div className="mt-6 border bg-slate-100 rounded-md">
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
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Locate} />
              <h1 className="text-xl">Additional Details</h1>
            </div>
            <div className="mt-6 border bg-slate-100 rounded-md">
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
            <div className="mt-10 border bg-slate-100 rounded-md">
              <div className="flex">
                <FormInput
                  form={form}
                  isSubmitting={isSubmitting}
                  label="Location"
                  placeholder="City"
                  name="city"
                  isEditing={isEditing}
                />
                <div className="mt-5 flex-1">
                  <FormInput
                    form={form}
                    isSubmitting={isSubmitting}
                    placeholder="Zip Code"
                    name="zipCode"
                    isEditing={isEditing}
                  />
                </div>
              </div>
              <FormInput
                form={form}
                isSubmitting={isSubmitting}
                placeholder="Country"
                name="country"
                isEditing={isEditing}
              />
            </div>
          </div>
          <div>
            {isEditing && (
              <Button
                type="submit"
                size="sm"
                disabled={!isValid || isSubmitting}
              >
                {create ? "Save" : "Update"}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default VendorForm;
