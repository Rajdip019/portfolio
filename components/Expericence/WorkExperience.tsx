import { constant } from '@/helpers/constants'
import React from 'react'
import WorkExperienceTile from '../Shared/WorkExperienceTile'

const WorkExperience = () => {
  return (
    <div className=' my-10'>
      {constant.workExperience.map((work, index) => (
        <WorkExperienceTile key={index} workExp={work} isCurrent={false} />
      ))}
    </div>
  )
}

export default WorkExperience