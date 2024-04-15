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
    <div className="h-full xl:w-[80%] mx-auto">
      <Toaster />
      <div className="h-16 md:pl-72 fixed inset-y-0 w-full xl:w-[80%] z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex flex-col h-full justify-center  w-72 fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-72 pt-20 min-h-full">{children}</main>
    </div>
  );
};

export default Layout;
