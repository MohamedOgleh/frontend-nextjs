"use client";
import React from "react";
import { SideBarItems as Items } from "@/models/MenuItems";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function SideBar() {
  return (
    <div className="w-60 h-screen   flex flex-col">
      {/* Major */}
      <div className="flex flex-col w-full items-center gap-3 text-[#206187] p-3 mt-8">
        <Label className="self-start text-md text-muted-foreground mr-2">
          Customer care
        </Label>
        <Separator />
        {Items.map((item) => (
          <Button
            variant="outline"
            className="flex justify-start gap-2 w-[90%] border-none text-[1rem] bg-transparent
          hover:bg-blue-300 hover:text-white focus:bg-[#ef2d48] focus:text-white"
          >
            {item.icon}
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
