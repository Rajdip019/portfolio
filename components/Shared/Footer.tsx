/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='relative border-t border-white/[0.06] bg-black'>
            <div className='mx-auto flex w-11/12 max-w-5xl flex-col items-center justify-between gap-4 py-10 md:w-10/12 md:flex-row'>
                <p className='font-mono text-sm text-subtle'>
                    <span className='text-accent'>$</span> made with ❤️ by{' '}
                    <a
                        href={constant.personalDetails.twitter}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='text-gray-300 transition-colors hover:text-accent'
                    >
                        {constant.personalDetails.firstName} {constant.personalDetails.lastName}
                    </a>
                </p>
                <div className='flex gap-5 font-mono text-sm'>
                    <Link href="/contact" className='text-subtle transition-colors hover:text-accent'>
                        Contact
                    </Link>
                    <a
                        href={constant.personalDetails.resume}
                        className='text-subtle transition-colors hover:text-accent'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                    <a
                        href={constant.personalDetails.github}
                        className='text-subtle transition-colors hover:text-accent'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
