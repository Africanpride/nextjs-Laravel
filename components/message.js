import React from 'react'
import Image from 'next/image';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from 'react-player/youtube'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Message = () => {
const [hide, setHide] = useState();

const handleclose = (e) => {
  e.preventDefault();
  setHide(true)
 console.log
}

  return <>
  
{ !hide &&  (<div
      id='playContainer'
      onClick={handleclose}
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xl w-full h-full flex justify-center items-center z-40 overflow-hidden'>

      <div className='w-full md:w-auto h-4/6  z-50 grid place-content-center place-items-center  rounded-md inset-0 '>
        <ReactPlayer
          className={'aspect-video w-full '}
          url={'https://youtu.be/CnAu4bV7sX8?t=26840'}
          width='100%'
          height='100%'
          controls='true'
          poster={`/images/john.jpg`}
        // playing={true}
        >
        </ReactPlayer>
      </div>

    </div>)
}
  </>;
}

export default Message