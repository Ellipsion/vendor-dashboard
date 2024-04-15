"use client";

import * as z from "zod";
// import axios from "axios";
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
import { LayoutDashboard } from "lucide-react";
import VendorForm from "../_components/vendor-form";

const CreateVendorPage = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Add Vendor</h1>
          <span>Complete all fields</span>
        </div>
      </div>

      <VendorForm create={true} />
    </div>
  );
};

export default CreateVendorPage;
