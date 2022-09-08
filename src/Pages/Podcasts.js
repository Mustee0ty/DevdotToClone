import React from 'react'
import { MiddleCards, TopCards } from '../data.js';

const Podcasts = () => {
  return (
    <section className='container'>
      <div className='flex justify-between items-center m-10'>
        <h4 className='text-black font-bold text-3xl'>Podcasts</h4>
        <button className='h-6 w-40 text-black rounded-md hover:bg-gray-300 text-md'><p>Suggest a Podcast</p></button>
      </div>
      <div className='font-bold text-2xl mt-6 text-black m-10'><p>Latest episodes</p></div>
      <div className='grid grid-cols-6 space-x-4 m-10  '>
      {TopCards.map((items)=>{
        const {id,image,heading,subTitle} = items;
        return(
          <div key={id} className='w-[30vh] hover:shadow-md text-black space-y-2 hover:text-blue-700 h-full rounded-md m-2 p-4'>
          <img className='rounded-t-md' src={items.image} alt="" />
          <div className='m-3'>
            <h4 className='text-black'>{items.heading}</h4>
            <p className='pt-2 text-sm'>{items.subTitle}</p>
          </div>
        </div>
        )
      })}
      </div>
      <div className='grid grid-cols-3 space-x-6'>
        {MiddleCards.map((items)=>{
          const { id, image, text } = items
          return(
            <div key={id} className='h-[60vh] rounded-md'>
          <img src={items.image} alt="" />
          <div className='text-center'>
            <h4 className='text-black'>{items.text}</h4>
          </div>
        </div>
          )
        })}
      </div>
    </section>
  )
}

export default Podcasts