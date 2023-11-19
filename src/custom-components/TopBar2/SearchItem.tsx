import React from "react";
import { UsersModel as User } from "@/models/UserModel";
import { CommandItem, CommandShortcut } from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Users = async (): Promise<User[]> => {
  const result = fetch("http://localhost:4000/users", {
    next: { revalidate: 0 },
  });
  return (await result).json();
};
async function SearchItem() {
  const users = await Users();

  return (
    <div>
      {users.map((user) => (
        <CommandItem>
          <Avatar className="border-2 border-[#206187]">
            <AvatarImage src={`/${user.image} `} alt="p" />
            <AvatarFallback>
              {user.username.slice(0, 1).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-[1rem] text-[#206187] ml-3">
            {user.username}
          </span>
          <CommandShortcut>{`Contacts: ${user.role}`}</CommandShortcut>
        </CommandItem>
      ))}
    </div>
  );
}

export default SearchItem;
