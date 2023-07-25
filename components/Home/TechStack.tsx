/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import React from 'react'

const TechStack = () => {
  return (
    <section>
        <h1 className=' mt-16 text-2xl font-semibold text-gray-200 text-center md:text-left'>My daily work includes</h1>
        <div className=' flex flex-wrap gap-4 mt-3 justify-center md:justify-start'>
            {constant.technologiesAndLanguages?.map((tech, index) => (
                <div key={index} className=' flex items-center gap-3 mt-1.5'>
                    <img src={tech.icon} alt="" className=' w-6'/>
                    <p className='text-gray-200'>{tech.name}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechStack