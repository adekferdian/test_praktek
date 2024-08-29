"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserLogo from "@/assets/png/user_logo.png";

const News = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 4500,
    slidesToShow: 2.25,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "10px",
    className: "center",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [bannerData] = useState([
    {
      name: "Ana Riswati",
      day: "Senin",
      date: "30 Mei 2022",
      description1: "Kalimat 1 - Lorep ipsum dolor sit amet consesca dolor",
      description2: "Kalimat 2 - Lorep ipsum dolor sit amet consesca dolor",
      description3: "Kalimat 3 - Lorep ipsum dolor sit amet consesca dolor",
      description4: "Kalimat 4 - Lorep ipsum dolor sit amet consesca dolor",
    },
    {
      name: "Riswati Ana",
      day: "Selasa",
      date: "31 Mei 2022",
      description1: "Kalimat 1 - Lorep ipsum dolor sit amet consesca dolor",
      description2: "Kalimat 2 - Lorep ipsum dolor sit amet consesca dolor",
      description3: "Kalimat 3 - Lorep ipsum dolor sit amet consesca dolor",
      description4: "Kalimat 4 - Lorep ipsum dolor sit amet consesca dolor",
    },
    {
      name: "Ana Fathila",
      day: "Senin",
      date: "1 Juni 2022",
      description1: "Kalimat 1 - Lorep ipsum dolor sit amet consesca dolor",
      description2: "Kalimat 2 - Lorep ipsum dolor sit amet consesca dolor",
      description3: "Kalimat 3 - Lorep ipsum dolor sit amet consesca dolor",
      description4: "Kalimat 4 - Lorep ipsum dolor sit amet consesca dolor",
    },
  ]);

  return (
    <div className="w-full mt-5 flex flex-col gap-1">
      <h1 className="font-bold text-[20px]">PCS News</h1>
      <Slider {...sliderSettings}>
        {bannerData.map((data: any, index: number) => (
          <div key={index}>
            <div className="bg-[white] shadow-sm shadow-black rounded-xl my-2 ml-2 p-4 flex flex-col gap-2 smartphone:w-[98%] tablet:w-[98%]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-4">
                  <Image
                    src={UserLogo}
                    width={70}
                    height={70}
                    alt="user-logo"
                  />
                  <div className="flex flex-col">
                    <p className="text-[16px] font-bold text-main">Tabay</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="italic text-[12px] text-end font-light">
                    Senin
                  </p>
                  <p className="text-[16px] font-bold">30 Mei 2022</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>{data.description1}</p>
                <p>{data.description2}</p>
                <p>{data.description3}</p>
                <p>{data.description4}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
