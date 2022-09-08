import React from 'react'
import Post from './Post'
import { Feeds,Hashtages,Btns } from '../data'


const Hero = () => {
  return (
    <article>
      <div className=''>
        {Feeds.map((item)=>{
         const { name,image } = item;
          return (
            <div>
              <img className='rounded-t-md' src={item.image} alt="" /> 
            </div>
          )
        })}
      </div> 
      <Post />
    </article>
  )
}

export default Hero