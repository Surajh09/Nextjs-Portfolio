"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "../constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export default function Skills(){

  const SkillData = [
    {
      name: "Django",
      Image: "/django.png",
      width: 80,
      height: 80,
    },
    {
      name: "Golang",
      Image: "/golang.png",
      width: 80,
      height: 80,
    },
    {
      name: "JavaScript",
      Image: "/js.png",
      width: 65,
      height: 65,
    },
    {
      name: "Tailwind Css",
      Image: "/tailwind.png",
      width: 80,
      height: 80,
    },
    {
      name: "React",
      Image: "/react.png",
      width: 80,
      height: 80,
    },
    {
      name: "Java",
      Image: "/java.png",
      width: 80,
      height: 80,
    },
  
    {
      name: "TypeScript",
      Image: "/ts.png",
      width: 80,
      height: 80,
    },
    {
      name: "Next js 13",
      Image: "/next.png",
      width: 80,
      height: 80,
    },
    {
      name: "Framer Motion",
      Image: "/framer.png",
      width: 80,
      height: 80,
    },
    {
      name: "Node js",
      Image: "/node-js.png",
      width: 80,
      height: 80,
    },
    {
      name: "Mongo db",
      Image: "/mongodb.png",
      width: 40,
      height: 40,
    },
    {
      name: "Tensorflow",
      Image: "/tensorflow.png",
      width: 80,
      height: 80,
    },
    {
      name: "Rust",
      Image: "/rust.svg",
      width: 80,
      height: 80,
    },
    {
      name: "Python",
      Image: "/python.png",
      width: 80,
      height: 80,
    },
  ];

    return(
        
  <div id="skills" className="h-screen w-screen flex items-center bg-inherit justify-center">
    <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold text-white text-[50px]">
          Skills{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            &{" "}
          </span>
          Technologies
        </h1>
        <p className="text-gray-400 text-[20px]">
          Using the latest tech this world has to offer
        </p>
      </div>
      <Swiper 
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
    )
}
