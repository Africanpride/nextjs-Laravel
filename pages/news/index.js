import Image from 'next/image'
import react from 'react'
import ctl from '@netlify/classnames-template-literals'
import Link from 'next/link'
import ImagineHeader from '../../components/Imagine'
import parse from 'html-react-parser'
import Imagine2 from "/components/Imagine2";


export default function News() {

    // const easeInOut = ctl(`rounded-neat motion-reduce:transition-none
    // transition duration-1000 ease-in-out delay-300 overflow-hidden hover:-translate-y-1 
    //  hover:scale-110 hover:rounded-neat `)
    const easeInOut = ctl(` motion-reduce:transition-none
    transition duration-1000 ease-in-out delay-300 overflow-hidden hover:-translate-y-1 
     hover:scale-110 `)

    const overlay = ctl(`absolute inset-0 bg-black opacity-20 z-10  rounded-neat	`)

    // Fetch News from api later
    const news = [
        { newsTitle: '144 Ministration List from Around the world', newsDate: '12/09/2022', newsImageSrc: 'flags2.jpg' },
        { newsTitle: '144 Ministration List from Around the world', newsDate: '12/09/2022', newsImageSrc: '24hours.jpg' },
        { newsTitle: '144 Ministration List from Around the world', newsDate: '12/09/2022', newsImageSrc: 'egypt3.jpg' },
    ]

    const miniTitle = parse(`Latest Articles <span className='text-yellow-500 font-bold'>Frequent</span> Updates.`)

    return (
        <>
            <section>
                {/* <ImagineHeader bigtitle={`News & Events`} smallTitle={miniTitle} /> */}
                <Imagine2 topTitle={'Latest Articles & Frequent Updates.'} bigTitle={'NEWS & EVENTS'} hidden={'hidden'} />

            </section>

            <section className='px-4 py-4 bg-lightcolor dark:bg-darkcolor min-h-[80vh] text-darkcolor'>

                <div className='flex flex-col md:flex-row  gap-4' >
                    <div className={` flex flex-col justify-between md:rounded-neat item-center w-full md:w-[50%] md:aspect-square h-bozzinXl relative overflow-hidden shadow-md`}>
                    {/* <div className={overlay} > </div> */}

                        {/* Overlay */}

                        <div className='text-white z-20 
                          px-5 py-2  uppercase absolute left-0 bottom-5 w-full h-82 overlay2 '>
                             

                            <div className='text-white bg-pink-600 max-w-max px-6 py-[5px] z-20   my-2 mt-2 ml-6 uppercase'> Latest News</div>
                            <Link href={'/'}><a>
                                <div className='text-xl md:text-4xl mx-5 ml-6 font-[anton] font-bold  z-20 tracking-wide text-slate-100 '>20th Anniversery of the<br /> Non-Stop Praise and Worship Series </div>
                            </a></Link>

                            <div className='text-slate-900 max-w-max text-sm ml-6 mt-2 z-20  font-[montserrat]'><span className='bg-yellow-500 py-[1px] px-[12px] text-title'>By: Pius Opoku-Fofie</span></div>
                        </div>
                        {/* Background image */}
                        <Image
                            layout='fill'
                            src={'/images/68_square.jpg'}
                            alt={'Latest News Item'}
                            className={`object-cover object-top z-10 overflow-hidden ${easeInOut}`}
                        // className={`${easeInOut} md:rounded-neat overflow-hidden  md:aspect-video origin-center z-0`}
                        />

                    </div>


                    <div className='flex flex-col justify-between items-start flex-1 gap-2 h-bozzinXl '>
                        {news.map(({ newsTitle, newsImageSrc, newsDate }) => (

                            <div key={newsTitle} className=' w-full md:h-[148px]  flex flex-col md:flex-row  gap-2 bg-slate-300
                             dark:bg-black rounded-neat   '>
                                <div className=' h-full aspect-square md:w-[148px] md:h-[148px] rounded-l-neat rounded-r-none relative gap-2 overflow-hidden'>
                                    <Image
                                        layout='fill'npm
                                        src={`/images/${newsImageSrc}`}
                                        alt={`News Item Image`}
                                        className={`object-cover object-top z-0 ${easeInOut}`}
                                    />
                                </div>
                                <div className={`flex-1  flex flex-col justify-between box-border pb-2  px-4`}>
                                    <div className={`my-2`}><span className='bg-yellow-500 py-[1px] px-[12px] max-w-max uppercase text-title'>News</span></div>
                                    <div className={`font-[anton] dark:text-white text-slate-600 text-3xl md:text-xl md:line-clamp-2`}>{newsTitle}</div>
                                    <div className={`font-[lato] text-white text-sm my-2`}>
                                        <span className='bg-slate-600 py-[1px] px-[12px] uppercase max-w-max font-bold text-title'>Date: {newsDate}</span>
                                    </div>


                                </div>
                            </div>
                        )


                        )}




                    </div>
                </div>

            </section>
        </>
    )
}