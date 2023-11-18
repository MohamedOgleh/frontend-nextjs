import React from "react";
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
import CommanItem from "./CommanItem";

function CommandSearch() {
  return (
    <div className="flex">
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Search costumers by their names or contacts ..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Customers">
            <CommanItem />
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CommandSearch;
