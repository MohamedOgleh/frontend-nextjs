"use client";

import { Input } from "@/components/ui/input";
// import { UsersModel } from "@/models/UserModel";
import { UsersModel as User } from "@/models/UserModel";
import React, { useState } from "react";

// interface User {
//   username: String;
// }
function CustomInput() {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    username: "",
    gander: "",
    image: "",
    role: "",
  });

  return <Input placeholder="choose your account" value={`${user.username}`} />;
}

export default CustomInput;
