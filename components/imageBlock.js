import React from 'react'
import Image from 'next/image'
import ctl from '@netlify/classnames-template-literals'

const ImageBlock = (props) => {
  return (
    
    <div className={imageBlockStyle}>
      <div className={props.overlay}></div>
      <div className={props.imageTextCss}>{props.imageText}</div>
    <Image
      src={props.imgSrc ?? '/images/24hours.jpg'}
      layout='fill'
      className={easeInOut + ` rounded-neat object-cover object-center`}
      alt={props.alt ?? 'The Non-Stop Series'}
    />

  </div>
  )
}

export default ImageBlock

// const imageCss = `rounded-neat + {easeInOut}`

 const easeInOut = ctl(`rounded-neat motion-reduce:transition-none
 transition duration-1000 ease-in-out delay-300 overflow-none hover:-translate-y-1 
  hover:scale-110 hover:rounded-neat `)

const imageBlockStyle = 
ctl(` aspect-square rounded-neat box-border overflow-hidden
md:w-[234px]  w-full flex items-center justify-center relative p-2 `);