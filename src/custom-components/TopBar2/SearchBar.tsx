"use client";
import React, { useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Smile, Calculator } from "lucide-react";

function SearchBar() {
  const [toggle, setToggle] = useState(true);
  
  return (
    <Command
      className={`${
        toggle ? "" : "relative top-12"
      }rounded-lg border shadow-sm `}>
      <CommandInput
        placeholder="Search by name or contacts..."
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
        }`}>
        <CommandEmpty>No results found...</CommandEmpty>
        <CommandGroup heading="Customers">
          {/* <SearchItem /> */}
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
  );
}

export default SearchBar;
