"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, LogOut, Trello, Settings } from "react-feather";

const Footer = () => {
  const pathname = usePathname();
  const menuFooter = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/attendance",
      name: "Attendance",
    },
    {
      href: "/checkout",
      name: "Checkout",
    },
    {
      href: "/form",
      name: "Form",
    },
    {
      href: "/setting",
      name: "Setting",
    },
  ];

  return (
    <div className="fixed bottom-0 w-full px-[50px] flex flex-row justify-between py-2 shadow-2xl shadow-black z-50 bg-[white]">
      {menuFooter.map((item: any, index: number) => (
        <Link
          href={item.href}
          key={index}
          className="flex flex-col gap-2 items-center"
        >
          <div
            className={`${
              pathname === "/" && index === 0
                ? "text-main"
                : pathname === "/attendance" && index === 1
                ? "text-main"
                : pathname === "/checkout" && index === 2
                ? "text-main"
                : pathname === "/form" && index === 3
                ? "text-main"
                : pathname === "/setting" && index === 4
                ? "text-main"
                : null
            }`}
          >
            {index === 0 ? (
              <Home width={30} height={30} />
            ) : index === 1 ? (
              <Calendar width={30} height={30} />
            ) : index === 2 ? (
              <div className="-mt-[35px] bg-main rounded-[50px] w-[60px] h-[60px] justify-center flex">
                <LogOut
                  width={30}
                  height={30}
                  className="text-white text-center mt-[15px]"
                />
              </div>
            ) : index === 3 ? (
              <Trello width={30} height={30} />
            ) : index === 4 ? (
              <Settings width={30} height={30} />
            ) : null}
          </div>
          <p className="smartphone:text-[12px] desktop:text-[16px]">
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
