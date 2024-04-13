"use client";

import { signIn, signOut } from "next-auth/react";

export const GoogleLogin = () => {
  const handleSignIn = () => {
    signIn("google");
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
    <button
      className="flex items-center gap-2 py-3 px-6 rounded-md font-bold text-2xl text-gray-400 bg-slate-900"
      onClick={() => signOut()}
    >
      {" "}
      <span className="text-sm">Logout</span> <span>😀</span>
    </button>
  );
};
