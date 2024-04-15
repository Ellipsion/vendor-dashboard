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
  isSubmitting: boolean;
  label?: string;
  placeholder: string;
  name: string;
  isEditing: boolean;
  isLarge?: boolean;
}

const FormInput = ({
  form,
  isSubmitting,
  label,
  placeholder,
  name,
  isEditing,
  isLarge,
}: FormInputProps) => {
  return (
    <div
      className={cn(
        "relative flex items-center w-full",
        isEditing && "h-12 mt-5"
      )}
    >
      <div className="w-full">
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn("w-full", isLarge && "text-xl")}
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
      {label && (
        <p
          className={cn(
            "absolute -top-4 left-2 w-full text-sm font-medium text-slate-500 transition-all opacity-0",
            isEditing && "opacity-100"
          )}
        >
          {label}
        </p>
      )}
    </div>
  );
};

export default FormInput;
