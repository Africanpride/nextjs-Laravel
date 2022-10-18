import React from 'react'
import Image from 'next/image'
import ctl from '@netlify/classnames-template-literals'

const ImageBlockXL = (props) => {
  return (
    
    <div className={imageBlockStyle}>
        <div className={innerTextCss}>{props.innerText}</div>
    <Image
      src={props.imgSrc ?? '/images/24hours.jpg'}
      layout='fill'
      className={imageCss}
      alt={props.alt ?? 'The Non-Stop Series'}
    />

  </div>
  )
}

export default ImageBlockXL

const innerTextCss = ctl(`text-3xl font-bold text-lightcolor 
font-[anton] text-xl dark:text-white text-justify z-10 `)

const imageCss = ctl(`rounded-neat box-border`);

const imageBlockStyle = ctl(`  aspect-square rounded-neat box-border overflow-hidden
md:w-[768px]  w-full flex items-center justify-center relative p-2 `);