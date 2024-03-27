"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import Section_Heading from "./Section_Heading";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      id="home"
      className="scroll-mt-28 mx-auto w-full text-center mb-20 "
    >
      <Section_Heading> </Section_Heading>
      <div className="flex  flex-col sm:flex-row mb-20">
        {/* image mobile */}
        <div className="flex items-center justify-center sm:hidden">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <Image
                className="w-32 h-32 rounded-full border-[0.34rem] border-white object-cover shadow-xl"
                src={"/jaouad-removebg-preview (1).png"}
                alt="portfolio"
                width={300}
                height={300}
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.2,
                duration: 0.7,
              }}
              className="absolute bottom-0 right-0 text-2xl"
            >
              👋
            </motion.span>
          </div>
        </div>

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        >
          <span className="font-bold">Hello , I'am Jaouad . </span> I'am a{" "}
          <span className="font-bold"> Frontend Developer</span> with{" "}
          <span className="font-bold"> 4 years</span> of experience . I enjoy
          building sites & apps. My focus is{" "}
          <span className="underline">React (NextJs)</span>.
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-center   gap-2 font-medium text-lg px-4 pt-10 md:pt-0"
      >
        <Link
          className="group flex items-center justify-center   gap-2 bg-gray-900 text-white py-3 px-7 rounded-full outline-none focus:scale-105 hover:scale-105 transition"
          href={"/#contact"}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here{" "}
          <IoIosArrowRoundForward className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="group flex items-center justify-center gap-2 bg-white text-gray-950 py-3 px-6 rounded-full hover:bg-gray-800 hover:text-white outline-none focus:scale-105 hover:scale-105 transition border border-gray-200"
        >
          Download CV{" "}
          <LiaDownloadSolid className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <Link
          className="flex items-center justify-center  gap-2  bg-white text-gray-900 p-4 rounded-full hover:bg-gray-800  hover:text-white hover:scale-110 ease-in duration-200 border border-gray-200"
          href={"https://www.linkedin.com/"}
          target="_blank"
        >
          <FaLinkedin className="text-xl hover:scale-110 transition" />
        </Link>
        <Link
          className=" group flex items-center justify-center  gap-2  bg-white text-gray-900 p-4 rounded-full hover:bg-gray-800 hover:text-white hover:scale-110 ease-in duration-200 border border-gray-200"
          href={"https://github.com/"}
          target="_blank"
        >
          <FaGithubSquare className="text-xl hover:scale-110 transition" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
