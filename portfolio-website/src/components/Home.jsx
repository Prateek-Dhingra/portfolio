import React from 'react'
import HeroImage from "../assets/heroImage.jpg"
import {FaArrowCircleRight} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=' h-max w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='h-20 w-full'></div>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'> I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I am going to be a fresh college graduate. I am pursuing B.Tech in IT. Im in my 3 year.
          </p>

          <div>
            <Link to="portfolio" smooth duration={300} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300 ml-3'>
                <FaArrowCircleRight size={25}/>
              </span>
            </Link>
          </div>

        </div>
        <div>
          <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
        </div>
      </div>
    </div>
  )
}

export default Home