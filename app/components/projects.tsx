
import Image from 'next/image'
import  Static from '../../public/Assets/project 1.jpeg'
import dynamic from'../../public/Assets/Project dynamic.jpeg'
import facebook from '../../public/Assets/Facebook.jpeg'

const Projects = () => {
  return (
    <div id="projects">
      <section className='text-gray-600 body-font'>
  <div className='container px-2 py-24 mx-auto md:w-full '>
    {/* project 1 */}
  <div className='text-4xl mb-10 text-center text-red-900 font-serif font-bold hover:text-red-700'>
    <h1 >My Projects</h1></div>
    <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
      <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
        <div className='rounded-lg h-64 overflow-hidden'>
          <Image src={Static} alt='pic'/>
        </div>
        <h2 className= 'text-xl font-medium title-font text-gray-900 mt-5'>
          Static Resume
        </h2>
        <p className='md:text-xl leading-relaxed mt-2'>
        A static resume presents a fixed snapshot of skills, experience, and qualifications, highlighting past accomplishments without emphasis on adaptability or change.</p>
        <a  href='https://milestone-1-2-three-wheat.vercel.app/' target='_blank'  className='text-red-500 inline-flex items-center mt-3 hover:cursor-pointer' >
          View Project
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      {/* project 2 */}
      <div className='p-4 md:w-1/3  mb-6 '>
        <div className='rounded-lg h-64 overflow-hidden'>
          <Image src={dynamic} alt='pic' className='h-70' />
        </div>
        <h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
          Dynamic Resume
        </h2>
        <p className='md:text-xl leading-relaxed mt-2 '>
        This is a Dynamic resume Which I have created for others.A dynamic resume highlights adaptable skills, achievements, and experiences, showcasing continuous growth and alignment with evolving industry needs.
        </p>
        <a href='https://milestone-3-dynamic-resume-ashen.vercel.app/' target='_blank' className='text-red-500 inline-flex items-center mt-3'>
          View Project..
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      
      </div>
      {/* project 3 */}

      <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
        <div className='rounded-lg h-64 overflow-hidden'>
         <Image src={facebook} alt='Pic'/>
        </div>
        <h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
         Facebook Clone Page
                 </h2>
        <p className='md:text-xl leading-relaxed mt-2'>
        I have created a Facebook clone page as part of my practice project, replicating core social features like user profiles, friend connections, and content sharing to enhance my web development skills.
        </p>
        <a href='https://facebook-clone-page.vercel.app/' target='_blank' className="text-red-500 inline-flex items-center mt-3">
           View Project 
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  
</section>
   
    </div>
  )
}

export default Projects
