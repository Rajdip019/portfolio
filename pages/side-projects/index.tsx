/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import { motion, useInView } from 'framer-motion';
import React from 'react'

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
            className='mb-20 mt-10 w-10/12 md:w-8/12 mx-auto min-h-screen'>
            <h2 className='text-2xl font-semibold text-gray-200 text-center md:text-left mb-5'>Side Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {constant.sideProjects.map((project, index) => (
                    <a key={index} href={project.link} target='_blank' className='w-full'>
                        <div className=' relative z-10'>
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