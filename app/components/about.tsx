
import about from"../../public/Assets/Aboutlogo.png"
import Image from 'next/image'

const About = () => {
  return (
    <div id='about'>
      
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-10">
      <Image src={about} alt="logo" className="h-[300px] w-[300px] " />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-900 ]">
        About Me
       
      </h1>
      <h2 className='title-font sm:text-2xl text-lg mb-4 font-small text-gray-900"'>My Qualification</h2>
      <p className="mb-8 leading-relaxed">
        Matric in Computer Science from Monte Carlo Grammar School
        <br />
        Intermediate in Computer Science from Govt.Girls College block 14 Gulistan e Jauhar
        <br />
        ADP in Education from Virtual University   
        <br />
        Now I am Learning Next.Js , Python , Web 3.0 and Artificial Intelligence at GOvernor House Initiative.

      </p>
      <div className="flex justify-center">
      <a href="/Assets/Cv Wajiha.pdf" target='_blank'>
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
                          View CV        </button></a>
                          <a href="https://vercel.com/wajihafarazs-projects" target='_blank'>
        <button className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
          Visit vercel account
        </button></a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
