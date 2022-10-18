import React from 'react'

const NotAvailable = () => {
    return (
        <>
            <div className='h-[60vh] dark:bg-slate-900 flex flex-col justify-center items-center text-gray-900 dark:text-white'>


                <div className='block max-w-xl'>
                    <p className='text-center text-3xl'>{'Ooops...Finally Lost'}
                    </p>
                </div>
                <br />
                <div className='block max-w-xl'>
                    <p className='text-center'>{'The page you are looking for could not be found! Please, go back to our home page and start over or contact us if the problem persists.'}
                    </p>
                </div>

            </div>
        </>
    )
}

export default NotAvailable