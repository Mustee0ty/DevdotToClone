import React from 'react'
import { Feeds,Hashtages,Btns } from '../data'

const Singlepost = (item) => {
  return (
    <article className='h-full rounded-md'>
          <div className='w-full h-full p-4 text-black bg-white'>               
          <div id='Profiler' className='flex  text-sm'>     
            <img className='rounded-full w-8 h-8 mt-1 ml-6' src={item.profileThumb} alt="" />
            <span className='pl-4'> 
              <p className='font-bold'>{item.profileName}</p>
              <p className=''>{item.date}</p></span>
            
            </div>
            <div className='flex-2 w-full m-2 pl-16'>
                {/*hashtags */}
                <h3 className='Font-bold hover:text-blue-700 text-black text-4xl'>
                  HTML Tips And Trick For Everyone
                </h3>
                <div className='py-1 my-1 space-x-1'>
                {Hashtages.map((item)=>{ 
                  const { name } = item;
                  return (
                    <button className='p-1 rounded-md hover:bg-gray-200'>{item.name}</button>
                  )
                })} 
                </div>
                <div className='flex flex-row bg-bl space-x-3'>
                  {Btns.map((item)=>{
                    const { name,icon } = item;
                    return (
                      <button className='hover:bg-gray-200 rounded-md items-center justify-center flex w-[20vh] align-middle'>
                        <div className=''><img className='h-6 w-6' src={item.icon} alt="" /></div>
                         <span>
                            <p> 11 {item.name}</p>
                          </span>      
                      </button>
                    )

                  })}
                </div>
            </div>
            <div>
            </div>
        </div>
    </article>
  )
}

export default Singlepost