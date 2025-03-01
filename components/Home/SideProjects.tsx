/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react'
import { constant } from '@/helpers/constants';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const SideProjects = () => {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeInOut",
            }}
            className='mb-32'>
            <div className=' flex justify-between'>
                <h2 className='text-2xl font-semibold text-gray-200 text-center md:text-left'>Side Projects</h2>
                <Link href="/side-projects" className=' hover:scale-105 transition-all'>View all</Link>
            </div>
            <div className='flex flex-wrap md:flex-nowrap justify-center gap-3'>
                {constant.sideProjects.slice(0, 3).map((project, index) => (
                    <a key={index} href={project.link} target='_blank' className='w-full'>
                        <div className=' relative z-10 mt-10'>
                            <div className=' bg-black rounded-lg border-gray-800 border transition-all hover:scale-105 cursor-pointer h-[350px]'>
                                <div className="flex flex-col justify-between h-full p-4 tracking-tight text-slate-100/50">
                                    <div>
                                        <h3 className="!pb-2 !m-0 font-semibold text-base text-slate-300">
                                            {project.title}
                                        </h3>
                                        <div className="text-base !m-0 !pb-2 font-normal">
                                            <span className="text-slate-400 ">
                                                {project.description}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={project.image} alt="" className='w-full h-40 object-cover' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </motion.div>
    )
}

export default SideProjects