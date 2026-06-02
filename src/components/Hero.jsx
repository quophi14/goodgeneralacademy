import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'


const images = [
    "/images/excursion_1.png",
    "/images/akwasi.png",
    "/images/learner.jpg",
]

const Hero = () => {
    const [current, setCurrent] = useState(0);
    useEffect(()=> {
        const interval = setInterval(()=>{
            setCurrent((prev)=> (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [])
  return (
    <div className='relative h-screen w-full overflow-hidden  flex flex-col items-center gap-6' >

        {/* Background Image */}
       <div className="absolute inset-0 overflow-hidden">
  <div
    className="flex h-full transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {images.map((img, index) => (
      <div key={index} className="min-w-full h-full">
        <img
          src={img}
          alt="School"
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>
        <div className='absolute inset-0 bg-black/70'></div>
        {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 gap-12.5">
       <motion.h1 
       initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1.0, delay:0.8 }}
        viewport={{once: true}}
       className='text-4xl sm:mb-20 sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Discover the Joy of Learning at <br></br><span className='bg-gradient-to-r from-[#b5c903] to-[#c0af16] bg-clip-text text-transparent text-6xl font-extrabold mt-10 sm:mt-20 bold'>GOOD GENERAL ACADEMY</span></motion.h1>

        
         <motion.p 
         initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay:1 }}
        viewport={{once: true}}
         className='text-3xl sm:text-lg font-medium text-white dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Unleash Your Brilliance And Embrace Education </motion.p>

        
        </div>

    </div>
  )
}

export default Hero