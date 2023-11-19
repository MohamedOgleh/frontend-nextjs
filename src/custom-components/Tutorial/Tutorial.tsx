// "use client";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Calendar, Smile, Calculator, Badge } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import Profile from "./Profile";

function Tutorial() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="h-screen flex justify-center items-center  ">
      {/* <Profile/> */}
      {/* <div className="transition ease-out duration-1000  max-h-9">
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            placeholder="Type a command or search... "
            onFocus={() => {
              setToggle(false);
              console.log(toggle);
            }}
            onBlur={() => {
              setToggle(true);
              console.log(toggle);
            }}
          />
          <CommandList
            className={`${
              toggle
                ? " transition ease-out duration-1000 hidden "
                : "transition ease-in duration-1000"
            }`}
          >
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div> */}
    </div>
  );
}
{
  /* <CommandList className={`${}`}>
<CommandEmpty>No results found.</CommandEmpty>
<CommandGroup heading="Suggestions">
  <CommandItem>
    <Calendar className="mr-2 h-4 w-4" />
    <span>Calendar</span>
  </CommandItem>
  <CommandItem>
    <Smile className="mr-2 h-4 w-4" />
    <span>Search Emoji</span>
  </CommandItem>
  <CommandItem>
    <Calculator className="mr-2 h-4 w-4" />
    <span>Calculator</span>
  </CommandItem>
</CommandGroup>
</CommandList> */
}
export default Tutorial;
