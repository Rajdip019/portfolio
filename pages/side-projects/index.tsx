/* eslint-disable @next/next/no-img-element */
import { PinContainer } from '@/components/ui/3d-pin'
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
            <div className='grid grid-cols-1 md:gap-10 md:grid-cols-2'>
                {constant.sideProjects.map((project, index) => (
                    <div key={index} className=' relative z-10'>
                        <PinContainer
                            title={project.title}
                            href={project.link}
                        >
                            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[18rem] h-[18rem] md:w-[25rem] 2xl:w-[28rem] md:h-[24rem] md:-mb-5">
                                <h3 className="!pb-2 !m-0 font-semibold text-base text-slate-300">
                                    {project.title}
                                </h3>
                                <div className="text-base !m-0 !pb-2 font-normal">
                                    <span className="text-slate-400 ">
                                        {project.description}
                                    </span>
                                </div>
                                <div>
                                    <img src={project.image} alt="" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default SideProjects