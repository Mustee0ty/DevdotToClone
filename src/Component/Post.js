import React from 'react'
import { PostData } from '../data'
import { Feeds,Hashtages,Btns } from '../data'
import Singlepost from './Singlepost'


const Post = () => {
  return (
    <article>
      {PostData.map((post)=>{
        return <Singlepost key={post.id} 
        {...post}
        />
      })}
    </article>
  )
}

export default Post