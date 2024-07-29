import { constant } from '@/helpers/constants'
import React from 'react'
import WorkExperienceTile from '../Shared/WorkExperienceTile'
import { motion, useInView } from 'framer-motion';

const WorkExperience = () => {

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className=' my-10'>
      {constant.workExperience.map((work, index) => (
        <WorkExperienceTile key={index} workExp={work} isCurrent={false} />
      ))}
    </motion.div>
  )
}

export default WorkExperience