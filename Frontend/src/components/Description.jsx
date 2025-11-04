import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h2 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h2>
        <p className='text-lg  text-gray-600 mb-8'>Turn your imagination into visuals</p>
        <div className='flex '>
            <div className='flex flex-col gap-5 md:gap-14 md:flex-row '>
                <img className='w-80 xl:w-96 rounded-lg'  src={assets.sample_img_1} />
                
            
            <div className='flex flex-col justify-center items-center text-center my-20'>
                <h2 className='text-4xl py-5'>Introducing AI powered text to image Genarater</h2>
                <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex quidem soluta perspiciatis id fuga doloribus! Totam libero consequatur asperiores, officia velit id magni quidem illum perspiciatis corporis provident repellat!</p>
            </div>
            </div>
            
        </div>
        
      
    </div>
  )
}

export default Description
