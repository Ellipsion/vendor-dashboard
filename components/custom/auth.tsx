"use client";

import { LogOut } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";

export const GoogleLogin = () => {
  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };
  return (
    <Button variant={"outline"} onClick={handleSignIn}>
      <span className="text-sm mx-2">Login with Google</span>{" "}
      <Image
        width={20}
        height={20}
        alt="google logo"
        src={"/google-icon-logo.svg"}
      ></Image>
    </Button>
  );
};

export const GoogleLoginIcon = () => {
  const handleSignIn = async () => {
    await signIn("google");
  };
  return (
    <Button variant={"ghost"} size={"icon"} onClick={handleSignIn}>
      <Image
        alt="profile image"
        src={"/google-icon-logo.svg"}
        width={20}
        height={20}
        className="rounded-full cursor-pointer"
      ></Image>
    </Button>
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
