import React from "react";
import {
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UsersModel as User } from "@/models/UserModel";

const Users = async (): Promise<User[]> => {
  const result = fetch("http://localhost:4000/users", {
    next: { revalidate: 0 },
  });
  return (await result).json();
};

async function ListItem() {
  const users = await Users();
  return (
    <div>
      {users.map((user) => (
        <CommandItem>
          <Avatar>
            <AvatarImage src={`/${user.image} `} alt="p" />
            <AvatarFallback>
              {user.username.slice(0, 1).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-[1rem] text-muted-foreground ml-2">
            {user.username}
          </span>
          <CommandShortcut>{`Contacts: ${user.role}`}</CommandShortcut>
        </CommandItem>
      ))}
    </div>
  );
}

export default ListItem;
