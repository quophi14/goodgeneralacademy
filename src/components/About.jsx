import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'
import { IoArrowForward } from 'react-icons/io5'

const About = () => {
  const servicesData = [
  {
    title: 'Our Mission',
    desc: 'The mission of Good General Academy school is to partner with parents to develop students into good leaders who are academically and morally prepared for life and eternity.',
    icon: assets.innovation
  },
  {
    title: 'Our Vision',
    desc: 'The Good General Academy seeks to educate students in a distinctively godly environment equipping them morally, physically and intellectually to apply the wisdom principles learnt as they meet life\'s challenges and opportunities.',
    icon: assets.knowledge
  },
  {
    title: 'Our Core Value → Courage',
    desc: 'We challenge students to grow in their relationship with God.We nurture the students to have the strength, willingness and determination to initiate, make things happen and to carry them through',
    icon: assets.creativity
  },
  {
    title: 'Our Core Value → Accountability',
    desc: 'We seek to train our students to be faithful in all their endeavours. We are committed to raising students to be honest and truthful with their teachers, parents and one another',
    icon: assets.problem_solving
  }
]


  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    
    id='about' className='relative flex flex-col items-center justify-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="bgImage" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
      
      <Title title='What Makes Us Unique' desc='From Practical Learning to Critical Thinking, we guide and nurture children to discover their true potential.'/>
      
      {/* Unique Pillars Grid */}
      <div className='flex flex-col md:grid grid-cols-2 gap-5 w-full mb-16'>
        {servicesData.map((service, index)=>(
          <ServiceCard key={index} service={service} index={index}/>
        ))}
      </div>

      {/* NEW: Proprietor Welcome Message Section */}
      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 w-full p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-100/50 dark:shadow-none'>
        
        {/* Left Side: Photo Frame */}
        <motion.div 
        initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2 }}
            viewport={{once: true}}
        className='relative shrink-0 w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800'>
          <img 
            src={assets.diana_mak || 'placeholder.com'} // Fallback if asset isn't ready
            alt="School Proprietor" 
            className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' 
          />
        </motion.div>

        {/* Right Side: Message Content */}
        <motion.div 
        initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay:0.3 }}
            viewport={{once: true}}
        className='flex-1 text-center lg:text-left flex flex-col justify-center h-full'>
          <span className='text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block'>Leadership Welcome</span>
          <h3 className='text-2xl font-extrabold text-gray-900 dark:text-white mb-4'>A Word from Our Leaders</h3>
          
          <p className='text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 italic mb-6'>
            "Welcome to Good General Academy. We recognize that for our children to truly succeed, they need a strong partnership between home and school. Our commitment is to provide a nurturing environment where children discover their unique talents—whether in the classroom mastering the GES curriculum, behind a piano, or on the ballet dance floor. We are honored to walk this journey of growth with your family."
          </p>

          <div>
            <h4 className='font-bold text-base text-gray-900 dark:text-white'>Mrs Diana Makumator</h4>
            <p className='text-xs opacity-60 mt-0.5'>School Head</p>
          </div>
        </motion.div>

      </div>

    </motion.div>
  )
}

export default About
