import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { Key, LogIn } from "lucide-react";
import ComboBox from "./ComboBox";
function LoginCard() {
  return (
    <div>
      <Card className="p-5">
        <CardTitle className="mb-2">
          <div className="flex gap-1">
            <Key />
            <h1 >Singin</h1>
          </div>
        </CardTitle>
        <CardDescription>
            choose your account from the drop down list bellow and enter your correct password
        </CardDescription>
        <CardContent>
            <ComboBox/>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginCard;
