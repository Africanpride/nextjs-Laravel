import React from 'react'
import WithStyles from '../components/WithStyles'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ctl from "@netlify/classnames-template-literals";
import parse from 'html-react-parser'

const ministers = [
    // { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir2.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir6.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir5.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir3.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir8.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir7.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir9.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir10.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir3.jpg' },
    { musician: '24 Elders', description: '', imageSrc: '/images/24elders.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir4.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/mass-choir5.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/akosua.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/police-band1.jpg' },
    { musician: 'Mass Choir', description: '', imageSrc: '/images/lic.jpg' },
]

const Choir = () => {
    return (
        <>
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
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
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
                slidesToSlide={1}
                swipeable
            >

                {ministers.map(({ musician, description, imageSrc }) =>
                    <WithStyles description={description} key={musician} musicianName={musician} image={imageSrc} />
                )}

            </Carousel>
        </>
    )
}

export default Choir