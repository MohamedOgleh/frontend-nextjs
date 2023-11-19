import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import { Badge } from "lucide-react";
import React from "react";

function Profile() {
  return (
    <div>
      <Badge className=" w-auto ">
        <Avatar className="mr-2 w-8 h-8">
          <AvatarImage src={`/male1.jpg`} alt="p" />
          <AvatarFallback>MO</AvatarFallback>
        </Avatar>
        <Label className={`text-[#206187] text-[1.2rem]`}>Ogleh</Label>
      </Badge>
    </div>
  );
}

export default Profile;
