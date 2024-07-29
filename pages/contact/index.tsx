/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import { motion, useInView } from 'framer-motion'
import Head from 'next/head'
import React from 'react'

const Contact = () => {

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Head>
        <title>Contact {constant.personalDetails.firstName}</title>
        <meta name="description" content="Started with frontend, built amazing projects using that, moved to backend and fell in love ❤️ with scalable backend architectures 🚀 and cloud ☁️ while playing with AWS, GCP, Azure, Docker 🐳, Kubernetes and terraform." />
      </Head>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}>
        <div className=' w-10/12 md::w-8/12 mx-auto min-h-[81.2vh] '>
          <h1 className=' pt-16 text-2xl font-semibold text-gray-200'>Contact Me</h1>
          <div className=" bg-gray-700 w-full h-0.5 my-5"></div>
          <div className=' mt-3'>
            <p>I always try to maintain <span className=' font-semibold'>0 inbox</span>  so the best way to reach out to me is at <a className=' font-semibold underline underline-offset-4' href={`mailto:${constant.personalDetails.email}`} target="_blank" rel="noopener noreferrer">{constant.personalDetails.email}</a> ❤️</p>
          </div>
          <div className=' mt-3'>
            Also you can reach out to me via
            <a href={constant.personalDetails.linkedin} className='font-semibold underline underline-offset-4' target="_blank" rel="noopener noreferrer">{' '}LinkedIn Dm</a> {' '}
            or {' '}
            <a href={constant.personalDetails.linkedin} className='font-semibold underline underline-offset-4' target="_blank" rel="noopener noreferrer">Twitter Dm</a> {' '}. I will try to reply as soon as possible.
          </div>
          <h3 className=' mt-20 text-6xl'>See Yaaa!! 👋</h3>
        </div>
      </motion.section>
    </>
  )
}

export default Contact