import React from 'react'
import Image from 'next/image'
import ctl from '@netlify/classnames-template-literals'
import useSWR from 'swr'
import parse from 'html-react-parser';


const fetcher = (url) => fetch(url).then((res) => res.json());

const Weather = (props) => {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Accra,Ghana&APPID=91592332bf9fdf5c0d2efd9cbcbd084d&units=metric'

    const { data, error } = useSWR( url,fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    // console.log(data);

    // What icon are we showing? Rain or Sunshine. (We might not use this)
    const rainIcon = parse(`<svg className="w-28 h-28 md:w-20 md:h-20  fill-stroke text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
    </path>
</svg>`);
    const sunIcon = parse(`<svg className="w-28 h-28 md:w-20 md:h-20  fill-stroke text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
        </path>
    </svg>`);


    const Icon = () => {
        const weatherDescription = data.weather[0].description
        return weatherDescription.includes("rain") ? rainIcon : sunIcon;
    }

    const icon_id = data.weather[0].icon

    // console.log(icon_id)

    return (
        <>

            <div className={imageBlockStyle} >

                <div>
                    <h2 className="font-bold text-gray-600 text-right">{data.name ?? 'Accra'}, {data.sys.country ?? 'Ghana'}</h2>
                </div>

                <div className="flex  space-x-2 justify-end items-center ">
                    <div id="icon">
                        <span className='w-28 h-28 relative'>
                        <div className='w-24 h-24 relative '>
                            <Image 
                            src={`http://openweathermap.org/img/wn/${icon_id}@4x.png`}
                            layout='fill'
                            alt='144 Non Stop Praise and Worship'
                            objectFit='fit'
                            className='object-cover object-center absolute rounded-neat'
                            />
                        </div>

                        </span>
                    </div>
                    <div id="temp">
                        <h4 className="text-2xl text-gray-900 dark:text-white">{data.main.temp}°C</h4>
                        <p className="text-[9px] text-gray-900 dark:text-white">Feels Like +{data.main.feels_like}°C</p>
                    </div>
                </div>

                <div className="w-full place-items-end text-right border-t-2 border-slate-400 dark:border-gray-900 mt-2">
                    <p className="text-slate-600 dark:text-slate-300 text-xs font-medium mt-2">Weather: {data.weather[0].description ?? 'Nice Weather'}</p>
                </div>
            </div>



        </>
    )
}

export default Weather


const easeInOut = ctl(`rounded-neat motion-reduce:transition-none
transition duration-1000 ease-in-out delay-300 overflow-none hover:-translate-y-1 
 hover:scale-110 hover:rounded-neat `)

const imageBlockStyle =
    ctl(` dark:bg-darkcolor shadow-3xl rounded-neat bg-slate-300
     dark:border-slate-900 md:aspect-square rounded-neat box-border overflow-hidden
md:w-[234px]  w-full flex flex-col justify-between relative py-4 px-4 transition duration-300 ease-in-out  delay-350 duration-300 `);