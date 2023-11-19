import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Profile from "../Tutorial/Profile";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function TopBar2() {
  return (
    // Parent
    <div className="flex items-center px-10 py-5 h-16 justify-between">
      {/* logo */}
      <Logo />
      {/* Search */}
      <div className="w-[700px]">
        <SearchBar />
      </div>
      {/* Right */}
      <div className="flex gap-3 items-center">
        <Profile />
        <Button
          size="icon"
          variant="ghost"
          className="flex relative hover:bg-blue-300 hover:text-white"
        >
          <Bell />
          <Badge
            variant="outline"
            className="bg-[#ef2d48] h-5 w-5 flex justify-center items-center absolute left-5 bottom-5 text-white"
          >
            9+
          </Badge>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-blue-300 hover:text-white"
        >
          <User2 />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-blue-300 hover:text-white"
        >
          <Settings />
        </Button>
      </div>
    </div>
  );
}

export default TopBar2;
