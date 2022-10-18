import React from 'react'
import ctl from '@netlify/classnames-template-literals';
import parse from 'html-react-parser';
import Image from 'next/image';

const ImagineHeader = (props) => {

    const hollowText = ctl(`heading__layout uppercase text-[90px] md:text-[120px] block  text-left `)

    const smallTitleCss = ctl(`bottom-[118px] md:absolute text-[14px] text-right text-slate-300 uppercase z-20 `)

    const smallTitleTextShade = ctl(`text-yellow-500 font-bold `)

    const bigTitleCss = ctl(`z-20 leading-tight font-[anton]  text-[40px] md:text-[50px] uppercase text-gray-50 dark:text-gray-100 `)

    const openingBlock = ctl(`relative h-[60vh] px-10 bg-slate-400 relative  flex flex-col 
    justify-center items-left text-slate-100 dark:text-white`)

    return (
        <>
            <div className='block'>
                <div className={openingBlock}>

                    <div className={bigTitleCss}> {props.bigtitle ?? `News & Events`} </div>

                    <div className={smallTitleCss}> {props.smallTitle ?? ` Missing Small Title`} </div>

                    <Image
                        layout={`fill`}
                        src={`/images/globe2.png`}
                        className={`object-fit object-cover overflow-hidden box-border p-5 z-0`}

                        alt={`Non-Stop Series to the World`}

                    />
                    <div className='absolute inset-0 z-10 bg-purple-900 opacity-75'></div>
                </div>
            </div>
            {/* <div className='hidden md:block relative h-[50vh] -z-10'></div> */}

        </>
    )
}

export default ImagineHeader