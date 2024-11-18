import Image from "next/image"
import logo from"../../public/Assets/logo.jpg"
import Link from "next/link"
import { IoMdDownload } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-red-200 z-50 sticky top-0">


<header className="text-red-600 body-font">
  <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-red-900 mb-4 md:mb-0">
     <Image src={logo} alt="logo" className=" h-[80px] w-[80px]" />
      <span className="ml-3 text-3xl">Wajiha Naz</span>
    </a>
    <nav className=" md:ml-auto md:p-2  sm:p-1 flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-red-900">Home</Link>
      <Link href={"#about"}className="mr-5 hover:text-red-900"> About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-red-900"> Skills</Link>
      <Link href={"#projects"}className="mr-5 hover:text-red-900"> Projects</Link>
      <Link href={"#contact"}className="mr-5 hover:text-red-900"> Contact</Link>
    </nav>
    <a href="/Assets/Cv Wajiha.pdf" target="_blank">
    <button className="inline-flex items-center bg-red-600 border-0 py-1 px-2 focus:outline-none hover:bg-red-500 rounded text-white mt-4 md:mt-0">Download CV
    <IoMdDownload className="text-lg ml-2" />
    </button></a>
  </div>
</header>


    </div>
  )
}

export default Navbar









