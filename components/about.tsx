"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        About <b>Malu</b>
      </SectionHeading>
      <p className="mb-3">
        Brazilian with Italian citizenship, residing in the Netherlands since
        2018. Bachelor's degree in Computer Information Systems and AWS
        Developer Associate certificate (2020-2024). Over 7 years as a dedicated
        backend engineer, consistently engaged with web frontend development.
        Current focus on mastering modern frontend roadmaps, specializing in
        frameworks such as React and Next.js, aiming for a transition into
        full-stack web development. Known for strong analytical skills,
        adaptability, and a positive, collaborative attitude at work.
      </p>
      <p>
        <span className="italic">When not coding</span>: a lot of crochet &
        exercising.
      </p>
    </motion.section>
  );
}
