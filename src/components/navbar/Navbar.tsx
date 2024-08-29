"use client";
import React from "react";
import Link from "next/link";
import { Bell, Circle } from "react-feather";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "react-feather";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onBack = () => {
    router.back();
  };
  return (
    <header className="bg-white">
      {pathname === "/notification" ? (
        <nav className="w-full px-[50px] smartphone:px-[20px] flex flex-row justify-between py-5 shadow-xl shadow-black">
          <div className="flex flex-row gap-5 items-center" onClick={onBack}>
            <ArrowLeft width={20} height={20} />
            <p className="text-secondary font-bold text-[20px]">Notification</p>
          </div>
        </nav>
      ) : (
        <nav className="w-full px-[50px] smartphone:px-[20px] flex flex-row justify-between py-5 shadow-sm shadow-black">
          <p className="font-poppins text-main font-bold text-[36px]">
            Kerja Yuk!
          </p>
          <Link href="/notification" className="relative mt-3">
            <Bell width={30} height={30} />
            <Circle
              width={10}
              height={10}
              className="absolute top-0 right-1 bg-main rounded-lg border-main"
            />
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
