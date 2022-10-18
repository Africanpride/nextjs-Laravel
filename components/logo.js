import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <>
      <div className="w-16 h-16 mx-2 flex justify-center-items-center">
        <Image src="/images/naa-logo.png" alt="Flowbite" width={100} height={100} />
        </div>
      </>
  )
}

export default Logo