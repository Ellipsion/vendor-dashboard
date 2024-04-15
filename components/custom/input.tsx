import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-sm border text-neutral-600 border-blue-100 bg-white disabled:bg-transparent px-3 py-0 disabled:px-0 text-base disabled:font-medium ring-offset-background disabled:ring-transparent disabled:border-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:placeholder:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-text",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
