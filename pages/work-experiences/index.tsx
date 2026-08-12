import WorkExperience from '@/components/Experience/WorkExperience'
import SectionHeading from '@/components/Shared/SectionHeading'
import { constant } from '@/helpers/constants'
import Head from 'next/head'
import React from 'react'

const Experience = () => {
  return (
    <>
      <Head>
        <title>{`${constant.personalDetails.firstName}'s Work Experience`}</title>
        <meta name="description" content="Work experience of Rajdeep Sengupta — cloud, infrastructure and backend engineering across Chainrisk Labs, DryFi and Immplify." />
      </Head>
      <div className='mx-auto min-h-screen w-11/12 max-w-5xl pt-16 md:w-10/12'>
        <SectionHeading
          index="Archive"
          title="Work Experience"
          description="Where I have shipped, scaled, and taken a lot of cost out of running systems."
        />
        <WorkExperience />
      </div>
    </>
  )
}

export default Experience
