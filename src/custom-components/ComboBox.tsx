'use client'
import React from "react";
interface Users {
  id: Number;
  name: String;
  username: String;
  gander: String;
  image: String;
  role: String;
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { Input } from "@/components/ui/input";
// import CustomInput from "./CustomInput";

// const fetchUsers = async (): Promise<Users[]> => {
//   const result = await fetch("http://localhost:4000/users");
//   return result.json();
// };

async function ComboBox() {
 // const users = await fetchUsers();

  return (
    <div>
      <DropdownMenu>
        <div className="flex bg-slate-100">
          <DropdownMenuTrigger asChild className="bg-red-500">
            {/* <CustomInput /> */}
            <Button>Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Accounts</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* <DropdownMenuGroup> */}
              {/* {users.map((user, index) => (
                <DropdownMenuItem
                // onClick={() =>
                // setUser({
                //   id: user.id,
                //   name: user.name,
                //   username: user.username,
                //   gander: user.gander,
                //   image: user.image,
                //   role: user.role,
                // })
                //  }
                >
                  <Avatar className="mr-2 h-8 w-8">
                    <AvatarImage src={`./${user.image}`} />
                    <AvatarFallback>{user.username.slice(0, 2)}</AvatarFallback>
                  </Avatar>

                  <span>{user.username}</span>
                  <DropdownMenuShortcut>{user.role}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))} */}
              {["1,2,3"].map((i) => (
                <DropdownMenuGroup>
                  <DropdownMenuItem>i</DropdownMenuItem>
                </DropdownMenuGroup>
              ))}
              {/* <DropdownMenuItem>Mo</DropdownMenuItem>
              

              <DropdownMenuItem>Mo</DropdownMenuItem> */}
            {/* </DropdownMenuGroup> */}
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
}

export default ComboBox;
