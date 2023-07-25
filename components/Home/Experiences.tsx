/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router'
import { constant } from '@/helpers/constants'

const Experiences = () => {

    return (
        <section className=' flex flex-col items-center md:block'>
            <h1 className=' text-2xl font-semibold mt-10 text-gray-200 text-center md:text-left mb-2'>Want to know more abut me ?</h1>
            <span className='text-[#D5D5D5] text-center '>Want to know about my Work Experiences? Achievements?  How I became the youngest speaker at Microsoft Cosmos DB International Conf&apos;22 or how many hackathons I have won? This is the best place to visit</span>
            <a href={constant.personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className=' ml-2 inline-flex gap-2 items-center underline underline-offset-4 text-blue-400'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="16" height="16" viewBox="0 0 192 192">
                    {
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                            <path d="M0,192v-192h192v192z" fill="none"></path>
                            <g fill="#ffffff"><g id="surface1">
                                <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                            </g>
                            </g>
                        </g>
                    }
                </svg>
                <span className=' font-semibold text-blue-500'>LinkedIn</span>
            </a>{' '} <span className=' hidden md:inline-block'>.</span>
        </section>
    )
}

export default Experiences