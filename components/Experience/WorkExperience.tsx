import { constant } from '@/helpers/constants'
import React from 'react'
import WorkExperienceTile from '../Shared/WorkExperienceTile'
import { motion } from 'framer-motion';

const WorkExperience = () => {
  return (
    <div className='my-8 pb-16'>
      {constant.workExperience.map((work, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
        >
          <WorkExperienceTile workExp={work} isCurrent={false} />
        </motion.div>
      ))}
    </div>
  )
}

export default WorkExperience
