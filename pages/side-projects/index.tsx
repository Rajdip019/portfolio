import { constant } from '@/helpers/constants'
import Head from 'next/head'
import React from 'react'
import ProjectCard from '@/components/Shared/ProjectCard'
import SectionHeading from '@/components/Shared/SectionHeading'

const SideProjects = () => {
    return (
        <>
            <Head>
                <title>{`${constant.personalDetails.firstName}'s Side Projects`}</title>
                <meta name="description" content="Side projects built by Rajdeep Sengupta — from an in-house Rust auth system to hackathon-winning cloud solutions." />
            </Head>
            <div className='mx-auto mb-24 min-h-screen w-11/12 max-w-5xl pt-16 md:w-10/12'>
                <SectionHeading
                    index="Archive"
                    title="Side Projects"
                    description="Things I build outside work — mostly to scratch my own itch, occasionally to win a hackathon."
                />
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                    {constant.sideProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SideProjects
