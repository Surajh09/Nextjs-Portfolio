"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from"react";

export default function MultiLayerParallax(){

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress,[0,1],["0%","100%"]);
    const textY = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);

    return(
<div className="w-screen overflow-hidden grid h-screen relative">
    <motion.div
    className="flex items-center w-full h-full"
    ref={ref}
    >
    <motion.div style={{y: textY}} className="pl-20 md:pl-40 w-full z-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[700px]">
      <motion.h1 className="text-[50px] text-white font-semibold">
        Make anything possible it &apos s
        <motion.span className="text-transparent font-open-sans bg-clip-text bg-[#113360]">
          {" "}
           Suraj Hemnani
        </motion.span>
      </motion.h1>
    </motion.div>
  </motion.div>
        <div className="absolute inset-0 z-40"
        style={{
            backgroundImage:"url(/main-bg-bottom.png)",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
        }}
        />
        <div className="absolute inset-0 z-0"
        style={{
            backgroundImage:"url(/main-bg.png)",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
        }}
        />
</div>
    )
}
