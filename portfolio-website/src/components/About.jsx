import React from 'react'

const About = () => {
  return (
    // the "name" is usefull for smooth scrolling
    <div name="about" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-15'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fuga eius quisquam quia doloremque, provident ducimus totam at soluta ut! Voluptatum veniam perspiciatis, et quisquam modi nostrum animi. Reiciendis similique modi, exercitationem cumque est odit harum ullam deserunt accusantium asperiores enim, obcaecati aspernatur quibusdam. Ad deleniti necessitatibus ex quia et!</p>

            <br></br>

            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias pariatur, inventore ipsa temporibus, vero porro consectetur quam commodi illo dolore quas totam aut est? Quos perspiciatis eveniet distinctio dolore, expedita quibusdam. Voluptatem quae in, impedit minus nulla eligendi nihil maiores eius odit officia magnam laboriosam quaerat pariatur vel reiciendis ipsa.</p>
        </div>
    </div>
  )
}

export default About