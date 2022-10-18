import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart, faPhone, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Photobg from "../components/photobg";
import ctl from "@netlify/classnames-template-literals";
import parse from 'html-react-parser'

const BlockCardInner = (props) => {
    const titleCss = ctl(`font-[montserrat] uppercase text-tiny  ${props.titleColor}`)
    const innerTextCss = ctl(`text-antoncolor dark:text-slate-400 font-[lato] leading-tight  py-5 md:py-4 ${props.fonts}`)
    const blockCss = ctl(`flex flex-col h-full justify-between ${props.padding}`)
    const bottomCss = ctl(`flex justify-start items-center`)
    const dash = <span>&#8212;123</span>
    return (
        <>
            <div className={blockCss} >
                <div className={titleCss}> {props.title ?? `Title`}</div>

                <div className={innerTextCss}>
                    {props.innerText ?? parse('Follow us Live <br /> on Title ')}
                </div>
                {props.displayBottom &&
                    <div className={bottomCss}>
                        <Link href={props.href ?? '/'}>
                            <a className=" dark:text-white hover:dark:text-gray-300">
                                <FontAwesomeIcon icon={props.icon ??  faMinus } className="dark:text-white text-lg "></FontAwesomeIcon>
                            </a>
                        </Link>

                        {/* <span>{props.bottomIcon ?? parse(`&#8212;`)}</span> */}

                        {/* <FontAwesomeIcon icon={['fab', 'twitter']}  className='w-5 h-5 text-teal-400 dark:text-yellow-500 '/> */}
                        



                    </div>}
            </div>

        </>
    )
}

export default BlockCardInner

