"use client";

/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import React from 'react'
import { LampContainer } from '../ui/lamp'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-32 py-4 text-center text-xl font-medium tracking-tight text-transparent"
      >
          <div>
            <img src={constant.personalDetails.picture} alt="" className='rounded-full aspect-square w-36 mx-auto md:w-52 mb-10 ring-2 ring-zinc-50 -mt-16' />
          </div>
          <div>
            <h1 className=' text-3xl font-semibold text-gray-200 text-center'>{constant.personalDetails.firstName} {constant.personalDetails.lastName}</h1>
            <p className=' mt-3 text-[#D5D5D5] text-center'>Started with frontend, built amazing projects using that, moved to backend and fell in love ❤️ with scalable backend architectures 🚀 and cloud ☁️ while playing with AWS, GCP, Azure, Docker 🐳, Kubernetes and terraform.</p>
          </div>
      </motion.div>
    </LampContainer>
  )
}

export default About