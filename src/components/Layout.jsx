import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import FeatureTab from './FeatureTab'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='bg-zinc-200'>
      <main className='w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500'>
        <Header/>
      </main>
        <HeroSection/>
        <FeatureTab/>
        <Footer/>
    </div>
  )
}

export default Layout