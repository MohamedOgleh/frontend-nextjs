import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import ListItem from "./CommanItem";

function CommandSearch() {
  return (
    <div>
      <Command className="rounded-lg border shadow-sm ">
        <CommandInput placeholder="Search costumers by their names or contacts ..." />
        <CommandList>
          <CommandEmpty>No customer found...</CommandEmpty>
          <CommandGroup heading="Customers">
            <ListItem />
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CommandSearch;
