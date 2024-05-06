"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/custom/input";
import { UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormInputProps {
  form: any;
  label?: string;
  placeholder: string;
  name: string;
  disabled: boolean;
}

const FormInput = ({
  form,
  label,
  placeholder,
  name,
  disabled,
}: FormInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>
            <p className="text-xs font-medium mb-2">{label}</p>
          </FormLabel>
          <FormControl>
            <Input
              disabled={disabled}
              className="w-full"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage className="text-xs font-normal" />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
