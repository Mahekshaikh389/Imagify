import React from 'react'
import { assets, testimonialsData } from '../assets/assets.js'

function Testimator() {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-20 '>
        <div className='text-center '>
            <p className='text-center font-semibold text-3xl'>Customer testimonials</p>
            <p>what our customer are saying</p>
        </div>
        <div className='flex flex-wrap gap-6 m-4 mt-10 ' >{testimonialsData.map((testimonal, index)=>(
            <div key={index} className=' border p-12 bg-white/20 rounded-lg shadow-lg order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all  '>
                <div className= 'flex flex-col items-center'>
                    <img className='w-14 rounded-full' src={testimonal.image} />
                    <h2>{testimonal.name}</h2>
                    <h2>{testimonal.role}</h2>
                    <div className='flex mb-4'>
                        {Array(testimonal.stars).fill().map((item, index)=>(
                            <img key={index} src={assets.rating_star} />
                        ))}
                    </div>
                    <p>{testimonal.text}</p>

                    
             
                </div>
            </div>
        ))}
           
        </div>
      
    </div>
  )
}

export default Testimator
