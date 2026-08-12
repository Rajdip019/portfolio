/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from '@/components/Shared/SectionHeading'
import Seo from '@/components/Shared/Seo'
import { FiArrowUpRight } from 'react-icons/fi'

const channels = [
  { label: 'Email', value: constant.personalDetails.email, href: `mailto:${constant.personalDetails.email}` },
  { label: 'LinkedIn', value: 'in/rajdeep-sengupta', href: constant.personalDetails.linkedin },
  { label: 'Twitter', value: '@RajdeepS019', href: constant.personalDetails.twitter },
  { label: 'GitHub', value: 'Rajdip019', href: constant.personalDetails.github },
]

const Contact = () => {
  return (
    <>
      <Seo
        title={`Contact — ${constant.personalDetails.firstName} ${constant.personalDetails.lastName}`}
        description="Get in touch — email, LinkedIn, Twitter or GitHub."
      />
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className='mx-auto min-h-[81.2vh] w-11/12 max-w-5xl pt-16 md:w-10/12'>
          <SectionHeading
            index="Contact"
            title="Get in touch"
            description="I try to maintain a 0 inbox, so email is the fastest way to reach me. DMs work too — I reply to all of them, usually within a day."
          />

          <ul className='divide-y divide-white/[0.06] border-t border-white/[0.06]'>
            {channels.map((channel, index) => (
              <motion.li
                key={channel.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.07, ease: "easeOut" }}
              >
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='group flex items-center gap-6 py-4'
                >
                  <span className='w-20 shrink-0 font-mono text-xs text-faint'>
                    {channel.label}
                  </span>
                  <span className='min-w-0 flex-1 truncate text-gray-300 transition-colors duration-200 group-hover:text-accent-soft'>
                    {channel.value}
                  </span>
                  <FiArrowUpRight className='h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent' />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Sign-off, styled like the boot terminal so the page closes on-theme */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mb-20 mt-16 font-mono text-sm'
          >
            <div className='hairline mb-6' />
            <p className='text-subtle'>
              <span className='text-accent'>$</span> exit
            </p>
            <p className='mt-2 flex items-center gap-2 text-gray-300'>
              See yaaa!! <span className='not-italic'>👋</span>
              <span className='inline-block h-4 w-[7px] animate-blink bg-accent' />
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Contact
