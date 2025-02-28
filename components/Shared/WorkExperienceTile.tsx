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
    return (
        <div className='mt-5 bg-black my-3 rounded-lg p-5 border-gray-800 border transition-all'>
            <div className=' flex flex-col md:flex-row items-start gap-5'>
                <img src={workExp.logo} alt="" className='w-14 h-14 rounded-full mt-1' />
                <div>
                    <Link target="_blank" href={workExp.link} className='flex gap-2 items-center group hover:underline underline-offset-4'>
                        <h2 className='text-xl font-semibold text-gray300'>{workExp.company}</h2>
                        <FiArrowUpRight className='w-6 h-6 opacity-0 group-hover:opacity-100 transition-all' />
                    </Link>
                    {isCurrent ? (
                        <ul>
                            <li>
                                <div>
                                    <p className='text-gray-200 font-semibold my-0.5'>{workExp.experiences[0].title}</p>
                                    <div className='flex gap-2 flex-col md:flex-row'>
                                        <p className='text-gray-200'>{workExp.experiences[0].startDate} - {workExp.experiences[0].endDate}</p>
                                        <p className='text-gray-200'>( {workExp.experiences[0].location} )</p>
                                    </div>
                                    <ul className='mt-4'>
                                        {workExp.experiences[0].description.map((desc, index) => (
                                            <li key={index} className='mt-2 text-gray-300 list-disc list-inside'> {desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    ) : (
                        <ul className={`${workExp.experiences.length > 1 ? 'list-disc' : ''}`}>
                            {workExp.experiences.map((exp, index) => (
                                <li key={index} className={`${workExp.experiences.length > 1 ? 'ml-4 mt-4' : ''}`}>
                                    <div className={`${index > 0 ? 'mt-10' : ''}`}>
                                        <p className=' text-gray-200 font-semibold my-0.5'>{exp.title}</p>
                                        <div className=' flex gap-2 flex-col md:flex-row'>
                                            <p className=' text-gray-200'>{exp.startDate} - {exp.endDate}</p>
                                            <p className=' text-gray-200'>( {exp.location} )</p>
                                        </div>
                                        {exp.description.length > 1 ? (
                                            <ul className='mt-4'>
                                                {exp.description.map((desc, index) => (
                                                    <li key={index} className='mt-2 text-gray-300 list-disc list-inside'> {desc}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className='mt-2 text-gray-300'>{exp.description[0]}</p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WorkExperienceTile