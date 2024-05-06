"use client";

import * as z from "zod";
import axios from "axios";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "./form-input";
import { Vendor } from "@prisma/client";

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

const VendorForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { isSubmitting, isValid } = form.formState;

  const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/vendors", values);
      const vendor = response?.data;
      toast.success("Vendor created");
      router.push(`/vendors/${vendor?.id}`);
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleCancel = () => {
    router.push("/dashboard");
  };

  return (
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
          <div className="mt-10 flex gap-x-2">
            <Button
              type="submit"
              size={"sm"}
              className="text-xs font-normal tracking-wide"
              disabled={isSubmitting}
            >
              Add Vendor
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
        </form>
      </Form>
    </div>
  );
};

export default VendorForm;
