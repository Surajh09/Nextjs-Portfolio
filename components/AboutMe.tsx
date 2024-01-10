import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col pt-10 items-center gap-4" id="about">
        <h1 className="font-semibold text-white text-5xl">About Me</h1>
      </div>
      <section className="overflow-hidden pb-12 lg:pt-20 lg:pb-10 bg-inherit">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/pic6.jpg"
                      width={500}
                      height={500}
                      quality={100}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/pic1.jpg"
                      width={800}
                      height={800}
                      quality={100}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/pic5.jpg"
                      width={500}
                      height={500}
                      quality={100}
                      alt=""
                      className="w-full rounded-full"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG circles here */}
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-4 lg:mt-0">
                <span className="block mb-4 text-gray-500 text-lg font-semibold text-primary">
                  Who am I?
                </span>
                <h2 className="mb-5 text-3xl font-bold text-blue-600 sm:text-[40px]/[48px]">
                  Versatile DevOps engineer and Software developer.
                </h2>
                <p className="mb-5 text-blue-300">
                  My name is{" "}
                  <span className="text-white font-bold">Suraj Hemnani</span> & I
                  am a versatile{" "}
                  <span className="text-white">DevOps engineer and software developer</span>,
                  seamlessly integrating development and operations to drive
                  automation and deliver scalable solutions. With a commitment
                  to continuous improvement, I navigate the dynamic intersection
                  of technology, ensuring efficient workflows for optimal performance.
                </p>
                <p className="mb-8 text-blue-300">
                  Passionate about innovation, I optimize processes and
                  contribute to the creation of scalable solutions, staying
                  current with industry trends to align my work with the
                  cutting edge of technology, and contribute to the creation of
                  scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
