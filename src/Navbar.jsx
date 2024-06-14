import React, {useState} from "react"
import LogoIcon from "../src/IMG/green modern company animated logo.mp4"


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <video
          src={LogoIcon }
          autoPlay
          loop
          muted
          className="h-16
           w-auto"
          alt="Christopher Tshoma Logo"
        />
        </div>
        <div className="block lg:hidden">
          <button
            role="button"
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? '' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">
            <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">Home</a>
            <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">Projects</a>
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">About</a>
            <a href="#connect" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">Social-Media</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;