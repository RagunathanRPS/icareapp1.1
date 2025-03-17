"use client";

import Image from "next/image";
import homeImge from "@/download/icareforexlogo.png";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 w-[100%] shadow-sm">
      <div className="flex-col gap-x-5">
        <Image src={homeImge} alt={""} height={"150"} width={"150"} />

        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href="/server">Profile</Link>
        </Button>

        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href="/client">Get Your IB Link </Link>
        </Button>

        <Button
          asChild
          variant={pathname === "/admin" ? "default" : "outline"}
        >
          <Link href="/admin"> IB Account Open History </Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};