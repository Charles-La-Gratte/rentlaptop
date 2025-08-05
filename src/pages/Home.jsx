import React from 'react'
import FeatureItem from '../components/FeatureItem'
import { products } from '../products'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl my-5'>List of the product</h1>
      <div className='grid jg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {products.map((product,key) =>
         <FeatureItem key={key} data={product}/>
        )}
     
      </div>
    </div>
  )
}

export default Home