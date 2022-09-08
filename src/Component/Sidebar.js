import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Extra, NavExtras, navigation, social } from '../data';
import { Feeds,Hashtages,Btns } from '../data'

const Sidebar = () => {

  const [ open,setOpen ] = useState(false);

  return (
    <div className='flex'>
      <div className={`${ open ? 'w-[50vh]' : 'hidden' }'h-screen bg-gray-200 relative' `}>
        <div className='p-7 text-2xl font-semibold h-screen'>
        <div className="hidden col-start-1 col-end-2 lg:block ml-[10%] mt-[3vh] w-[100%] ">
        <div className='text-base'>
        {navigation.slice(0, 13).map((item, index) => {
          const { id, image, name, link } = item
          return (
            <button
              className="flex pt-1 text-black text-center w-[35vh] md:[35vh] p-1 h-10 list-none rounded-md hover:text-blue-800 hover:underline hover:bg-sky-300"
              key={id}
            >
              <img className="h-6 w-6" src={item.image} alt="" />
              <span>
                <p className="pl-2 text-md inline-flex ">
                  <Link to={item.link}>{item.name}</Link>
                </p>
              </span>
            </button>
          )
        })}
      <div className="font-bold text-black">
        Other
      </div>
      <div className="w-[30vh] ">
        {navigation.slice(13).map((item, index) => {
          const { image, name } = item
          return (
            <button
              className="flex m-1 text-black flex-row w-full hover:bg-blue-300 hover:text-blue-700 hover:underline rounded-md"
              key={index}
            >
              <img className="h-6 w-6 m-1" src={item.image} alt="" />
              <span>
                <p className='p-1'>{item.name}</p>
              </span>
            </button>
          )
        })}
      </div>
      <div>
        <button className="flex flex-row space-x-2 w-[30vh]">
          {social.map((item) => {
            const { icon } = item
            return (
              <img
                className="h-10 rounded-md hover:bg-blue-300 w-10 p-2"
                src={item.icon}
                alt=""
              />
            )
          })}
        </button>
        <div className='h-[full] w-[30vh] mt-10'>
          <div className='flex space-x-9 justify-between'>
            <div className='h-[4vh] w-[14vh] text-black text-lg mt-1 items-center font-bold '>My Tags</div>
            {Extra.map((items)=>{
              const {name,icon} = items;
              return (
                  <div className=''>
                    <img className='h-10 w-10 p-2 hover:bg-blue-300 rounded-md' src={icon} alt="" /> 
                  </div>
              )
            })}
          </div>
          <div className='flex flex-col space-y-1 '>
            {Hashtages.map((item)=>{
              const { name,href } = item;
              return (
              <button className='w-[30vh] text-black flex hover:bg-blue-300 hover:text-blue-700 hover:underline rounded-md m-1 ml-0 h-10'>
                <p className='m-2'>{item.name}</p>
                </button>
              )
            })}
          </div>
        </div>
        <div className='w-[34vh]'>
          <div className='w-[34vh]'>
            {NavExtras.map((items)=>{
              const {id,image,heading,text,button} = items;
              return(
                <section className='bg-white rounded-md mt-10' key={items.id}>
                  <div className='p-4'>
                    <img className='rounded-md' src={items.image} alt="" />
                  </div>
                  <h6 className='text-black text-xl font-bold p-4'>{items.heading}</h6>
                  <p className='p-4 text-black'>{items.text}</p>
                  <button className='p-2 font-bold text-blue-700'>{items.button}</button>
                </section>
              )
            })}
          </div>
        </div>
      </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar