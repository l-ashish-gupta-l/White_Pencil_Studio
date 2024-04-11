import Founder1 from '../assets/ujjwal-chawla.png'
import Founder2 from '../assets/ronish-sawal.png'
import Star from '../assets/star.svg'
import Clutch from "../assets/clutch 1.jpg"
function Founders() {
    return (
        <div className=' w-full  md:px-20  md:mt-20  md:py-5 border-b '>
            <div className='top border-b w-full md:flex   justify-center items-center '>
                <div className='w-full flex  justify-center items-center'>
                    <img src={Founder1} alt='ujjwal' className='w-1/2 h-full' />
                    <img src={Founder2} alt='ronish' className='w-2/5 h-full' />
                </div>
                <div className='md:ml-20 px-5 mt-10 pb-10 md:mt-0'>
                    <h1 className='font-["Monument"] tracking-wider text-2xl uppercase text-left   '>Hop on a free strategy call with our Design Leaders</h1>
                    <button className='px-4 py-2 mt-5  leading-none text-white  tracking-widest text-xs font-["Monument"] border-[.3px] border-white bg-black rounded-full'>
                        START YOUR PROJECT
                    </button>
                </div>
            </div>
            <div className='bottom w-full  md:py-0 py-10 md:h-[65vh] md:flex  '>
                <div className='md:w-2/5 flex justify-center items-start px-5 md:px-20 flex-col'>
                    <div className='py-5 border-b '>
                        <h1 className='font-["Monument"] text-3xl text-start'>4.9/5</h1>
                        <div className='flex mt-1'>
                            <img src={Star} className='w-5 h-5' />
                            <img src={Star} className='w-5 h-5' />
                            <img src={Star} className='w-5 h-5' />
                            <img src={Star} className='w-5 h-5' />
                            <img src={Star} className='w-5 h-5' />
                        </div>
                        <h1 className='font-["Monument"] mt-1 md:text-xl flex gap-2 justify-center items-center'>On
                            <span>
                                <img src={Clutch} />
                            </span></h1>
                    </div>
                    <div className='para font-["para"] tracking-wider text-base md:w-[70%] mt-3'>
                        <p>why 4.9 ?</p>
                        <p>we believe in chasing stars but keeping a telescope handy for the ones we haven't reached yet!</p>
                    </div>
                </div>
                <div className='md:w-3/5 px-5 md:px-10 py-10 md:py-5 h-[50vh] md:h-full'>
                    <div className='slide w-full flex h-full'>
                        <div className='w-2/5   h-full p-3 flex  flex-col gap-3'>
                            <div className='border w-full h-1/2  rounded-lg'></div>
                            <div className='border w-full h-1/2  rounded-lg '></div>
                        </div>
                        <div className='w-3/5   h-full p-3'>
                            <div className='w-full h-full rounded-lg border'>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Founders