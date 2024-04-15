import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface sidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: sidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname === href || pathname?.endsWith(`${href}/`);
  const changeRoute = () => router.push(href);

  return (
    <button
      type="button"
      onClick={changeRoute}
      className={cn(
        "flex items-center mx-3 my-1 rounded-lg text-sm font-semibold text-center gap-x-2 text-slate-500 pl-3 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-blue-700 hover:text-blue-700 bg-blue-200/20 hover:bg-blue-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-3">
        <Icon
          size={18}
          className={cn("text-slate-500", isActive && "text-blue-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-purple-700 h-full rounded-e",
          isActive && "opacity-100"
        )}
      ></div>
    </button>
  );
};

export default SidebarItem;
