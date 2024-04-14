import React from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const session = await auth();

  // Protected Route
  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <Toaster />
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex flex-col h-full bg-gray-50 w-56 fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] min-h-full">{children}</main>
    </div>
  );
};

export default Layout;
