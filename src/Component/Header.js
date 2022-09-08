import React, {useState} from 'react'
import { Link } from 'react-router-dom'

//import logo image

import Logo from '../assets/img/logo.png'
import ProfilePic from '../assets/img/PrPic.JPG'

const Header = () => {

  const [ open,setOpen ] = useState(false);

  return (
    <header className='bg-white' >
      <div className='container bg-white flex top-0 p-2 text-white h-18 mx-auto items-center justify-between w-full relative'>
                      {/* Left handside */}      
        <div className='flex right-0 '>
                      {/*Hamburger Menu for Mobile */}
        <button class="ml-3 rounded-md hover:bg-blue-100" onClick={() => setOpen(!open)} >
          <svg className='h-10 w-10 p-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="asbce03h1v64n4jx8rhwbnkgyoe7ncej" class="lg:hidden"><title    id="asbce03h1v64n4jx8rhwbnkgyoe7ncej">Navigation menu</title>
          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
        </svg>

      </button>
                        {/* Logo */}
      <div className=''>
          <a href="#">
            <img className=' h-10 w-15 px-2 md:pl-1 ' src={Logo} alt="" />
           </a>
       </div>
                        {/* Input */}
      <div className='relative'>
          <input className='w-[50vh] text-black h-10 ml-2 pl-2 border-none ring-1 ring-gray-300 rounded-md focus:ring-3 focus:ring-blue-500 focus:outline-none hidden md:block ' type="Search" placeholder='Search....' />
                        {/*Search Btn*/}
           <div className='flex items-center '>
            <button type="submit" aria-label="Search" 
              className=" rounded-md hover:bg-blue-100 hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" 
              class="h-10 w-10 p-2 absolute bottom-0 right-0 hover:bg-blue-100 rounded-md hover:cursor-pointer" 
              focusable="false">
                    <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z">
                    </path>
                  </svg>
                </button>
            </div>
          </div>
        </div>

                      {/*Right side*/}
        <div className='flex relative'>
                      {/*Right side search btn*/}
                      <div className='flex items-center'>
            <button type="submit" aria-label="Search" 
              className=" rounded-md md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" 
              class="absolute top-2 right-11 mr-10 hover:bg-blue-300m hover:cursor-pointer" 
              focusable="false">
                    <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z">
                    </path>
                  </svg>
                </button>
            </div>
                      {/*Create Post Button*/}
          <button className='mr-3 h-10 border-none ring-1 ring-blue-800 text-blue-800 rounded-md flex-grow cursor-pointer hover:bg-blue-700 hidden md:block hover:text-white hover:underline'>
            <Link to='/createPost'><p className='p-2'>Create Post</p></Link>
          </button>     
                      {/*Notification Button*/}
          <button className='rounded-md hover:bg-blue-100 px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"     aria-labelledby="ainwueizoxn9d1z5lxr28h191iyh1cui" class=" ">
                  <title  id="ainwueizoxn9d1z5lxr28h191iyh1cui">Notifications</title>
                <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
           </svg>
          </button>
                      {/*Profile Pic*/}
           <button className='h-10 w-10 pt-1 px-1 py-1 flex rounded-full hover:bg-blue-100 '>
              <img className='rounded-full' src={ProfilePic} alt="" />
           </button>
        </div>
        </div>
    </header>
  )
};

export default Header