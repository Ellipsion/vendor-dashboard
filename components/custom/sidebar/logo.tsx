import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex justify-center">
      {/* <Image height={60} width={100} alt="logo" src={"/logo.svg"} /> */}
      <Link href={"/"}>
        <h1 className="text-4xl capitalize font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent  font-mono ">
          vendora
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
