"use client";

import { LogOut } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";

export const GoogleLogin = () => {
  const handleSignIn = async () => {
    await signIn("google");
    console.log("success");
  };
  return (
    <button
      // className="flex w-full justify-center mb-5 items-center gap-2 py-3 px-6 rounded-md font-bold text-2xl text-gray-400 bg-slate-900"
      className="flex w-full justify-center mb-5 items-center gap-2 py-3 px-6 rounded-md font-bold text-2xl text-gray-900 bg-slate-500"
      onClick={handleSignIn}
    >
      <span className="text-sm">Login with Google</span> <span>🔥</span>
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <Button
      className="text-muted-foreground"
      onClick={() => signOut()}
      variant={"ghost"}
    >
      Logout <LogOut size={15} className="stroke-muted-foreground mx-2" />
    </Button>
  );
};
