import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Photobg from "../components/photobg";
import ctl from "@netlify/classnames-template-literals";


export default function AspectVideo({ children }, props) {



    return (
        <>
            <div className={blockStyleOne}>

                {children}

            </div>
        </>
    )
}


const blockStyleOne = ctl(`
md:aspect-video 
w-full md:h-bozzinXl box-border 
flex flex-col items-start 
justify-between 
relative 
bg-greyed 
rounded-neat 
text-darkcolor 
pt-8 pr-8 pb-8 pl-8
dark:bg-darkcolor 
dark:text-greyed`);