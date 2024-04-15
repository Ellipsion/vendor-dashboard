import React from "react";
import Navbar from "@/components/custom/navbar";
import Sidebar from "@/components/custom/sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/custom/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  return (
    <div className="h-screen xl:w-[80%] mx-auto ">
      <Toaster />
      <div className="h-16 fixed inset-y-0 w-full xl:w-[80%] z-50">
        <Navbar />
      </div>
      <main className="h-screen">{children}</main>
    </div>
  );
};

export default Layout;
