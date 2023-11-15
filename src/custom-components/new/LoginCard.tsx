import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { ChevronDown, EyeOff, Key, LockKeyhole } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
function LoginCard() {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Image
              src="/transparent_logo.png"
              alt="logo"
              width={50}
              height={50}
            />
            <div>
              <CardTitle className="mb-1 ">Sing in</CardTitle>
              <CardDescription>Please login your account</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* all fields */}
          <div className="flex-col ">
            <Label className="text-muted-foreground">Username</Label>
            <div className="flex items-center border mb-2">
              <Input
                placeholder="Select your username"
                className="border-none"
              />
              <ChevronDown className="h-8 w-8 text-muted-foreground mr-2" />
            </div>
            <Label className="text-muted-foreground">Password</Label>
            <div className="flex items-center border">
              <Input
                type="password"
                placeholder="Enter password"
                className="border-none"
              />
              <Button
                variant="outline"
                size="icon"
                className="flex justify-center  items-center border-none"
              >
                <EyeOff className="h-6 w-5 text-muted-foreground mr-3" />
              </Button>
            </div>
            <Button variant="link" size="sm" className=" text-blue-500 mt-1">
              create new account
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="flex gap-2 bg-blue-500 flex-1 ">
            <Key className="h-4 w-4" />
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginCard;
