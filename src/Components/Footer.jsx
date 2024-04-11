import React from 'react'
import WSvg from '../assets/W_logo.svg'
import clutch from '../assets/ClutchFooter.png'
import Awards from '../assets/Awards.png'
import Netty from '../assets/Netty.png'
import mart from '../assets/mart.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Footer() {

  useGSAP(() => {
    gsap.to(".strip", {
      xPercent: -45,
      duration: 5,
      repeat: -1,
      ease: 'none',
    })
  }, [])
  return (
    <div className=' w-full  h-screen relative'>
      <div className=' top w-full   px-5 md:px-20 md:h-[45%]  hidden md:flex p-3 gap-3'>
        <div className='w-1/2 h-full border flex justify-center items-center '>
          <img src={clutch} />
        </div>
        <div className='w-1/2 h-full  flex gap-3'>
          <div className='w-1/2 h-full border flex justify-center items-center'>
            <img src={Awards} />
          </div>
          <div className='w-1/2 h-full  flex flex-col gap-3'>
            <div className='border w-full h-1/2 flex justify-center items-center '>
              <img src={Netty} className='w-[35%]' />
            </div>
            <div className='border w-full h-1/2 flex justify-center items-center '>
              <img src={mart} className='w-[50%]' />
            </div>
          </div>
        </div>
      </div>
      <div className=' flex  relative  justify-between items-center border-t-2 border-b-2  py-2 my-5  bg-[#1d1b1f] overflow-hidden'>
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
      <div className='w-full h-[45%] px-5 md:px-20 py-10 p-3'>
        <div className='w-full md:h-full '>
          <h1 className='font-["Monument"] text-3xl md:text-7xl uppercase'>let's build</h1>
          <h1 className='Stroke font-["Monument"] text-3xl md:text-7xl uppercase text-right '>Together.</h1>
          <button className='px-[1px] py-[1px] mt-5 leading-none text-black flex justify-center items-center gap-2 tracking-widest text-xs font-["Monument"] bg-white rounded-full'>
            <div className=' px-4 py-2   rounded-full border-black border-2 w-full h-full  flex justify-center items-center gap-2'>
              <span><img src={WSvg} /></span><h1 className='font-bold'>hello@thewhitepencil.com</h1>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer