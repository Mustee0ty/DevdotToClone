import {useState} from 'react'
import Control from '../data'
import Logo from '../assets/img/logo.png'



const NewSideBar = () => {
  const [ open, setOpen ] = useState();
  const Menus = [
    { title: "Dashboard", src:"Chart_fill" },
    { title: "inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true},
    { title: "Schedule ", src: "Calender" },
    { title: "Search", src: "Search"  },
    { title: "Analytics", src: "Chart"  },
    { title: "Files", src: "Folder", gap: true  },
    { title: "Setting", src: "Setting"  },
  ]
  return (
    <section className='flex'>
      <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>

        <img src={Control} className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && 'rotate-180'}`}  onClick={()=>setOpen(!open)} />
        
        <div className='flex gap-x-4 items-start'>
        
        <img src={Logo} className={`cursor-pointer duration-500 h-6 w-6 `} />
        
        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0' } `}>Designer</h1>
      
      </div>
      <ul className='pt-6'>-
        {Menus.map((menu,index)=>(
          <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white ${menu.gap ? "mt-9" : "mt-2" }`} >
           <img src={`../assets/img/${menu.src}.png`} alt="" />
           <span className={`${!open && 'hidden'} origin-left duration-200`} >{menu.title}</span>
          </li>
        ))}
      </ul>
      
      </div>  
      
      <div className='p-7 text-2xl font-semibold flex-1 h-screen' >
      
        <h1 className='text-black'>   
          Home Page
          </h1>
      </div>
    </section>
  )
}

export default NewSideBar