import React, { useState } from 'react'
import {Toaster} from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ApprovedBy from './components/ApprovedBy'
import About from './components/About'
import Milestone from './components/Milestone'
import Academics from './components/Academics'
import Staff from './components/Staff'
import Teachers from './components/Teachers'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-secondary relative'>
      <Toaster/>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero/>
        <ApprovedBy/>
        <About/>
        <Milestone/>
        <Academics/>
        <Teachers/>
        <Gallery/>
        <Testimonials/>
        <Contact/>
        <Footer theme={theme
          
        }/>
    </div>
  )
}

export default App