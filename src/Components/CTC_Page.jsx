import React from 'react'
import Pic1 from '../assets/warner-bros 1.jpg'
import Pic2 from '../assets/wendys 1.jpg'
import Pic3 from '../assets/oneplus 1.jpg'
import Pic4 from '../assets/tdv 1.jpg'
import Pic5 from '../assets/deloitte 1.jpg'
import Pic6 from '../assets/hyatt 1.jpg'
import Pic7 from '../assets/oppo 1.jpg'
import Pic8 from '../assets/sony 1.jpg'
import Pic9 from '../assets/Center.png'

function CTC_Page() {
    return (
        <div className='md:px-20  py-2  pt-10 md:mt-10 w-full h-1/2  md:h-screen '>
            <div className=' py-2 px-5 w-full h-full relative '>
                <div className='top flex gap-2 md:gap-5 w-full h-1/2 '>
                    <div className='w-1/4 border h-1/2 md:h-[110%] flex justify-center items-center'>
                        <img src={Pic1} alt="Warner Bros Logo" className='h-full' />
                    </div>
                    <div className='border w-1/4 h-1/2 p-2 flex justify-center items-center '>
                        <img src={Pic2} className='w-[100%]' />
                    </div>
                    <div className='border w-1/4 h-1/2  flex justify-center items-center'>
                        <img src={Pic3} alt="oneplush" />
                    </div>
                    <div className='w-1/4 border h-[110%]  flex justify-center items-center'>
                        <img src={Pic4} />
                    </div>
                </div>
                <div className='top  flex  mt-3 md:mt-5 items-end gap-5 w-full h-1/2'>
                    <div className='w-1/4 border h-[90%]  flex justify-center items-center'>
                        <img src={Pic6} />

                    </div>
                    <div className='border w-1/4 h-1/2 flex justify-center items-center '>
                        <img src={Pic7} />

                    </div>
                    <div className='w-1/2 flex items-end flex-col h-[90%]'>
                        <div className='w-1/2 h-[40%] border  flex justify-center items-center '>
                            <img src={Pic5} />

                        </div>
                        <div className='w-full mt-3 border h-[60%]  flex justify-center items-center'>
                            <img src={Pic8} />
                        </div>
                    </div>
                </div>

                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-[45%] '>
                    <img src={Pic9} />


                </div>

            </div>

        </div>
    )
}

export default CTC_Page