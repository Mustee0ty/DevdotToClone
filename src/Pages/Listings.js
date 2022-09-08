import React from 'react'
import { Listingg,ListItems } from '../data';

const Listings = () => {
  return (
    <section className='container mx-auto px-4'>
      <div className='h-18 flex justify-between'>
        <div>
          <h4 className='text-black font-bold text-xl'>Listings</h4>
        </div>
        <div>
          <button className='bg-gray-200 hover:bg-gray-300 rounded-md'>
            <p>create</p>
            </button>
          <button className='bg-gray-200 hover:bg-gray-300 rounded-md'>
            <p>Manage</p>
          </button>
        </div>
      </div>
      <section className='flex flex-cols'>
      <aside>
        <h5 className='text-black'>All Listings</h5>
        <div className='w-[35vh] bg-red-200'>
          {
            Listingg.map((things)=>{
              const { id,thing } = things;
              return (
                <div key={id}>
                  <div>
                    <p>{things.thing}</p>      
                   </div>
                </div>
              )
            })
          }
        </div>
      </aside>
      <main className='bg-blue-300 w-[140vh] grid-cols-2 space-x-2 '>
          {ListItems.map((jutsu)=>{
            const { id,heading,text,profileThumb,profileName,nameSub} = jutsu;
          return (
            <div className='rounded-md h-full w-[50vh] bg-white'>
              <h2 className='text-black'> {jutsu.heading} </h2>
              <p>{jutsu.date}</p>
              <div>
                <button>#Something</button>
              </div>
              <div>
                {jutsu.text}
              </div>
              <div>
                <img src="" alt="" />
                <div>
                  <p>{jutsu.propfileName}</p>
                  <p>{jutsu.nameSub}</p>
                </div>
              </div>
            </div>
          )
          })}
      </main>
      </section> 
    </section>
  )
}

export default Listings