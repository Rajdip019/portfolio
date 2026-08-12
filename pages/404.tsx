import Link from 'next/link'
import React from 'react'
import Seo from '@/components/Shared/Seo'
import { constant } from '@/helpers/constants'

const NotFound = () => {
  return (
    <>
      <Seo
        title={`Page not found — ${constant.personalDetails.firstName} ${constant.personalDetails.lastName}`}
        description="That page doesn't exist."
      />
      <div className='mx-auto flex min-h-[70vh] w-11/12 max-w-5xl flex-col justify-center md:w-10/12'>
        <p className='font-mono text-xs uppercase tracking-[0.2em] text-accent/70'>
          Error 404
        </p>
        <h1 className='mt-3 text-3xl font-semibold tracking-tight text-gray-50 md:text-4xl'>
          This page doesn&apos;t exist
        </h1>
        <p className='mt-4 max-w-lg leading-relaxed text-gray-400'>
          The link may be out of date, or the page has moved. Everything else is
          still where you left it.
        </p>

        <div className='mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm'>
          <Link href='/' className='text-gray-200 transition-colors hover:text-accent'>
            ← Home
          </Link>
          <Link href='/work-experiences' className='text-subtle transition-colors hover:text-accent'>
            Work
          </Link>
          <Link href='/side-projects' className='text-subtle transition-colors hover:text-accent'>
            Projects
          </Link>
          <Link href='/blogs' className='text-subtle transition-colors hover:text-accent'>
            Writing
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound
