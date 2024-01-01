"use client"
import React, { useState } from 'react'
import Link from "next/link";
import {motion} from 'framer-motion'



export default function ProjectCard() {

  return (
    <div id="project">
    <div className="flex flex-col mt-16 items-center gap-4">
      <h1 className="font-semibold text-white text-[50px]">
        My Projects
      </h1>
    </div>
      <div className="grid grid-cols-2 gap-10 bg-inherit p-10">
        <div
          className=" hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-500/25 ">
          <div className="rounded-[10px] bg-inherit p-4 !pt-20 flex-row w-56 h-56 dark:bg-gray-900 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
              May 2023
            </time>

              <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                PortfolioNest
              </h3>

            <div className="mt-4 flex flex-wrap gap-1">
            <Link href="https://github.com/Surajh09/portfolionest_2">
              <div
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                >
                Github
              </div>
            </Link>
            <Link href="https://github.com/Surajh09/portfolioNest-updated">
              <div
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
              >
                Github-updated
              </div>
            </Link>
            </div>
          </div>
        </div>
        <div
          className=" hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-500/25 ">
          <div className="rounded-[10px] bg-inherit p-4 !pt-20 flex-row w-56 h-56 dark:bg-gray-900 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
              July 2023
            </time>

              <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                Cloud Lab
              </h3>

            <Link href="https://github.com/Surajh09/Cloud-Lab">
              <div className="mt-4 flex flex-wrap gap-1">
                <div
                  className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                  >
                  Github
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        <div
          className=" hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-500/25 ">
          <div className="rounded-[10px] bg-inherit p-4 !pt-20 flex-row w-56 h-56 dark:bg-gray-900 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
              Nov 2023
            </time>

              <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                Elegant Design
              </h3>

            <div className="mt-4 flex flex-wrap gap-1">
            <Link href="https://github.com/Surajh09/Elegant-Design">
              <div
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
              >
                Github
              </div>
            </Link>
            <Link href="https://elegant-design.onrender.com">
              <div
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
              >
                Demo
              </div>
            </Link>
            </div>
          </div>
        </div>

        <div
          className=" hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-500/25 ">
          <div className="rounded-[10px] bg-inherit p-4 !pt-20 flex-row w-56 h-56 dark:bg-gray-900 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
              Dec 2023
            </time>

            <Link href="https://github.com/Surajh09/Nextjs-Portfolio">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                Portfolio
              </h3>
            </Link>

            <div className="mt-4 flex flex-wrap gap-1">
              <div
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
              >
                Github
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

