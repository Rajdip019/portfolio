/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const TechStack = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  return (
    <motion.section
      ref={ref}
      className='bg-gradient-to-b from-black to-transparent -mt-72'
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      {/* <h1 className=' -mt-60 text-2xl font-semibold text-gray-200 text-center md:text-left'>My daily work includes</h1> */}
      <div className=' flex flex-wrap gap-4 mt-3 justify-center'>
        {constant.technologiesAndLanguages?.map((tech, index) => (
          <div key={index} className=' flex items-center gap-3 mt-1.5'>
            <img src={tech.icon} alt="" className=' w-6' />
            <p className='text-gray-200'>{tech.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default TechStack