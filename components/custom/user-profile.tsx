import { auth, signOut } from "@/auth";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { ArrowBigDown, LogOut } from "lucide-react";
import { LogoutButton } from "./auth";
import { GoogleLoginIcon } from "./auth";

export const UserProfile = async () => {
  const session = await auth();

  if (!session?.user?.image) {
    return <GoogleLoginIcon />;
  }

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Image
            alt="profile image"
            src={session.user.image}
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          ></Image>
        </PopoverTrigger>
        <PopoverContent className="mr-10 mt-3">
          <div className="flex items-center gap-x-2">
            <Image
              alt="profile image"
              src={session.user.image}
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
            ></Image>
            <div className="truncate">
              <p className="text-sm font-medium leading-tight">
                {session.user.name}
              </p>
              <p className=" text-xs font-medium text-muted-foreground truncate">
                {session.user.email}
              </p>
            </div>
          </div>
          <div className="mt-3 border-t pt-3 text-muted-foreground">
            <LogoutButton />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
