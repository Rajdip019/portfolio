/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className=' bg-black'>
            <div className=' w-10/12 md:w-8/12 mx-auto py-10 flex justify-between items-center'>
                <div className=' flex items-center gap-3 justify-between w-full flex-col md:flex-row'>
                    <p className=' text-gray-200'>Made with ❤️ by <a href="https://twitter.com/RajdeepS019" target='_blank' className=' text-blue-500'>Rajdeep Sengupta</a></p>
                    <div className=' flex gap-3'>
                        <Link href="/contact" className=' hover:underline underline-offset-4' >Contact</Link>
                        <a href={constant.personalDetails.resume}  className=' hover:underline underline-offset-4' target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer