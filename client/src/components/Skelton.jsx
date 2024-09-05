import React from "react";

const Skelton = () => {
   return (
      <div className="p-8 bg-gradient-to-br from-black to-purple/5 w-full text-darkGray">
         <div className="max-w-6xl mx-auto">
            {/* Header */}
            <header className="bg-white p-6 rounded-lg shadow-md mb-8 animate-pulse">
               <div className="h-8 bg-gray-300 rounded mb-2 w-1/3"></div>
               <div className="h-6 bg-gray-300 rounded mb-1 w-1/4"></div>
               <div className="h-4 bg-gray-300 rounded w-1/5"></div>
            </header>

            {/* Overall Score and Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                  <div className="h-6 bg-gray-300 rounded mb-4 w-1/2"></div>
                  <div className="h-8 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
               </div>

               <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                  <div className="h-6 bg-gray-300 rounded mb-4 w-1/2"></div>
                  <div className="h-8 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
               </div>
            </div>

            {/* Strengths */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-pulse mb-8">
               <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
               <ul className="space-y-2">
                  <li className="h-4 bg-gray-300 rounded w-3/4"></li>
                  <li className="h-4 bg-gray-300 rounded w-2/3"></li>
                  <li className="h-4 bg-gray-300 rounded w-5/6"></li>
               </ul>
            </div>

            {/* Weaknesses */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-pulse mb-8">
               <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
               <ul className="space-y-2">
                  <li className="h-4 bg-gray-300 rounded w-3/4"></li>
                  <li className="h-4 bg-gray-300 rounded w-2/3"></li>
                  <li className="h-4 bg-gray-300 rounded w-5/6"></li>
               </ul>
            </div>

            {/* Suggestions */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-pulse mb-8">
               <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
               <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
               </div>
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
               <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
               <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skelton;
