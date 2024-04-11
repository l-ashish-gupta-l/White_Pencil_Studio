import React from 'react'

function Contact() {
    return (
        <div  className='w-full h-screen px-20 py-10 '>
            <div className=' w-full h-full flex gap-3'>
                <div className='w-3/5 h-full  flex flex-col gap-3'>
                    <div className='top w-full h-4/5 border rounded-tl-lg'></div>
                    <div className='top w-full h-1/5 border rounded-bl-lg'></div>
                </div>
                <div className='w-2/5 h-full border rounded-e-lg'></div>
            </div>
        </div>
    )
}

export default Contact