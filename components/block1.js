import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Photobg from "../components/photobg";
import ctl from "@netlify/classnames-template-literals";

export default function BlockOne({ children }, props) {

    return (
        <>
            <div className={blockStyleOne}>
                {children}
            </div>
        </>
    )
}

const blockStyleOne = 
ctl(
`md:aspect-square 
 box-border
 md:w-[234px] w-full
flex flex-col items-start 
justify-between 
relative 
bg-greyed
transition duration-300 ease-in-out  delay-350 
   hover:bg-white  duration-300

rounded-neat 
text-darkcolor 
p-6
dark:bg-darkcolor 
hover:dark:bg-slate-800 
dark:text-greyed`
);