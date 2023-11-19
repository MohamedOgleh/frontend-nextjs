import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Label } from "@/components/ui/label";
import { Noto_Serif_Balinese } from "next/font/google";

const noto = Noto_Serif_Balinese({ subsets: ["latin-ext"], weight: "400" });

import React from "react";

function Profile() {
  return (
    <div className="bg-transparent max-w-lg w-44 px-2 overflow-hidden flex items-center ">
      <Avatar className="mr-2 w-8 h-8 border-2 border-[#206187] box-content ">
        <AvatarImage src={`/male1.jpg`} alt="p" />
        <AvatarFallback>MO</AvatarFallback>
      </Avatar>
      <Label
        className={`${noto.className} text-[#206187] text-[1.1rem] w-4 underline`}
      >
        Oglehasdsfsdffsfsasdasda
      </Label>
    </div>
  );
}

export default Profile;
