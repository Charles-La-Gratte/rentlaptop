import React from 'react'
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png' 
import image1 from '../assets/images/image1.png'
const FeatureItem = () => {
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to=''>
          <img src={image1} alt="" className='w-full h-90 object-cover object-top drop-shadow-[0_80px_30px_#0007] '/>
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium'>DELL</h3>
        <div className='flex justify-between items-center'>
            <p>
                $<span className='text-2xl font-medium'>8000</span>
            </p>
            <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-sky-500' onClick=''>
                <img src={iconCart} className='w-5' alt=""/>
                Add To Cart
            </button>
        </div>
    </div>
  )
}

export default FeatureItem