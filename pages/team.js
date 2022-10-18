/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImagineHeader from '../components/Imagine'
import Feedback from '../components/feedback'
import parse from 'html-react-parser'
import Imagine2 from '../components/Imagine2'
// import { ctl } from '@netlify/classnames-template-literals';


const Team = () => {

    const teamMembers = [
        {
            memberName: 'Ken Tsirebi',
            memberTitle: 'International',
            memberProfilePhoto: 'ken.jpg',
            memberProfileUrl: '/team'
        },
        {
            memberName: 'Kwaku Darko Asiedu',
            memberTitle: 'International',
            memberProfilePhoto: 'kd.jpg',
            memberProfileUrl: '/team'
        },
        {
            memberName: 'Samuel Bako',
            memberTitle: 'International',
            memberProfilePhoto: 'samuel.jpg',
            memberProfileUrl: '/team'
        },
        {
            memberName: 'Pius Opoku-Fofie',
            memberTitle: 'Website/Tech Support',
            memberProfilePhoto: 'pius.jpg',
            memberProfileUrl: '/team'
        },
        {
            memberName: 'Emmanuel Asamoah Larbi',
            memberTitle: 'Website/Tech Support',
            memberProfilePhoto: 'pius.jpg',
            memberProfileUrl: '/team'
        },
        {
            memberName: 'Joshua Akpabli',
            memberTitle: 'Cordination/Scheduling',
            memberProfilePhoto: 'pius.jpg',
            memberProfileUrl: '/team'
        },
        {
            memberName: 'Marion Atiemo',
            memberTitle: 'Music/Media',
            memberProfilePhoto: 'marion.jpg',
            memberProfileUrl: 'https://www.akosuapokuaa.org'
        },

    ]

    return (
        <>
            <section>
                {/* <ImagineHeader bigtitle={`News & Events`} smallTitle={miniTitle} /> */}
                <Imagine2 topTitle={'Non-Stop Praise & Worship.'} bigTitle={'144 Non-Stop Organizing Team'} hidden={'hidden'} paragraph={'“For lack of guidance a nation falls, but victory is won through many advisers.” __ Proverbs 11:14'} 
/>

            </section>
            <section className="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl mb-4 dark:text-lightcolor text-gray-900">{`Our Team`}</h1>
                        <p className="lg:w-2/3 mx-auto text-base">{`“Let nothing be done through strife or vainglory, but in lowliness of mind let each esteem other better than themselves.  Look not every man on his own things, but every man also on the things of others.” -- Philippians 2:3-4`}</p>
                    </div>
                    <div className="flex flex-wrap -m-2">



                        {teamMembers.map(({ memberName, memberTitle, memberProfilePhoto, memberProfileUrl }) =>
                        (
                            <div key={memberName} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-300 dark:border-gray-800 border p-4 rounded-lg">
                                    <Link href={memberProfileUrl}>
                                        <a>
                                            <div className='relative w-16 h-16 mr-4'>

                                                <Image
                                                    layout='fill'
                                                    className=' bg-gray-100 object-cover object-top flex-shrink-0 rounded-full'
                                                    src={`/images/${memberProfilePhoto}`}
                                                    alt={`name: ${memberName} `}
                                                />
                                            </div>
                                        </a>
                                    </Link>

                                    <div className="flex-grow">
                                        <h2 className="dark:text-lightcolor text-gray-900 font-[anton] font-medium">{memberName}</h2>
                                        <p className="text-gray-500 font-[lato]">{memberTitle}</p>
                                    </div>
                                </div>
                            </div>
                        )

                        )}


                    </div>
                </div>
            </section>

<Feedback />

        </>
    )
}

export default Team