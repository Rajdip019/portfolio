/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Navbar = () => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <header className='md:px-10 px-3 py-3 shadow-xl sticky top-0 z-50 backdrop-blur-2xl bg-transparent'>
            <nav className=' flex justify-center md:justify-between flex-col md:flex-row items-center'>
                <div className=' flex items-center gap-2'>
                    {pathname.includes('blog/') ? (
                        <Link href="/blog">
                            <button className=" flex items-center gap-2 p-2 rounded-md mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                </svg>
                            </button>
                        </Link>
                    ) : (null)}
                    <Link href="/" className=' flex items-center gap-4'>
                    <img src={constant.personalDetails.picture} alt="" className=' w-10 rounded-full' />
                    <h1 className=' text-xl font-semibold'>{constant.personalDetails.firstName} {constant.personalDetails.lastName}</h1>
                    </Link>
                </div>
                <div className=' flex flex-col md:flex-row items-center mt-4 md:mt-0 gap-6'>
                    <div className='flex gap-6 '>
                        <Link href="/work-experiences" className={`${pathname === '/work-experiences' ? 'scale-105 font-semibold' : ''} hover:hover:scale-105 offset-4`}>
                           Work Experiences
                        </Link>
                        <Link href="/side-projects" className={`${pathname === '/side-projects' ? 'scale-105 font-semibold' : ''} hover:hover:scale-105 offset-4 whitespace-nowrap`}>
                            Side Projects
                        </Link>
                        <Link href="/blogs" className={`${pathname === '/blogs' ? 'scale-105 font-semibold' : ''} hover:hover:scale-105 offset-4`}>
                            Blogs
                        </Link>
                        <Link href="/contact" className={`${pathname === '/contact' ? 'scale-105 font-semibold' : ''} hover:hover:scale-105 offset-4`}>
                            Contact
                        </Link>
                    </div>
                    <div className=' md:flex items-center mt-2 md:mt-0 gap-6 hidden'>
                        <a href={constant.personalDetails.twitter} target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=111056&format=png&color=ffffff" alt="" className=' w-5 hover:scale-105 transition-all' />
                        </a>
                        <a href={constant.personalDetails.github} target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/?size=512&id=12599&format=png" alt="" className=' w-5 bg-white rounded-full hover:scale-105 transition-all ' />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar