/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import SectionHeading from '@/components/Shared/SectionHeading'
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
      <Head>
        <title>{`Contact ${constant.personalDetails.firstName}`}</title>
        <meta name="description" content="Get in touch with Rajdeep Sengupta — email, LinkedIn, Twitter or GitHub." />
      </Head>
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

          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
            {channels.map((channel, index) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.07, ease: "easeOut" }}
                className='card card-hover group flex items-center justify-between p-4'
              >
                <div>
                  <p className='mono-label'>{channel.label}</p>
                  <p className='mt-1.5 text-sm text-gray-300 transition-colors group-hover:text-white'>
                    {channel.value}
                  </p>
                </div>
                <FiArrowUpRight className='h-4 w-4 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent' />
              </motion.a>
            ))}
          </div>

          {/* Sign-off, styled like the boot terminal so the page closes on-theme */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mb-20 mt-16 font-mono text-sm'
          >
            <div className='hairline mb-6' />
            <p className='text-gray-500'>
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
