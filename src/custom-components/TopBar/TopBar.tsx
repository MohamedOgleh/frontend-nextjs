// import { MenuIcon } from "lucide-react";
import React, { ReactNode } from "react";
import { Aladin } from "next/font/google";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import CommandSearch from "./CommandSearch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, User2 } from "lucide-react";
const aladin = Aladin({ subsets: ["latin"], weight: "400" });

function TopBar() {
  return (
    <div className="flex items-center py-4 px-8 max-h-20 bg-[#e5f4fb] gap-12">
      {/* logo */}
      <div className={`${aladin.className} flex items-center gap-2`}>
        <Image src="/transparent_logo.png" alt="logo" width={54} height={54} />
        <Label className="text-3xl text-[#206187] ">TOGDHEER</Label>
        <span>
          <Label className="text-3xl text-[#ef2d48]">GYM</Label>
        </span>
      </div>
      {/* search */}
      <div className="self-start flex-grow ">
        <CommandSearch />
      </div>

      {/* rightIcons */}
      <div className="flex gap-7 items-center text-[#206187]">
        <Badge className=" w-auto bg-transparent">
          <Avatar className="mr-2 w-8 h-8">
            <AvatarImage src={`/male1.jpg`} alt="p" />
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
          <Label className={` text-[#206187] text-[1.2rem]`}>Ogleh</Label>
        </Badge>
        <div className="flex relative">
          <Bell />
          <Badge
            variant="outline"
            className="bg-[#ef2d48] h-5 w-5 flex justify-center items-center absolute left-3 bottom-3 text-white"
          >
            9+
          </Badge>
        </div>
        <User2 />
        <Settings />
      </div>
    </div>
  );
}

export default TopBar;
