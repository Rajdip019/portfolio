import { constant } from '@/helpers/constants'
import React from 'react'
import WorkExperienceTile from '../Shared/WorkExperienceTile'
import { motion } from 'framer-motion';

const WorkExperience = () => {
  return (
    <div className='divide-y divide-white/[0.06] pb-16'>
      {constant.workExperience.map((work, index) => (
        <motion.div
          key={work.company}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
        >
          <WorkExperienceTile workExp={work} />
        </motion.div>
      ))}
    </div>
  )
}

export default WorkExperience
