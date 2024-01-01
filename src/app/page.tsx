"use client";
import React from "react";
import MultiLayerParallax from '/components/MultiLayerParallax';
import Skills from '/components/Skills';
import ProjectCard from '/components/ProjectCard';
import AboutMe from '/components/AboutMe';
import Experince from '/components/Experince';
import ContactForm from '/components/ContactForm';

export default function Home() {

  

  return (
    <>
      <div className="bg-[#081623]">
          <MultiLayerParallax />
          <AboutMe />
          <hr className="h-px w-full border-0 bg-gray-600" />
          <Skills />
          <hr className="h-px w-full border-0 bg-gray-600" />
          <div className="flex justify-evenly w-screen ">
          <ProjectCard />
          </div>
          <hr className="h-px w-full border-0 bg-gray-600" />
          <div className="flex justify-evenly w-screen ">
          <Experince />
          </div>
      </div>
    </>
  );
}
