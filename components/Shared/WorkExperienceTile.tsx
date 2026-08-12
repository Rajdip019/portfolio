/* eslint-disable @next/next/no-img-element */
import { IWorkExperience } from '@/helpers/interfaces'
import Link from 'next/link';
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

interface Props {
    workExp: IWorkExperience,
    isCurrent?: boolean
}

const WorkExperienceTile: React.FC<Props> = ({ workExp, isCurrent }) => {
    // The current role only renders its latest position; the archive shows all of them.
    const experiences = isCurrent ? workExp.experiences.slice(0, 1) : workExp.experiences;

    return (
        <div className='card card-hover my-4 p-5 md:p-6'>
            <div className='flex flex-col items-start gap-5 md:flex-row'>
                <img
                    src={workExp.logo}
                    alt={workExp.company}
                    className='h-12 w-12 shrink-0 rounded-full ring-1 ring-white/10'
                />
                <div className='w-full'>
                    <Link
                        target="_blank"
                        href={workExp.link}
                        className='group inline-flex items-center gap-1.5'
                    >
                        <h2 className='text-lg font-semibold text-gray-100 transition-colors group-hover:text-accent-soft'>
                            {workExp.company}
                        </h2>
                        <FiArrowUpRight className='h-4 w-4 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent' />
                    </Link>

                    {/* Timeline of roles at this company */}
                    <ol className='mt-4 space-y-7 border-l border-white/10 pl-5'>
                        {experiences.map((exp, index) => (
                            <li key={index} className='relative'>
                                <span className='absolute -left-[23px] top-2 h-1.5 w-1.5 rounded-full bg-accent ring-4 ring-[#08090b]' />

                                <p className='font-medium text-gray-100'>{exp.title}</p>
                                <div className='mt-1 flex flex-col gap-x-2 font-mono text-xs text-gray-500 md:flex-row md:items-center'>
                                    <span>{exp.startDate} — {exp.endDate}</span>
                                    <span className='hidden md:inline'>·</span>
                                    <span>{exp.location}</span>
                                </div>

                                {exp.description.length > 1 ? (
                                    <ul className='mt-3 space-y-2'>
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className='flex gap-2.5 text-sm leading-relaxed text-gray-400'>
                                                <span className='mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gray-600' />
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className='mt-3 text-sm leading-relaxed text-gray-400'>{exp.description[0]}</p>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default WorkExperienceTile
