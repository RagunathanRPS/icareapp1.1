import Image from "next/image";
import homeImge from "@/download/icareforexlogo.png";

import { Quicksand } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Quicksand({
  subsets: ["latin"],
  weight: ["700"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ 
  label,
}: HeaderProps) => {
  return(
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className, )}>
        
        <Image 
          src={homeImge}
          alt={""}
          height={"200"}
          width={"200"}
        />
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  )
}