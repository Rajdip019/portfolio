/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

const links = [
    { href: '/', label: 'Home', mobileOnly: true },
    { href: '/work-experiences', label: 'Work' },
    { href: '/side-projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
];

const socials = [
    { href: constant.personalDetails.twitter, icon: "https://img.icons8.com/?size=100&id=111056&format=png&color=ffffff", label: "Twitter", invert: false },
    { href: constant.personalDetails.github, icon: "https://img.icons8.com/?size=512&id=12599&format=png", label: "GitHub", invert: true },
];

const Navbar = () => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <header className='sticky top-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-xl'>
            <nav className='mx-auto flex w-11/12 max-w-5xl flex-col items-center justify-between gap-3 py-3 md:w-10/12 md:flex-row md:gap-6'>
                <div className='hidden items-center gap-3 md:flex'>
                    {pathname.includes('blogs/') && (
                        <Link
                            href="/blogs"
                            aria-label="Back to blogs"
                            className='rounded-md p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white'
                        >
                            <FiArrowLeft className='h-4 w-4' />
                        </Link>
                    )}
                    <Link href="/" className='group flex items-center gap-3'>
                        <img
                            src={constant.personalDetails.picture}
                            alt=""
                            className='w-8 rounded-full ring-1 ring-white/10 transition-all duration-300 group-hover:ring-accent/50'
                        />
                        <span className='font-semibold tracking-tight text-gray-100'>
                            {constant.personalDetails.firstName} {constant.personalDetails.lastName}
                        </span>
                    </Link>
                </div>

                <div className='flex flex-col items-center gap-4 md:flex-row md:gap-6'>
                    <div className='flex flex-wrap justify-center gap-1'>
                        {links.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`${link.mobileOnly ? 'md:hidden' : ''} relative whitespace-nowrap rounded-md px-3 py-1.5 font-mono text-sm transition-colors duration-200 ${active ? 'text-white' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                    {active && (
                                        <span className='absolute inset-x-3 -bottom-px h-px bg-accent' />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <div className='hidden items-center gap-4 md:flex'>
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                            >
                                <img
                                    src={social.icon}
                                    alt=""
                                    className={`w-[18px] opacity-60 transition-all duration-200 hover:scale-110 hover:opacity-100 ${social.invert ? 'rounded-full bg-white' : ''}`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
