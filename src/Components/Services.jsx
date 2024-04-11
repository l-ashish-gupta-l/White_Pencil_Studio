import React from 'react'

function Services() {
    return (
        <div className='text-white md:px-20 px-5 mt-40 md:mt-0 w-full h-screen  '>
            <div className='h-full py-2'>
                <h1 className='font-["para"] text-2xl md:text-lg tracking-wider border-b-2'>Services</h1>
                <div className=' md:px-10 h-[94vh] flex flex-col items-center'>
                    <div className='top  md:px-10 w-full md:h-4/5 py-10 tracking-widest'>
                        <div className='md:w-1/2 w-full md:h-1/4   md:mt-0  flex  items-center'>
                            <h1 className='font-["Monument"] uppercase text-3xl md:text-5xl'>Branding</h1>
                        </div>
                        <div className='w-1/2 md:h-1/4  ml-[50%] flex mt-10 md:mt-0 items-center justify-end'>
                            <h1 className='  font-["Monument"] uppercase text-3xl md:text-5xl text-end'>ui/ux design</h1>
                        </div>
                        <div className='w-1/2 md:h-1/4  flex mt-10 md:mt-0 items-center'>
                            <h1 className=' Stroke font-["Monument"] uppercase text-3xl md:text-5xl'>Web development</h1>
                        </div>
                        <div className='w-1/2 md:h-1/4  ml-[50%] flex mt-12 md:mt-0 items-center justify-end'>
                            <h1 className=' Stroke font-["Monument"] uppercase text-3xl md:text-5xl text-end'>App development</h1>
                        </div>
                    </div>
                    <div className='bottom py-10 md:py-0 md:flex justify-between md:px-10 items-center border-t-2 md:h-1/5 '>
                        <p className='w-full md:w-1/2 '>We use the power of design to solve complex problems and cultivate business solutions.</p>
                        <div className='btn mt-5 md:mt-0 '>
                            <button className='px-4 py-2 leading-none text-white tracking-widest text-xs font-["Monument"] border-[.3px] border-white bg-black rounded-full'>
                                View All Projects
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services