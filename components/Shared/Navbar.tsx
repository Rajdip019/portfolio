/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Navbar = () => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <header className=' px-10 py-3 bg-slate-950 shadow-xl sticky top-0 z-30'>
            <nav className=' flex justify-between flex-col  md:flex-row'>
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
                    <h1 className=' text-xl font-semibold'>{constant.personalDetails.firstName}&apos;s {pathname.includes('/blog') ? "Blog" : "Portfolio"}</h1>
                    </Link>
                </div>
                <div className=' flex gap-6 mt-3 md:mt-0'>
                    <Link href="/" className={`${pathname === '/' ? 'underline font-semibold' : ''} hover:underline hover:font-semibold underline-offset-4`}>
                        About
                    </Link>
                    <Link href="/blog" className={`${pathname === '/blog' ? 'underline font-semibold' : ''} hover:underline hover:font-semibold underline-offset-4`}>
                        Blog
                    </Link>
                    <Link href="/contact" className={`${pathname === '/contact' ? 'underline font-semibold' : ''} hover:underline hover:font-semibold underline-offset-4`}>
                        Contact Me
                    </Link>
                    <a href={constant.personalDetails.twitter} target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=512&id=13963&format=png" alt="" className=' w-7' />
                    </a>
                    <a href={constant.personalDetails.github} target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=512&id=12599&format=png" alt="" className=' w-6 bg-white rounded-full' />
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar