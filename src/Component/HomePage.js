import React from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom'

//import Components

import { Extra, NavExtras, navigation, social } from '../data';
import { Feeds,Hashtages,Btns } from '../data'
import { UpperImg, LowerImg } from '../data' 
import { Cnav } from '../data'

import Header from './Header';
import Sidebar from './Sidebar';


const HomePage = () => {


  return (
    <main>
      <header>
        <Header />
      </header>
      <div className='grid grid-cols-6'>
        <Sidebar />
        <main className='h-full col-start-2 col-end-5 overflow-auto w-[100%] ml-[10%]'>
      <div className='flex flex-row'>
        {Cnav.map((item)=>{
          const { name } = item;
          return (
            <nav className='m-2'>
              <button className=' h-10 px-2 text-lg hover:text-blue-700 rounded-md hover:bg-white'>{item.name}</button>
            </nav>
          )
        })}
      </div>
        <Hero />
        </main>
      <aside className='hidden md:block col-start-5 col-end-7 w-[43vh] ml-[15%]'>
        
        <div className=' mt-[2vh] rounded-md ml-[3vh] bg-gray-100 '>
      
        <div className='pt-[4vh] px-[2vh]'>
          {UpperImg.map((thing)=>{
            const {name, image,heading,buttom} = thing;
            return (
              <div className=''>
                <img className='rounded-md ' src={thing.image} alt="" />
                <h3 className='text-black font-bold my-[4vh]'>{thing.heading}</h3>
                <button className='font-bold mb-2 text-blue-700 text-start' >{thing.button}</button>
              </div>
            )
          })}
        </div>
        
      
        <div className=''>
          {LowerImg.map((things)=>{
            const { name,image  } = things;
            return (
              <div className='py-2 justify-items-center '>
                <img className='rounded-md' src={things.image} alt="" />
                <h3 className='font-bold hover:bg-white hover:text-blue-700 text-black my-4 w-full h-12 text-center '>
                  <p className='pt-2 text-lg'>{things.heading}</p>
                </h3>
                <p className='hover:bg-white pl-3 pt-2 hover:text-blue-700 text-black my-4 w-full h-20 text-start'>{things.l1}</p>
                <p className='hover:bg-white pl-3 pt-2 hover:text-blue-700 text-black my-4 w-full h-20 text-start'>{things.l2}</p>
                <p className='hover:bg-white pl-3 pt-2 hover:text-blue-700 text-black my-4 w-full h-20 text-start'>{things.l3}</p>
                <p className='hover:bg-white pl-3 pt-2 hover:text-blue-700 text-black my-4 w-full h-20 text-start'>{things.l4}</p>
                <p className='hover:bg-white pl-3 pt-2 hover:text-blue-700 text-black my-4 w-full h-20 text-start'>{things.l5}</p>
                <button className='h-10 w-[35vh] items-center justify-center m-4 font-semibold text-white rounded-md bg-blue-800 hover:bg-blue-900'>{things.button1}</button>
                <button className='h-10 text-xl w-[35vh] items-center justify-center ml-4 font-semibold text-black rounded-md bg-gray-300 hover:bg-gray-400 '>{things.button2}</button>
              </div>
            )
          })}
        </div>

        </div>
  
    </aside>
        </div>
        
    </main>
  )
}

export default HomePage