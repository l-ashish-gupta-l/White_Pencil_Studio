import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Design() {

    useGSAP(() => {
        gsap.to(".strip", {
            xPercent: -45,
            duration: 6,
            repeat: -1,
            ease: 'none' ,
        })
    }, [])
    return (
        <div className='py-20 w-full h-[70vh]  '>
            <div className=' flex  relative  justify-between items-center border-t-2 border-b-2  h-1/6 bg-[#1d1b1f] overflow-hidden'>
                <div className='strip w-[200vw]  flex justify-center  items-center gap-32 whitespace-nowrap'>
                    <div className='strip1 flex  w-[100vw] whitespace-nowrap  gap-32 items-center'>
                        <div className='content_span ml-2  flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider md:text-lg'>Creators</h1>
                        </div>
                        <div className='content_span ml-2 flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider text-lg'>Creators</h1>
                        </div>
                        <div className='content_span flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider text-lg'>Creators</h1>
                        </div>
                        <div className='content_span flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider text-lg'>Creators</h1>
                        </div>
                        <div className='content_span flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider text-lg'>Creators</h1>
                        </div>
                        <div className='content_span flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider text-lg'>Creators</h1>
                        </div>
                    </div>
                    <div className='strip2 flex  w-[100vw]  whitespace-nowrap gap-32 items-center'>
                        <div className='content_span ml-2  flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider md:text-lg'>Creators</h1>
                        </div>
                        <div className='content_span ml-2 flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider text-lg'>Creators</h1>
                        </div>
                        <div className='content_span flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider text-lg'>Creators</h1>
                        </div>
                        <div className='content_span flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider text-lg'>Creators</h1>
                        </div>
                        <div className='content_span flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider text-lg'>Creators</h1>
                        </div>
                        <div className='content_span flex justify-center items-center' >
                            <div className=" w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 backdrop-blur-xl "></div>
                            <h1 className='font-["para"] ml-2 tracking-wider text-lg'>Creators</h1>
                        </div>
                </div>
                </div>
            </div>

            <div className='md:px-20 px-5 py-10'>
                <div className=' w-full  h-full py-5 '>
                    <h1 className='font-["Monument"] uppercase text-4xl tracking-wider'>Design for real humans,</h1>
                    <h1 className='Stroke font-["Monument"] text-4xl tracking-wider'>NOT USERS</h1>
                    <div className='md:w-2/5 float-right'>
                        <p className='font-["para"] mt-5  font-light tracking-wide  '>Our philosophy behind designing experiences is that they should feel state-of-the-art. Like someone has already thought about them. Not painful to use. Not random.</p>
                        <button className='px-4 py-2 mt-5  leading-none text-white  tracking-widest text-xs font-["Monument"] border-[.3px] border-white bg-black rounded-full'>
                            View All Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design