"use client"
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import profilepic from "../../public/Assets/profile pic.jpg"
const Hero = () => {
  return (
    <div>
      
      <section className="text-red-600 body-font bg-rose-100">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 m:w-1/6 w-5/6 mb-10 object-cover object-center rounded h-[350px]"
      alt="hero"
      src={profilepic}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-900 ">
        I am a 
        
        <Typewriter
  options={{
    strings: [ "Front-End Developer",'Teacher at Maj Academy',  'and  GIAIC Student'],
    autoStart: true,
    loop: true,
  }}
/>

         
     
      </h1>
      <p className="mb-8 leading-relaxed text-gray-800 ">
       My name is Wajiha naz and i am doing ADP in Education from Virtual University.Now I am learning Next.Js and Artificial Intelligence, web 3.0 and Metaverse.
      </p>
      <div className="flex justify-center">
       
                          <a href="https://github.com/" target='_blank'>
        <button className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-4 gap-2 focus:outline-none hover:bg-red-700 rounded text-lg  mt-auto">
          <img src="Assets/logo git.png" alt="logo" className='h-10 w-10' />
          Visit Github account
        </button></a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
