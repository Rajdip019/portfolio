"use client";

/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

const currentRole = constant.workExperience[0];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-14 pt-16 md:pb-20 md:pt-24"
    >
      {/* Name and portrait sit on one baseline; the portrait is deliberately small. */}
      <div className="flex items-start justify-between gap-8">
        <div className="min-w-0">
          <motion.div variants={item} className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400/80">
              Open to conversations
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-semibold tracking-tight text-gray-50 md:text-5xl"
          >
            {constant.personalDetails.firstName} {constant.personalDetails.lastName}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-mono text-sm text-gray-400"
          >
            {currentRole.experiences[0].title}
            <span className="text-gray-700"> · </span>
            <a
              href={currentRole.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors hover:text-accent-soft"
            >
              {currentRole.company}
            </a>
          </motion.p>
        </div>

        <motion.img
          variants={item}
          src={constant.personalDetails.picture}
          alt={`${constant.personalDetails.firstName} ${constant.personalDetails.lastName}`}
          className="hidden w-20 shrink-0 rounded-full ring-1 ring-white/10 sm:block md:w-24"
        />
      </div>

      {/* The positioning statement carries the most weight on the page. */}
      <motion.p
        variants={item}
        className="mt-10 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl md:leading-relaxed"
      >
        {constant.positioning}
      </motion.p>

      <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={constant.personalDetails.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-mono text-sm text-gray-200 transition-colors hover:text-accent"
        >
          Resume
          <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <span className="h-3 w-px bg-white/10" />
        <Link
          href="/contact"
          className="font-mono text-sm text-gray-500 transition-colors hover:text-accent"
        >
          Contact
        </Link>
        <a
          href={constant.personalDetails.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-gray-500 transition-colors hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={constant.personalDetails.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-gray-500 transition-colors hover:text-accent"
        >
          LinkedIn
        </a>
      </motion.div>
    </motion.section>
  )
}

export default About
