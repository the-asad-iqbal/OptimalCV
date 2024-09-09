import React, { useState } from "react";
import { LucideLinkedin, ChevronDown, LucideGitBranchPlus, Link, Rss } from "lucide-react";

const Links = ({ Links, isLinks }) => {
   const [isOpen, setIsOpen] = useState(true);
   return (
      <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6 transition-all duration-300">
         <div className="flex flex-col">
            <div className="flex items-center justify-between content-center w-full">
               <h2 className="text-2xl font-semibold text-blue-600 w-full flex items-center gap-2">
                  <Link /> Links
               </h2>
               <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="focus:outline-none transition-transform duration-300 ease-in-out"
                  style={{
                     transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
               >
                  <ChevronDown />
               </button>
            </div>
            <div
               className="flex overflow-hidden transition-all duration-300 ease-in-out mt-3"
               style={{
                  maxHeight: isOpen ? "1000px" : "0",
                  opacity: isOpen ? 1 : 0,
               }}
            >
               <div className="flex flex-col gap-6 w-full bg-[#E3E9F5] p-10 rounded-lg shadow-2xl shadow-gray-400 ">
                  <div className="flex flex-col items-center justify-center gap-2">
                     {isLinks && Links ? (
                        <img src="/links.png" className="w-16 h-16" />
                     ) : (
                        <img src="/404_links.png" className="w-16 h-16" />
                     )}
                     <h3 className="text-2xl font-semibold">
                        {isLinks && Links ? "Good job!" : "Oops!"}
                     </h3>
                     <h3 className="text-lg font-normal">
                        {isLinks && Links
                           ? "We found the following links in your resume."
                           : "We couldn't find any of the links in your resume."}
                     </h3>
                  </div>

                  {Links && (
                     <div className="flex items-start w-full gap-4 flex-wrap justify-between">
                        {Links.github.isAvailable && (
                           <div
                              className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 rounded-lg shadow-md shadow-green-700/25 w-full"
                              title="Name"
                           >
                              <div className="w-full flex justify-center p-1">
                                 <p className="w-full flex items-center">
                                    <LucideGitBranchPlus className="w-4 h-4 mr-2 text-green-600" />
                                    <a href={Links.github?.link} className="text-sm text-blue-600">
                                       {"Github"}
                                    </a>
                                 </p>
                              </div>
                           </div>
                        )}
                        {Links.linkedIn.isAvailable && (
                           <div
                              className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 rounded-lg shadow-md shadow-green-700/25 w-full"
                              title="Name"
                           >
                              <div className="w-full flex justify-center p-1">
                                 <p className="w-full flex items-center">
                                    <LucideLinkedin className="w-4 h-4 mr-2 text-green-600" />
                                    <a
                                       href={Links.linkedIn?.link}
                                       className="text-sm text-blue-600"
                                    >
                                       {"linkedIn"}
                                    </a>
                                 </p>
                              </div>
                           </div>
                        )}
                        {Links.portofolio.isAvailable && (
                           <div
                              className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 rounded-lg shadow-md shadow-green-700/25 w-full"
                              title="Portfolio"
                           >
                              <div className="w-full flex justify-center p-1">
                                 <p className="w-full flex items-center">
                                    <Rss className="w-4 h-4 mr-2 text-green-600" />
                                    <a
                                       href={Links.portofolio?.link}
                                       className="text-sm text-blue-600"
                                    >
                                       {"Portofolio"}
                                    </a>
                                 </p>
                              </div>
                           </div>
                        )}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Links;
