import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-30 '>
      <img src={assets.logo} />

      <div className='flex gap-2 '>
        <img className='hover:scale-[1.08] transition-all' src={assets.facebook_icon} />
        <img className='hover:scale-[1.08] transition-all' src={assets.instagram_icon} />
        <img className='hover:scale-[1.08] transition-all' src={assets.twitter_icon} />
      </div>
    </div>
   
  )
}

export default Footer
