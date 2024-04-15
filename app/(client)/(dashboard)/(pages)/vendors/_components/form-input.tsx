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
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface FormInputProps {
  form: any;
  isSubmitting: boolean;
  label?: string;
  placeholder: string;
  name: string;
  isEditing: boolean;
}

const FormInput = ({
  form,
  isSubmitting,
  label,
  placeholder,
  name,
  isEditing,
}: FormInputProps) => {
  return (
    <div className="p-4">
      {label && <p className="text-sm font-medium text-slate-500">{label}</p>}
      <div className="pt-2">
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  disabled={isSubmitting || !isEditing}
                  placeholder={placeholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default FormInput;
