import React from "react";
import LoginCard from "@/custom-components/new/LoginCard";

function LoginPage() {
  return (
    <div className="bg-gray-100  h-screen grid grid-cols-2 place-items-center">
      <div>
        <img src="../login_svg.svg" alt="side" className="h-[400px]  gap-0" />
      </div>
      <div>
        <div className="bg-white h-[400px] w-[400px]">
        <LoginCard/>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
