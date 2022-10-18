import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Photobg from "../components/photobg";
import ctl from "@netlify/classnames-template-literals";
import { faBarChart, faPhone, faGlobe, faPlay } from "@fortawesome/free-solid-svg-icons";


const Slider = () => {

  return (




    <div className=" h-full w-full flex flex-col justify-between  py-10 px-10  overflow-hidden bg-center bg-no-repeat bg-cover ">

      <div className='z-20 relative'>
        <button type="button" className="text-white bg-black hover:bg-black/80 focus:ring-4 focus:ring-black/50 font-medium 
      rounded-lg text-sm  py-2.5 text-center  justify-center items-center dark:hover:bg-black/40 dark:focus:ring-gray-600 
       flex w-full md:w-[23%] 	 box-content mr-2 mb-2 ">

          {/* <FontAwesomeIcon icon={faGlobe} className=" text-lg ml-4 text-yellow-400"></FontAwesomeIcon> */}
          <div className='px-2'>1st October - 6th November, 2022</div>
        </button>
        </div>
      <div className='  w-full flex flex-col md:flex-row items-center justify-between z-30 px-8'>
        <div className='relative z-20 font-[anton] text-4xl md:text-7xl uppercase'>
          A Gathering of  Nations <br />For 144 Hours Non-Stop


        </div>

        <div>GRID IMAGES</div>

      </div>


      <div className="absolute inset-0 text-white bg-black bg-opacity-40">
      </div>

      <div className="relative  z-10">
        <h5 className="text-2xl font-bold leading-tight ">@Accra, GH</h5>
      </div>

    </div>


  );
}

export default Slider