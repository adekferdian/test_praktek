import React from "react";
import UserHome from "@/components/home/User";
import News from "@/components/home/News";
import OnlineUser from "@/components/home/onlineUser/OnlineUser";

export default function Home() {
  return (
    <div className="p-[50px] smartphone:px-[20px] relative flex flex-col desktop:gap-[50px] smartphone:gap-[30px] tablet:gap-[30px] pb-[100px]">
      <div className="flex flex-col gap-5">
        <p>Hi, Good Morning!</p>
        <UserHome />
      </div>
      <News />
      <OnlineUser />
    </div>
  );
}
