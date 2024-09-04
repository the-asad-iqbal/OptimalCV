import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 20) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <nav
         className={`
         backdrop-blur-3xl
         ${isScrolled ? "bg-black/65" : "bg-black"}
         shadow-lg text-white flex justify-between
         rounded-full items-center px-10 py-5 min-w-2xl w-full
         sm:flex-row md:flex-row lg:flex-row xl:flex-row flex-col
         ${isScrolled ? "max-w-screen-lg" : "max-w-screen-2xl"}
         fixed z-50 transition-all duration-300 top-5
         ${isScrolled ? "py-3" : "py-5"}
         left-1/2 -translate-x-1/2
      `}
      >
         <h2
            className={`
            text-3xl font-bold text-purple
            ${isScrolled ? "scale-90" : "scale-100"}
            transition-transform duration-300
         `}
         >
            OptimalCV
         </h2>
         <div className="flex gap-10 font-light mt-5 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
            <Link to="/" className="hover:text-purple-400 transition-colors duration-300">
               Home
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition-colors duration-300">
               About
            </Link>
            <Link to="/contact" className="hover:text-purple-400 transition-colors duration-300">
               Contact
            </Link>
         </div>
      </nav>
   );
};

export default NavBar;
