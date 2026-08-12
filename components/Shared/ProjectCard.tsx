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

/**
 * An editorial row rather than a card — thumbnail on the left, substance on
 * the right. Sits inside a `divide-y` list, so no borders of its own.
 */
const ProjectCard: React.FC<Props> = ({ project, index = 0 }) => {
    return (
        <motion.li
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
        >
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-5 py-7 sm:flex-row"
            >
                <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-md ring-1 ring-white/[0.08] sm:h-20 sm:w-32">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="flex items-center gap-1.5 font-medium text-gray-100 transition-colors duration-200 group-hover:text-accent-soft">
                        {project.title}
                        <FiArrowUpRight className="h-3.5 w-3.5 text-gray-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </h3>

                    <p className="mt-1.5 text-[15px] leading-relaxed text-gray-500">
                        {project.description}
                    </p>

                    {project.techstack && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.techstack.map((tech) => (
                                <span key={tech} className="chip">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </a>
        </motion.li>
    )
}

export default ProjectCard
