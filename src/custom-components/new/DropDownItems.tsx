import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { UsersModel } from "@/models/UserModel";

const fecthUsers = async (): Promise<UsersModel[]> => {
  const result = await fetch("http://localhost:4000/users", {
    next: { revalidate: 0 },
  });
  return result.json();
};
async function DropDownItems() {
  const users = await fecthUsers();
  return (
    <div>
      {users.map((user, index) => (
        <DropdownMenuItem key={index}>
          <Avatar className="mr-2 h-8 w-8">
            <AvatarImage src={`./${user.image}`} />
            <AvatarFallback>{user.username.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <span>{user.username}</span>
          <DropdownMenuShortcut>{`Role: ${user.role}`}</DropdownMenuShortcut>
        </DropdownMenuItem>
      ))}
    </div>
  );
}

export default DropDownItems;
