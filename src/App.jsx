import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import CTC_Page from './Components/CTC_Page'
import Design from './Components/Design'
import Services from './Components/Services'
import Snapshots from './Components/Snapshots'
import Founders from './Components/Founders'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
function App() {

  const [Xaxis, setXaxis] = useState("0");
  const [Yaxis, setYaxis] = useState("0");
  // console.log(main);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setXaxis(e.clientX);
      setYaxis(e.clientY);

    });
  }, [])
  console.log(Xaxis)
  console.log(Yaxis)


  return (
    <div className='w-full h-full '>
      <div style={{
        left: Xaxis + 'px',
        top: Yaxis + 'px',
        transform: 'translate(-50%, -50%)'
      }} className=' hidden cursor fixed z-50 border-white border w-8 h-8 bg-transparent rounded-full md:flex justify-center items-center'>
        <div className='inner w-3 h-3 rounded-full bg-white'></div>
      </div>
      <Navbar />
      <HeroSection />
      <CTC_Page />
      <Design />
      <Services />
      <Snapshots />
      <Founders />
      <Contact />
      <Footer />

    </div>
  )
}

export default App