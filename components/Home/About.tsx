"use client";

/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-28 py-4 text-xl font-medium text-transparent flex gap-10 items-center justify-center md:justify-start flex-col md:flex-row mb-16"
      >
          <div className='w-3/12'>
            <img src={constant.personalDetails.picture} alt="" className='rounded-full w-40 ring-2 ring-zinc-50' />
          </div>
          <div className='w-full'>
            <h1 className=' text-3xl font-semibold text-gray-200'>{constant.personalDetails.firstName} {constant.personalDetails.lastName}</h1>
            <p className=' mt-3 text-[#D5D5D5]'>I just solve real-world engineering problems. Scale systems and reduce infrastructure costs by folds. Focused on building resilient systems that maximize performance and streamline operations. </p>
          </div>
      </motion.div>
  )
}

export default About