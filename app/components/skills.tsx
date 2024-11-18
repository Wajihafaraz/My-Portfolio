
import { FaArrowRight } from "react-icons/fa6";


const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-8 text-red-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem] ">
        {/* skills */}
       
      

      <div className="p-4 md:w-1/3 sm:w-1/2">
        <div className="flex rounded-lg h-full bg-gray-100  flex-col">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
            <FaArrowRight />

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-full bg-gray-300 rounded-xl'>
<div className="absolute bg-red-500 h-1 rounded-xl w-[80%]"></div>
            </div>
           <p className="text-right font-bold text-red-500">80%</p>
          </div>
        </div>
      </div>
        {/* skills */}
        <div className="p-4 md:w-1/3 sm:w-1/2">
        <div className="flex rounded-lg h-full bg-gray-100  flex-col">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
            <FaArrowRight />

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-full bg-gray-300 rounded-xl'>
<div className="absolute bg-red-500 h-1 rounded-xl w-[80%]"></div>
            </div>
           <p className="text-right font-bold text-red-500">80%</p>
          </div>
        </div>
      </div>
     
        {/* skills */}
        <div className="p-4 md:w-1/3 sm:w-1/2 ">
        <div className="flex rounded-lg h-full bg-gray-100  flex-col">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
            <FaArrowRight />

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            JAVASCRIPT
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-[100%] bg-gray-300 rounded-xl '>
<div className="absolute bg-red-500 h-1 rounded-xl w-[60%]"></div>
            </div>
           <p className="text-right font-bold text-red-500">60%</p>
          </div>
        </div>
      </div>
        
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills
