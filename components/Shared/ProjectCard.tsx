/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

interface Project {
    title: string;
    image: string;
    description: string;
    link: string;
    techstack?: string[];
}

interface Props {
    project: Project;
    index?: number;
}

const ProjectCard: React.FC<Props> = ({ project, index = 0 }) => {
    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="card card-hover group flex h-full flex-col overflow-hidden"
        >
            <div className="relative h-40 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/40 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-gray-100">{project.title}</h3>
                    <FiArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-4">
                    {project.description}
                </p>

                {project.techstack && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.techstack.map((tech) => (
                            <span key={tech} className="chip">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.a>
    )
}

export default ProjectCard
