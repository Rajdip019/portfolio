import { constant } from '@/helpers/constants'
import { motion } from 'framer-motion'
import React from 'react'

/**
 * The numbers, stated plainly. The figure is the only bright thing in each
 * column — everything else steps down from it, so the band reads at a glance
 * without turning into a dashboard.
 */
const Impact = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='grid grid-cols-1 gap-10 border-t border-white/[0.08] pt-10 sm:grid-cols-3 sm:gap-0'
        >
            {constant.impact.map((metric, index) => (
                <motion.div
                    key={metric.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                    className={index > 0 ? 'sm:border-l sm:border-white/10 sm:pl-8' : 'sm:pr-8'}
                >
                    <p className='font-mono text-3xl tracking-tight text-gray-50'>
                        {metric.value}
                    </p>
                    <p className='mt-2 text-sm text-gray-300'>{metric.label}</p>
                    <p className='mt-3 text-[13px] leading-relaxed text-gray-600'>
                        {metric.context}
                        <span className='text-gray-700'> · {metric.company}</span>
                    </p>
                </motion.div>
            ))}
        </motion.section>
    )
}

export default Impact
