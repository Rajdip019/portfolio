"use client";

import React from 'react'
import { constant } from '@/helpers/constants';
import ProjectCard from '../Shared/ProjectCard';

const SideProjects = () => {
    return (
        <ul className='divide-y divide-white/[0.06]'>
            {constant.sideProjects.slice(0, 3).map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </ul>
    )
}

export default SideProjects
