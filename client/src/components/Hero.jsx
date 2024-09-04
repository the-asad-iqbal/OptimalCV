import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
   return (
      <div className="bg-gradient-to-br from-black to-purple/5 h-screen flex items-center justify-center font-poppins text-lightGray w-full">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
               Create Your <span className="text-purple">Optimal CV</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-gray">
               Craft a professional resume that stands out and lands you your dream job.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
               <button className="bg-purple hover:bg-purple/90 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
               </button>
               <button className="border border-darkGray hover:border-purple text-lightGray font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out">
                  Learn More
               </button>
            </div>
            <div className="mt-16">
               <p className="text-darkGray mb-4">Trusted by professionals from:</p>
               <div className="flex justify-center items-center space-x-8">
                  {/* Replace with actual company logos */}
                  <div className="w-20 h-20 bg-darkCharcoal rounded-full"></div>
                  <div className="w-20 h-20 bg-darkCharcoal rounded-full"></div>
                  <div className="w-20 h-20 bg-darkCharcoal rounded-full"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
