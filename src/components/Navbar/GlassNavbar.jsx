import { useState } from "react";
import { NavLink } from "react-router-dom";

const GlassNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:px-8 lg:px-12
     bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-b-xl max-w-full mx-auto transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className=" text-2xl font-bold tracking-wide">
          <a href="#" className="hover:text-gray-200 transition-colors duration-200">
            GlassyNav
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home" text="Home" />
          <NavLink href="#features" text="Features" />
          <NavLink href="#services" text="Services" />
          <NavLink href="#about" text="About" />
          <NavLink href="#contact" text="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-2">
          <div className="flex flex-col space-y-3">
            <NavLink href="#home" text="Home" onClick={() => setIsOpen(false)} />
            <NavLink href="#features" text="Features" onClick={() => setIsOpen(false)} />
            <NavLink href="#services" text="Services" onClick={() => setIsOpen(false)} />
            <NavLink href="#about" text="About" onClick={() => setIsOpen(false)} />
            <NavLink href="#contact" text="Contact" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};
export default GlassNavbar;
