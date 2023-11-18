// import { MenuIcon } from "lucide-react";
import React, { ReactNode } from "react";
import { TopBarItems } from "@/models/MenuItems";
import { Aladin } from "next/font/google";
import { Label } from "@/components/ui/label";
import Image from "next/image";
const aladin = Aladin({ subsets: ["latin"], weight: "400" });

function TopBar() {
  return (
    <div className="p-4" >
      {/* logo */}
      <div className={`${aladin.className} flex items-center gap-2`}>
        <Image src="/transparent_logo.png" alt="logo" width={54} height={54} />
        <Label className="text-3xl text-[#206187] ">TOGDHEER</Label>
        <span>
          <Label className="text-3xl text-[#ef2d48]">GYM</Label>
        </span>
      </div>
    </div>
  );
}

export default TopBar;
