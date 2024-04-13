import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "@/prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET as string
    }),
  ],
})