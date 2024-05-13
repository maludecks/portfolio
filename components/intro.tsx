"use client";

import Image from "next/image";
import React from "react";
import avatar from "@/public/avatar.png";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaTwitter } from "react-icons/fa";
import { socials } from "@/lib/data";

export default function Intro() {
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex item-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={avatar}
              alt="profile image"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />

            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.5,
                duration: 0.7,
              }}
              className="absolute bottom-0 right-0 text-4xl"
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hi, I'm Maria Luiza,{" "}
          <small>
            <i>aka</i>
          </small>{" "}
          Malu.
        </span>{" "}
        I'm a backend developer with{" "}
        <small>
          <i>some</i>
        </small>{" "}
        frontend experience. I enjoy working with <i>web & apps</i>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {socials.map(social => (
          <a
            className="bg-white p-4 m-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black"
            href={social.url}
            target="_blank"
          >
            <social.type />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
