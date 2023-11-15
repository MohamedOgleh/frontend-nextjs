import React from "react";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "700" });

function TopBar() {
  return (
    <div className="bg-blue-400 h-[70px] flex items-center justify-between">
      <div>
        <div
          className={`${roboto.className} flex text-2xl items-center gap-2 ml-4`}
        >
          <Menu className="text-3xl text-white" />
          <h1>TOGDHEER</h1>
          <span className="text-red-500 ">
            <h1>GYM</h1>
          </span>
        </div>
      </div>
      {/* center-search */}
      <div className="flex">
        <Input
          type="email"
          placeholder="Search"
          className="rounded-r-none w-72 focus-visible:border-none"
        />
        <Button size="icon" role="combobox" className="rounded-l-none hover:bg-blue-500 ">
          <Search />
        </Button>
      </div>
      {/* right-side */}
      <div></div>
    </div>
  );
}

export default TopBar;
