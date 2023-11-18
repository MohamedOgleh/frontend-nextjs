import React from "react";
import { CommandItem, CommandShortcut } from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { UsersModel as User } from "@/models/UserModel";
import { Calendar } from "lucide-react";

const Users = async (): Promise<User[]> => {
  const result = fetch("http://localhost:4000/users", {
    next: { revalidate: 0 },
  });
  return (await result).json();
};

async function CommanItem() {
  const users = await Users();
  return (
    <div>
      {users.map((user) => (
        <CommandItem key={user.id}>
          <Avatar>
            <AvatarImage src={`/${user.image} `} alt="p" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-[1rem] text-muted-foreground ml-2">
            {user.username}
          </span>
          <CommandShortcut>{user.role}</CommandShortcut>
        </CommandItem>
      ))}
    </div>
  );
}

export default CommanItem;
