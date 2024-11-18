import Image from "next/image"
import logo from"../../public/Assets/logo.jpg"
const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image  src={logo} alt="logo" className="h-5 w-5"/>

      <span className="ml-3 text-xl">Wajiha Naz</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Wajiha Naz 
      
    </p>
    
  </div>
</footer>

      
    </div>
  )
}

export default Footer
