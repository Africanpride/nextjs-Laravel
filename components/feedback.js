import Image from 'next/image'
import Link from "next/link";
// import ctl from "@netlify/classNames-template-literals"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"
// import Photobg from "../components/photobg";

const Feedback = () => {

    const feedbackCss = 'dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-300 shadow md:px-10 py-5 md:py-16 px-5 mb-5 md:mb-16 my-2 md:my-16 mx-2 md:mx-16 rounded-neat relative overflow-hidden'

    return (

        <>
            <section>

                <div className={feedbackCss}>
                    <div className='w-72 h-72 absolute -right-20 -top-16 z-20 opacity-10 -rotate-45'>
                        <Image
                            layout='fill'
                            src='/images/feedback.svg'
                            alt='Non-Stop Series Feedback'
                            className='object-fit'
                        />
                    </div>
                    <div className='font-[montserrat] text-4xl  '>
                        Feedback
                    </div>

                    <div className='my-2 text-base dark:text-white line-clamp-2'>
                        {`Let you know how we're doing. (We read everything, butsometimes we can't answer.)`}  <br />{`Please choose the relevant feedback option.`}
                    </div>
                    <br />

                    <div className='flex md:gap-4 gap-8 flex-col md:flex-row justify-between '>

                        <div>
                            <h1 className="font-[anton] leading-relaxed tracking-wider text-xl font-bold mb-3">Testimonies</h1>
                            <p className="leading-relaxed mb-3 line-clamp-3">Share your tesimonies with us with regards to what the Lord has done in your life through this experience. </p>
                            <div className="flex items-center flex-wrap ">
                                <Link href='/'><a className="text-yellow-500 dark:text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">Click Here<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></a></Link>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-[anton] leading-relaxed tracking-wider text-xl font-bold mb-3">Suggestions</h1>
                            <p className="leading-relaxed mb-3 line-clamp-3">We welcome your Spirit led suggestions on the overall organisation of the next Non-Stop Worship experience.  </p>
                            <div className="flex items-center flex-wrap ">
                                <Link href='/'><a className="text-yellow-500 dark:text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">Click Here<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></a></Link>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-[anton] leading-relaxed tracking-wider text-xl font-bold mb-3">Website Feedback</h1>
                            <p className="leading-relaxed mb-3 line-clamp-3">We shall be glad to know your thoughts on ways we can improve the overall web presence to better serve you.  </p>
                            <div className="flex items-center flex-wrap ">
                                <Link href='/'><a className="text-yellow-500 dark:text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">Click Here<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></a></Link>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>

    )
}

export default Feedback