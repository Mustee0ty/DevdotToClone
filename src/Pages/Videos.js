import React from 'react'
import { SingleVideo } from '../data'

const Videos = () => {
  return (
    <section className='container px-4 mx-auto flex flex-col'>
    <div className='text-black font-bold text-3xl flex-1'>
    DEV Community 👩‍💻👨‍💻 on Video
    </div>
    <div className='flex-2 w-[150vh] grid grid-col-3'>
      <p>A video</p>
        {SingleVideo.map((item)=>{
          const { id,image,vidname,guyName,time } = item;
          return (
            <div className='w-[50vh] hover:shadow-md cursor-pointer hover:text-blue-600 bg-white rounded-md relative'>
              <img className='rounded-t-md w-full' src={item.image} alt="" />
              <div className='rounded-md bg-black text-white absolute bottom-24 right-0 '>
                <button>{item.time}</button>
                </div>
              <div className='m-2 space-y-1'>
                <p className='text-lg font-bold text-black hover:text-blue-700'>{item.vidname}</p>
                <p className=''>{item.guyName}</p>
              </div>
            </div>
          )
        })}
    </div>
  </section>
  )
}

export default Videos