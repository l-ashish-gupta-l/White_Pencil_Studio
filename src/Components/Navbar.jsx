import React from 'react'
import Logo from '../assets/LOGO.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Navbar() {

    useGSAP(() => {
        gsap.from("#Nav", {
            opacity: 0,
            delay: 2.1,
        })
    })
    return (
        <div id="Nav" className='px-5  md:px-20 py-8  text-white flex justify-between items-center'>
            <div className='logo '>
                <img src={Logo} alt="logo" />
            </div>
            <div className='links md:flex gap-10 hidden '>
                {["Services", "About us", "Portfolio"].map((item, index) => {
                    return (
                        <a href='#' key={index} className='font-["para"] '>{item}
                            {index === 2 && <span className='absolute px-1 rounded-full mix-blend-multiplye text-xs font-bold ml-1 bg-white text-black'> 90+</span>}
                        </a>
                    )
                })}
                <div className='btn justify-center  ml-10 items-center flex'>
                    <button className='px-[1px] py-[1px]  leading-none text-black flex justify-center items-center tracking-widest text-xs font-["Monument"] bg-white rounded-full'>
                        <div className=' px-4 py-2   rounded-full border-black border w-full h-full  flex justify-center items-center gap-2'>
                            <h1 className='font-bold'>CONTACT</h1>
                        </div>
                    </button>
                </div>
            </div>
            <div className='hamburger w-10 h-10 md:hidden rounded-full bg-white'
            ></div>

        </div>

    )
}

export default Navbar