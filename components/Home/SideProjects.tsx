"use client";

import React from 'react'
import { constant } from '@/helpers/constants';
import ProjectCard from '../Shared/ProjectCard';

const SideProjects = () => {
    return (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {constant.sideProjects.slice(0, 2).map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </div>
    )
}

export default SideProjects
