import React from 'react'
import telescopeGuidanceApp from '../assets/portfolio/telescopeGuidanceApp.png';
import telescopeGuidanceBackend from '../assets/portfolio/telescopeGuidanceBackend.png';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            src: telescopeGuidanceApp,
            title: "Telescope Guidance App",
            demoLink: "https://64a5611a02a596081c20785c--stirring-rolypoly-5cb4b4.netlify.app/",
            codeLink: ""
        },
        {
            id: 2,
            src: telescopeGuidanceBackend,
            title: "Telescope Data Storage and Authentication Backend API",
            demoLink: "https://telescopeguidanceappbackend.onrender.com?messageText=deploySuccessful",
            codeLink: "https://github.com/Prateek-Dhingra/TelescopeGuidanceApp"
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-[screen]'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6 '>Check Out Some of my work right here</p>
            </div>

            {/* structure of a card*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 
            {projects.map( ({id, src, title, demoLink, codeLink}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className=' items-center justify-center w-full px-6 pt-4 m-auto duration-200 hover:scale-105 text-center '>{title}</div>
                    <div className='flex items-center justify-center px-4 py-2'>
                        <button className='w-1/2 m-4 duration-200 hover:scale-105'>
                            <a href={demoLink} target='_blank' rel="noreferrer" className='w-full text-center'>Demo</a>
                        </button>
                        <button className='w-1/2 m-4 duration-200 hover:scale-105'>
                            <a href={codeLink} target='_blank' rel="noreferrer" className='w-full text-center'>Code</a>
                        </button>
                    </div>
                </div>)
            )}
            </div>
        </div>
    </div>
  )
}

export default Portfolio