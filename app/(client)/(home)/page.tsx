import Image from "next/image";
import { GoogleLogin, LogoutButton } from "@/components/custom/auth";
import { auth } from "@/auth";
import Navbar from "@/components/custom/navbar";
import Logo from "@/components/custom/sidebar/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/custom/footer";

export default async function Home() {
  const session = await auth();

  return (
    <div className="h-full flex flex-col p-10 items-center justify-center">
      <h1 className="text-[6rem] capitalize font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent  font-mono ">
        vendora
      </h1>
      <div>
        {session?.user ? (
          <Link href={"/dashboard"}>
            <Button variant={"outline"}>Dashboard</Button>
          </Link>
        ) : (
          <GoogleLogin />
        )}
      </div>
      <Footer />
    </div>
  );
}
