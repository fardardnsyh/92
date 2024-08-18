import React from "react";
import { SidebarNavItem } from "@/types/nav-types";
import { usePathname } from "next/navigation";
import { Icons } from "@/utils/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  items: SidebarNavItem[];
};

const DashboardNav = ({ items }: Props) => {
  const path = usePathname();
  if (!items.length) return null;
  return (
    <nav className="size-full">
      {items.map((item, index) => {
        const iconKey = item?.icon as keyof typeof Icons;
        const Icon = Icons[iconKey || "list"];
        const isActive = path === item.href;
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 my-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  isActive ? "bg-accent" : "transparent",
                  item.disabled
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer"
                )}
              >
                <Icon className="w-4 h-4 mr-2" />
                {item.title}
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
};

export default DashboardNav;
