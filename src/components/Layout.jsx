import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import FeatureTab from './FeatureTab'
import Footer from './Footer'
import CartTab from './CartTab'
import { useSelector } from 'react-redux'


const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div className='bg-zinc-200'>
      <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
          ${statusTabCart === false ? "" : "-translate-x-56"}`}>
        <Header/>
        
      </main>
        <HeroSection/>
        <FeatureTab/>
        <Footer/>
        <CartTab/>
    </div>
  )
}

export default Layout