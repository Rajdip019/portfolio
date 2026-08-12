import { constant } from '@/helpers/constants'
import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const [current, ...previous] = constant.workExperience;
const currentRole = current.experiences[0];

/** Companies list roles newest-first, so the span runs from the last start to the first end. */
const spanOf = (company: typeof constant.workExperience[number]) => {
    const roles = company.experiences;
    return `${roles[roles.length - 1].startDate} — ${roles[0].endDate}`;
};

const Experience = () => {
    return (
        <div>
            {/* Current role, in full */}
            <div className='flex items-start gap-4'>
                <Image
                    src={current.logo}
                    alt={`${current.company} logo`}
                    width={44}
                    height={44}
                    className='h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-white/10'
                />
                <div className='min-w-0'>
                    <a
                        href={current.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group inline-flex items-center gap-1.5'
                    >
                        <span className='text-lg font-semibold text-gray-100 transition-colors group-hover:text-accent-soft'>
                            {current.company}
                        </span>
                        <FiArrowUpRight className='h-4 w-4 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent' />
                    </a>
                    <p className='mt-1 text-gray-300'>{currentRole.title}</p>
                    <p className='mt-1 font-mono text-xs text-faint'>
                        {currentRole.startDate} — {currentRole.endDate} · {currentRole.location}
                    </p>
                </div>
            </div>

            <ul className='mt-8 space-y-4'>
                {currentRole.description.map((desc, index) => (
                    <li key={index} className='flex gap-4'>
                        <span className='mt-2 h-px w-5 shrink-0 bg-white/15' />
                        <span className='text-[15px] leading-relaxed text-gray-400'>{desc}</span>
                    </li>
                ))}
            </ul>

            {/* Everything before it, condensed — the arc, not the detail */}
            {/* "Elsewhere", not "Previously" — one of these is still running part-time. */}
            <p className='mb-2 mt-14 font-mono text-xs uppercase tracking-[0.2em] text-faint'>
                Elsewhere
            </p>
            <ul className='divide-y divide-white/[0.06]'>
                {previous.map((company, index) => (
                    <motion.li
                        key={company.company}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className='py-4'
                    >
                        <a
                            href={company.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group flex items-start gap-4'
                        >
                            <Image
                                src={company.logo}
                                alt={`${company.company} logo`}
                                width={32}
                                height={32}
                                className='mt-0.5 h-8 w-8 shrink-0 rounded-full object-cover opacity-70 ring-1 ring-white/10 transition-opacity duration-300 group-hover:opacity-100'
                            />
                            <div className='min-w-0 flex-1'>
                                <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
                                    <span className='font-medium text-gray-200 transition-colors duration-200 group-hover:text-accent-soft'>
                                        {company.company}
                                    </span>
                                    <span className='font-mono text-xs text-faint'>
                                        {spanOf(company)}
                                    </span>
                                </div>
                                <p className='mt-0.5 text-sm text-subtle'>
                                    {company.experiences[0].title}
                                    {company.experiences[0].employmentType &&
                                        ` · ${company.experiences[0].employmentType}`}
                                    {company.experiences.length > 1 &&
                                        ` · ${company.experiences.length} roles`}
                                </p>
                            </div>
                        </a>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

export default Experience
