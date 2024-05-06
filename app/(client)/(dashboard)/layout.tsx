import React from "react";
import Navbar from "@/components/custom/navbar";
import Sidebar from "@/components/custom/sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

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
      <div className="h-16 fixed inset-y-0 w-full xl:w-[80%] z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex flex-col h-full justify-center w-64 xl:w-72 fixed inset-y-0 z-40">
        <Sidebar />
      </div>
      <main className="md:pl-64 xl:pl-72 pt-20 min-h-full">{children}</main>
    </div>
  );
};

export default Layout;
