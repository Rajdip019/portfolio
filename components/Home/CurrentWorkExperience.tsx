import { constant } from '@/helpers/constants'
import React from 'react'
import WorkExperienceTile from '../Shared/WorkExperienceTile'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const CurrentWorkExperience = () => {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            <div className='flex justify-between items-center mt-36 text-gray-300 relative z-50'>
                <h1 className=' text-2xl font-semibold '>Currently working at ?</h1>
                <Link href="/work-experiences" className=' hover:scale-105 transition-all'>View All</Link>
            </div>
            <div>
                <WorkExperienceTile workExp={constant.workExperience[0]} isCurrent={true} />
            </div>
        </motion.section>
    )
}

export default CurrentWorkExperience 