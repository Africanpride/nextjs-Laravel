// eslint-disable-next-line @next/next/no-img-element
import React from 'react'
import Layout from './layout';
import Image from 'next/image';

export default function WithStyles(props) {

    return (
        <a href="#" className="block my-5 gap-5 px-2 relative">
            <div className='relative'>
                <div className='w-full h-72 md:h-[360px] relative'>

                    <Image
                        layout={'fill'}
                        src={props.image ?? 'https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8 '}

                        alt={'Ministers Profile Image'}
                        className={"object-cover object-top  rounded-bl-3xl rounded-tr-3xl "}
                    
                    />
                </div>

{/* 
                <div className='bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-20 inset-0 z-10  h-72 md:h-56  absolute   object-cover object-top   sm:h-72 rounded-bl-3xl rounded-tr-3xl'>

                </div> */}
            </div>

{props.showTitles && <div className="mt-4 sm:gap-4 sm:flex sm:items-center sm:justify-center">
                <strong className="font-medium dark:text-white text-slate-900 ">{props.musicianName ?? 'No musicianName'}</strong>

                <span className="hidden sm:w-8 sm:h-px sm:bg-yellow-500 sm:block" />

                {/* <p className="opacity-50 mt-0.5 sm:mt-0">{props.description ?? 'Branding / Signage'}</p> */}
            </div>}

        </a>
    )

}

