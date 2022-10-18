import React from 'react'
import WithStyles from '../components/WithStyles'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ctl from "@netlify/classnames-template-literals";
import { motion, Variants } from "framer-motion";
import parse from 'html-react-parser'

const Imagine2 = (props) => {

    const divCss = ctl('w-full md:w-8/12  md:px-0 flex flex-col space-y-5')
    // const divCss2 = ctl(`w-full md:w-4/12 md:px-0 flex flex-col space-y-5 ${props.rightBlock ? '' : 'hidden'}`)

    const imageAnimate = {
        offscreen: { x: -100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "easeIn",
                bounce: 0.4,
                duration: 1,
                staggerChildren: 0.2

            }
        }

    }

    const textAnimate = {
        offscreen: { x: 100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "easeIn",
                duration: 1,
                delayChildren: 0.5,
                staggerDirection: -2
            }
        }
    }

    return (

        <>
            <section
                className="bg-lightcolor dark:bg-darkcolor h-full md:h-96 py-10 flex justify-between items-center space-x-5 px-5 md:px-10 overflow-hidden">

                <motion.div

                    className={divCss}
                    variants={imageAnimate}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.5 }}
                // transition={{ staggerChildren: 0.5 }}

                >

                    <motion.h2
                        variants={imageAnimate}
                        className="font-bold  font-[lato] text-teal-500 dark:text-teal-400">
                        {props.topTitle ?? parse(`Praise & Worship &#8212; Our Sacred Calling`)}

                    </motion.h2>

                    <motion.div variants={imageAnimate} className="flex flex-col ">
                        <span className="text-slate-900 text-3xl md:text-6xl tracking-tight font-extrabold  dark:text-white 
          gradient "> {props.bigTitle ?? parse(`Around-The-Clock 144 Hours<br /> Ministration.`)}

                        </span>
                        {/* <span className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">An API for your design system.

                        </span> */}
                    </motion.div>

                    <motion.p variants={imageAnimate} className=" max-w-6xl md:text-xl space-y-2 text-slate-900 dark:text-slate-100  " >
                        {props.paragraph ?? parse(`Jesus said,  “The hour is coming and is already here when the true worshipers will worship the Father in spirit and truth; for the Father is looking for those who will worship Him that way.” (John 4:23-25)`)}


                    </motion.p>

                </motion.div>

                {/* <div className={divCss2}>
    
                </div> */}
            </section>


            <section className={`dark:bg-darkcolor bg-lightcolor ${props.hidden ? 'hidden' : ' '}`}>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={7000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 6,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                >

                    <WithStyles
                        showTitles={true}
                        description="React Carousel with Server Side Rendering Support – Part 2"
                        musicianName="Simiane Brahy Tatu"
                        image="/images/simiane.jpg"
                    />
                    <WithStyles
                        showTitles={true}
                        description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
                        musicianName="Uche Newman"
                        image="/images/uche.jpg"
                    />
                    <WithStyles
                        showTitles={true}
                        description="React Carousel with Server Side Rendering Support – Part 2"
                        musicianName="John Ayayee"
                        image="/images/john.jpg"
                    />
                    {/* <WithStyles
                        showTitles={true}
                        description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
                        musicianName="Kwaku Darko"
                        image="/images/kd.jpg"
                    /> */}
                    <WithStyles
                        showTitles={true}
                        description="React Carousel with Server Side Rendering Support – Part 1"
                        musicianName="Freeman Ame"
                        image="/images/freeman.jpg"
                    />
                    <WithStyles
                        showTitles={true}
                        description="React Carousel with Server Side Rendering Support – Part 1"
                        musicianName="David Okai"
                        image="/images/david.jpg"
                    />
                    <WithStyles
                        showTitles={true}
                        description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
                        musicianName="Jerry Umole"
                        image="/images/jerry2.jpg"
                    />

                    <WithStyles
                        showTitles={true}
                        description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
                        musicianName="Joe Mettle"
                        image="/images/mettle.jpg"
                    />

                    <WithStyles
                        showTitles={true} description="React Carousel with Server Side Rendering Support – Part 2"
                        musicianName="AKosua Pokuaa"
                        image="/images/marion.jpg"
                    />
                </Carousel>
            </section>

        </>
    )
}

export default Imagine2