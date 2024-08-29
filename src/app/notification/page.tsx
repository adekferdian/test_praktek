"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pill from "@/assets/png/pill.png";
import Gold from "@/assets/png/gold_stack.png";
import Overtime from "@/assets/png/overtime.png";
import Fail from "@/assets/png/failed.png";
import Success from "@/assets/png/success.png";
import RightArrow from "@/assets/png/right_arrow.png";

const Notification = () => {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const [data, setData] = useState([
    {
      type: "Reimbursement",
      date: "Today",
      icon: Gold,
      isRead: true,
      status: "success",
      description:
        '<p>Your submission <span class="italic">"Lorem ipsum dolor sit amet..."</span> with the with a total cost of 50.000 has been <span class="font-bold">paid</span>, please check your BRIMO application, Thank you</p>',
    },
    {
      type: "Reimbursement",
      date: "Today",
      icon: Gold,
      isRead: false,
      status: "failed",
      description:
        '<p>Your submission "description" has been <span class="bold">rejected</span>, please click for details</p>',
    },
    {
      type: "Reimbursement",
      date: "2022-10-05",
      icon: Gold,
      isRead: false,
      status: "process",
      description:
        '<p>Your submission will be <span class="bold">processed</span> according to the reimbursement schedule. Please wait</p>',
    },
    {
      type: "Sickness",
      date: "2022-10-05",
      icon: Pill,
      isRead: false,
      status: "success",
      description:
        '<p>Your submission has been <span class="bold">approved</span> by the Superior</p>',
    },
    {
      type: "Sickness",
      date: "2022-10-05",
      icon: Pill,
      isRead: false,
      status: "failed",
      description:
        '<p>Your submission has been <span class="bold">rejected</span>, please confirm with your Superior</p>',
    },
    {
      type: "Sickness",
      date: "2022-10-05",
      icon: Pill,
      isRead: false,
      status: "process",
      description:
        '<p>Your submission has been <span class="bold">reviewed</span> to the Superior for the approval process, please wait</p>',
    },
    {
      type: "Overtime",
      date: "2022-10-05",
      icon: Overtime,
      isRead: false,
      status: "failed",
      description:
        '<p>Your submission has been <span class="bold">rejected</span>, please confirm with your Superior</p>',
    },
    {
      type: "Overtime",
      date: "2022-10-05",
      icon: Overtime,
      isRead: false,
      status: "failed",
      description:
        '<p>Your submission has been <span class="bold">reviewed</span> to the Superior for the approval process, please wait</p>',
    },
  ]);

  const handleRead = (index: number) => {
    data.find((item, idx) => {
      if (index === idx) {
        item.isRead = true;
      }
      forceUpdate();
    });
  };
  return (
    <div className="p-[50px] smartphone:px-[20px] flex flex-col gap-5 pb-[120px]">
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className={`flex flex-row gap-5 ${
            !item.isRead && "bg-blue"
          } cursor-pointer`}
          onClick={() => handleRead(index)}
        >
          <div className="min-w-[50px] min-h-[50px] max-h-[50px] rounded-2xl bg-gradient-to-r from-main to-secondary content-center relative">
            <Image
              src={item.icon}
              width={30}
              height={30}
              alt={`icon-${index + 1}`}
              className="ml-2 min-h-[30px] min-w-[30px]"
            />
            <Image
              src={
                item.status === "success"
                  ? Success
                  : item.status === "failed"
                  ? Fail
                  : RightArrow
              }
              width={17}
              height={17}
              alt={`icon-${index + 1}`}
              className="absolute right-0 bottom-0"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">{item.type}</p>
            <p
              className="leading-[22.4px]"
              dangerouslySetInnerHTML={{
                __html: item?.description,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
