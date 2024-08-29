"use client";
import Image from "next/image";
import React from "react";
import UserLogo from "@/assets/png/user_logo.png";
import { Clock, RotateCw, AlertCircle } from "react-feather";

const UserHome = () => {
  return (
    <div className="flex desktop:flex-row smartphone:flex-col tablet:flex-col desktop:gap-[220px] smartphone:gap-[30px] tablet:gap-[30px]">
      <div className="bg-gradient-to-r from-main to-secondary rounded-xl w-full p-4 text-white shadow-sm shadow-black flex flex-col gap-2">
        <div className="flex flex-row justify-between text-[white]">
          <div className="flex flex-row gap-4">
            <Image src={UserLogo} width={70} height={70} alt="user-logo" />
            <div className="flex flex-col">
              <p className="text-[16px] font-bold">Tabay</p>
              <p className="italic text-[12px] font-light">UI/UX Designer</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="italic text-[12px] text-end font-light">
              Member since
            </p>
            <p className="text-[16px] font-bold">01 Juni 2021</p>
          </div>
        </div>
        <div className="flex flex-row justify-between text-[white]">
          <div className="flex flex-col">
            <p className="font-light">Location</p>
            <p className="text-[16px] font-bold">Kantor Sahid</p>
          </div>
          <div className="flex flex-col justify-end">
            <p>ICO</p>
          </div>
        </div>
      </div>
      <div className="w-full p-4 flex flex-col gap-2 border border-light rounded-lg shadow-sm shadow-black">
        <p className="font-semibold text-[16px]">Today's activity</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2 items-center">
            <Clock width={30} height={30} className="text-main" />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[14px] text-center">08:30</p>
              <p className="font-light text-[14px] text-center">Check In</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="relative">
              <RotateCw width={30} height={30} className="text-main" />
              <p className="absolute top-1 left-[10px] text-main">8</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-main text-[20px] leading-[19.6px] font-bold">
                03:00:00
              </p>
              <p className="font-light text-[14px]">Working Hours</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <AlertCircle
              width={30}
              height={30}
              className="text-main text-center"
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[14px] text-center">--:--</p>
              <p className="font-light text-[14px]">Working Hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
