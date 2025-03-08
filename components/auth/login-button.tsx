"use client";

import { Children } from "react";
import { useRouter } from "next/navigation";


interface LoingButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect",
  asChild?: boolean;
};

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild
}: LoingButtonProps) => {
  const router = useRouter();

  const onclick = () => {
  router.push("/auth/login");
  }

  if (mode === "modal") {
    return (
      <span>
        Todo: Implementation
      </span>
    )
  }

return (
  <span onClick={onclick} className="cursor-pointer"> 
  {children}
  </span>
);
};