import React from 'react'
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import githubImage from "../assets/github.png";
// import graphqlImage from "../assets/graphql.png";
import javascriptImage from "../assets/javascript.png";
// import nextjsImage from "../assets/nextjs.png";
import nodeImage from "../assets/node.png";
import reactImage from "../assets/react.png";
import tailwindImage from "../assets/tailwind.png";
import expressIcon from "../assets/express-js-icon.png"
import mongodbIcon from "../assets/mongodb-icon.png"
import cppIcon from "../assets/cpp-icon.png"
import cIcon from "../assets/c-icon.png"
import pythonIcon from "../assets/python-icon.png"


const Experience = () => {
    const technologies = [
        {
            id: 1,
            src: cppIcon,
            title: "C++",
            style: " shadow-[#00549D]"
        },
        {
            id: 2,
            src: cIcon,
            title: "C",
            style: " shadow-[#283593]"
        },
        {
            id: 3,
            src: pythonIcon,
            title: "Python",
            style: " shadow-[#0277BD]"
        },
        {
            id: 4,
            src: htmlImage,
            title: "HTML",
            style: " shadow-orange-500"
        },
        {
            id: 5,
            src: cssImage,
            title: "CSS",
            style: " shadow-[#039BE5]"
        },
        {
            id: 6,
            src: javascriptImage,
            title: "JavaScript",
            style: " shadow-yellow-500"
        },
        {
            id: 7,
            src: reactImage,
            title: "React",
            style: " shadow-[#80DEEA]"
        },
        {
            id: 8,
            src: githubImage,
            title: "Github",
            style: " shadow-gray-500"
        },
        {
            id: 9,
            src: tailwindImage,
            title: "TailWind",
            style: " shadow-sky-400"
        },
        {
            id: 10,
            src: nodeImage,
            title: "NodeJS",
            style: " shadow-lime-500"
        },
        {
            id: 11,
            src: expressIcon,
            title: "Express",
            style: " shadow-gray-400 bg-slate-500"
        },
        {
            id: 12,
            src: mongodbIcon,
            title: "MongoDB",
            style: " shadow-[#81C784]"
        },
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>

            {/* Structure of a Card */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {technologies.map(({id, src, title, style})=>(
                    <div className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt={title} className="w-20 mx-auto "></img>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience