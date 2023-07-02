import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-scroll";

const Navbar = () => {
    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "portfolio"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "contact"
        },
    ]

    const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Prateek</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => // destructuring the object into id, link 
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-100'>
                    <Link to={link} smooth duration={300}>{link}</Link>
                </li>
            )}
        </ul>

        <div onClick={(event)=>setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-100'>
            {nav? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && 
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-100'>
                {links.map(({id, link}) => // destructuring the object into id, link 
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link onClick={()=>setNav(false)} to={link} smooth duration={300}>{link}</Link>
                    </li>
                )}
            </ul>
        }
    </div>
  )
}

export default Navbar