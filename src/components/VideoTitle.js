import React from 'react'

const VideoTitle = ({ title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-36 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold pb-6'>{title}</h1>
      <p className='pb-5 text-base w-1/4'>{overview}</p>
      <div>
        <button className='bg-white  py-3 px-12 mx-2 rounded-md text-black hover:bg-opacity-80'>Play</button>
        <button className='bg-gray-500 bg-opacity-50  py-3 px-8 mx-2 rounded-md text-white'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;