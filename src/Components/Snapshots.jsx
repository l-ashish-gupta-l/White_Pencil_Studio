import React from 'react'
import ban1 from '../assets/banner2.jpg'
import ban2 from '../assets/banner3.jpg'
import ban3 from '../assets/banner6.jpg'
import ban4 from '../assets/banner1.jpg'
import ban5 from '../assets/banner4.jpg'
import ban6 from '../assets/banner7.jpg'

function Snapshots() {
    return (
        <div className='w-full md:px-20 px-5 py-10 md:py-5 md:h-screen '>
            <h1 className='font-["Monument"] uppercase text-4xl' >SNAPSHOTS</h1>
            <div className=' w-full md:px-10  flex gap-2 h-[50vh] md:h-[85vh] my-5'>
                <div className='w-1/3  flex flex-col gap-2'>
                    <div className='w-full h-1/2 border rounded-tl-lg   overflow-hidden'>
                        <img src={ban1} className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full h-1/2 border rounded-bl-lg  overflow-hidden'>
                        <img src={ban2} className='w-full h-full object-cover' />
                    </div>
                </div>

                <div className='w-1/3  flex flex-col gap-2'>
                    <div className='w-full h-3/4 border overflow-hidden'>
                        <img src={ban3} className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full h-1/4 border overflow-hidden'>
                        <img src={ban4} className='w-full h-full object-cover' />
                    </div>
                </div>

                <div className='w-1/3  flex flex-col gap-2'>
                    <div className='w-full h-1/2 border rounded-tr-lg overflow-hidden'>
                        <img src={ban5} className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full h-1/2 border rounded-br-lg overflow-hidden'>
                        <img src={ban6} className='w-full h-full object-cover' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Snapshots