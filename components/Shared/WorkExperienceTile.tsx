/* eslint-disable @next/next/no-img-element */
import { IWorkExperience } from '@/helpers/interfaces'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

interface Props {
    workExp: IWorkExperience
}

/** Roles are listed newest-first, so the span runs last-start → first-end. */
const spanOf = (workExp: IWorkExperience) => {
    const roles = workExp.experiences;
    return `${roles[roles.length - 1].startDate} — ${roles[0].endDate}`;
};

/**
 * One company, laid out on the same 200px rail the rest of the site uses:
 * meta on the left, substance on the right, separated by a hairline.
 */
const WorkExperienceTile: React.FC<Props> = ({ workExp }) => {
    return (
        <article className='grid gap-6 py-10 md:grid-cols-[200px_1fr] md:gap-16 md:py-14'>
            <div className='md:pt-1'>
                <img
                    src={workExp.logo}
                    alt={workExp.company}
                    className='h-10 w-10 rounded-full ring-1 ring-white/10'
                />
                <p className='mt-3 font-mono text-xs text-gray-500'>{spanOf(workExp)}</p>
                <p className='mt-1 font-mono text-xs text-gray-700'>
                    {workExp.experiences[0].location}
                </p>
            </div>

            <div className='min-w-0'>
                <a
                    href={workExp.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group inline-flex items-center gap-1.5'
                >
                    <h2 className='text-xl font-semibold tracking-tight text-gray-100 transition-colors group-hover:text-accent-soft'>
                        {workExp.company}
                    </h2>
                    <FiArrowUpRight className='h-4 w-4 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent' />
                </a>

                <ol className='mt-6 space-y-9'>
                    {workExp.experiences.map((exp, index) => (
                        <li key={index}>
                            <p className='text-gray-200'>{exp.title}</p>
                            <p className='mt-1 font-mono text-xs text-gray-600'>
                                {exp.startDate} — {exp.endDate}
                            </p>

                            <ul className='mt-4 space-y-3'>
                                {exp.description.map((desc, i) => (
                                    <li key={i} className='flex gap-4'>
                                        <span className='mt-2.5 h-px w-4 shrink-0 bg-white/15' />
                                        <span className='text-[15px] leading-relaxed text-gray-400'>
                                            {desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </article>
    )
}

export default WorkExperienceTile
