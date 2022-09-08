import React from 'react'
import { ReadingTags } from '../data'

const ReadingList = () => {
  return (
    <section>
      <div className='container mx-auto px-4 h-201 mt-4'>
        <div className='flex flex-row  justify-between' >
        <div className=''>
          <p className='text-black font-bold text-3xl '>Reading list(2)</p>
        </div>
        <div className='space-x-4'>
          <button className='p-2 rounded-md hover:bg-gray-300 '><p className='text-black hover:text-blue-700 hover:underline '>View archive</p></button>
          <input className='h-10 rounded-md' type="search" placeholder='  Search...' />
        </div>
        </div>
        <div className='grid grid-row-2'>
          <div className='text-black m-4'>
          <button className='m-2 pl-2 bg-white rounded-md w-[24vh] h-[5vh] font-bold text-start'>
              All tags
          </button>
            {ReadingTags.map((item)=>{
              const { id,name } = item;
              return (
                <div key={id} className=''>
                  <button className=' hover:bg-blue-200 p-2 w-[24vh] text-start text-black rounded-md'>
                    {item.name}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReadingList