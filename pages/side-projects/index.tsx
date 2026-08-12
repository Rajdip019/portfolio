import { constant } from '@/helpers/constants'
import React from 'react'
import ProjectCard from '@/components/Shared/ProjectCard'
import SectionHeading from '@/components/Shared/SectionHeading'
import Seo from '@/components/Shared/Seo'

const SideProjects = () => {
    return (
        <>
            <Seo
                title={`Side Projects — ${constant.personalDetails.firstName} ${constant.personalDetails.lastName}`}
                description="Side projects — from an in-house Rust auth system to hackathon-winning cloud solutions."
            />
            <div className='mx-auto mb-24 min-h-screen w-11/12 max-w-5xl pt-16 md:w-10/12'>
                <SectionHeading
                    index="Archive"
                    title="Side Projects"
                    description="Things I build outside work — mostly to scratch my own itch, occasionally to win a hackathon."
                />
                <ul className='divide-y divide-white/[0.06]'>
                    {constant.sideProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SideProjects
