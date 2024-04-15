import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="h-1/5 flex flex-col justify-end">
      <div className="flex w-full items-center gap-x-3">
        <span>Made with</span>
        <Image
          height={20}
          width={60}
          alt="next.js logo"
          src={"/next.svg"}
        ></Image>
        <span>by</span>
        <Link href={"https://github.com/Ellipsion"}>
          <Button className="p-0" size={"sm"} variant={"link"}>
            Ashish Kumawat
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
