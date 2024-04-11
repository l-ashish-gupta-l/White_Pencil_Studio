import React from 'react'
import WSvg from '../assets/W_logo.svg'
import clutch from '../assets/ClutchFooter.png'
import Awards from '../assets/Awards.png'
import Netty from '../assets/Netty.png'
import mart from '../assets/mart.png'

function Footer() {
  return (
    <div className=' w-full  h-screen relative'>
      <div className=' top w-full px-20 h-[45%]  flex p-3 gap-3'>
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
      <div className='w-full h-[10%]  py-3'>
        <div className='infinite_scroll h-full flex px-20 justify-between items-center border-t-2 border-b-2   bg-[#1d1b1f]'>
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
      <div className='w-full h-[45%] px-20 py-10 p-3'>
        <div className='w-full h-full '>
          <h1 className='font-["Monument"] text-7xl uppercase'>let's build</h1>
          <h1 className='Stroke font-["Monument"] text-7xl uppercase text-right '>Together.</h1>
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