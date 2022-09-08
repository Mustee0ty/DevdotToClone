import React from 'react'
import { SingleTag } from '../data'

const Tags = () => {
  return (
    <section>
      <div className='container mx-auto px-4 h-201 mt-4'>
        <div className='flex flex-row  justify-between' >
        <div className=''>
          <p className='text-black font-bold text-4xl '>Top tags</p>
        </div>
        <div className='space-x-4'>
          <input className='h-10 rounded-md' type="search" placeholder='  Search for Tag' />
          <button className='p-2 rounded-md hover:bg-gray-400'><p className='text-black font-bold'>Following Tags</p></button>
        </div>
        </div>
        <div className='flex-2 grid grid-cols-3 space-x-3 h-full'>
          {SingleTag.map((items)=>{
          const { id,tag,text,posts,btnTxt } = items
          return (
            <div key={id} className='rounded-md bg-white w-full h-full'>
              <div className='bg-yellow-300 w-full rounded-t-md mb-2 h-4'>
              </div>
            <div className='m-6 text-black'>
              <p className='font-bold my-3 text-xl'>#{items.tag}</p>
                <p className='my-2'>{items.text}</p>
                <p className='py-3'>{items.posts}</p>
                <button className='h-10 mt-6 ring-2 ring-gray-200 hover:ring-gray-400 w-25 text-center rounded-sm text-black'>
                  <p className='p-2'>
                    Following
                  </p>
                  </button>
              </div> 
            </div>  
          )
          })}
        </div>
      </div>
    </section>
  )
}

export default Tags