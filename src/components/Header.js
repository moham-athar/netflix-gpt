import React from 'react'
import img from '../assets/img.png'
const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from black z-10'>
      <img 
      className='w-44'
      src= {img}
      alt = 'logo'
      />
    </div>
  )
}

export default Header