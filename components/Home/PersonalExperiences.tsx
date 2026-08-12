/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { constant } from '@/helpers/constants'
import { motion } from 'framer-motion'

const achievements = [
    { year: "2023", text: "Winner, Ethos Hackathon — North India's largest, among multiple others" },
    { year: "2022", text: "Top 8 in India, Microsoft Imagine Cup" },
    { year: "2022", text: "Youngest speaker, Azure Cosmos DB Cloud Conference" },
    { year: "—", text: "Mentor and project admin at Winter of Code, GirlScript, CodePeak, Hacktoberfest and HackNITR" },
    { year: "—", text: "Speaker at Google Developer Student Clubs and local dev conferences" },
]

const PersonalExperiences = () => {
    return (
        <div>
            <ul className='divide-y divide-white/[0.06]'>
                {achievements.map((achievement, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className='flex gap-5 py-3.5 first:pt-0'
                    >
                        <span className='w-10 shrink-0 pt-0.5 font-mono text-xs text-faint'>
                            {achievement.year}
                        </span>
                        <span className='text-[15px] leading-relaxed text-gray-400'>
                            {achievement.text}
                        </span>
                    </motion.li>
                ))}
            </ul>

            <a
                href={constant.personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className='mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-faint transition-colors hover:text-accent'
            >
                More on LinkedIn <span>→</span>
            </a>
        </div>
    )
}

export default PersonalExperiences
