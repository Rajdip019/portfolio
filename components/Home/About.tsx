/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import React from 'react'

const About = () => {
  return (
    <div className=' flex gap-10 flex-col md:flex-row'>
        <div>
            <img src={constant.personalDetails.picture} alt="" className='rounded-full aspect-square w-36 mx-auto md:w-72 ring-2 ring-zinc-50' />
        </div>
        <div>
            <h1 className=' text-3xl font-semibold text-gray-200 text-center md:text-left'>{constant.personalDetails.firstName} {constant.personalDetails.lastName}</h1>
            <p className=' mt-3 text-[#D5D5D5] text-center md:text-left'>Started with frontend, built amazing projects using that, moved to backend and fell in love ❤️ with scalable backend architectures 🚀 and cloud ☁️ while playing with AWS, GCP, Azure, Docker 🐳, Kubernetes and terraform.</p>
        </div>
    </div>
  )
}

export default About