import React, { useState, useEffect } from "react";
import {
   ChevronDown,
   User,
   Mail,
   BriefcaseBusiness,
   MapPin,
   Smartphone,
   UserCog,
} from "lucide-react";

const PersonalInfo = ({ personalInfo, isPersonalInfo }) => {
   const [isOpen, setIsOpen] = useState(true);

   return (
      <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6 transition-all duration-300">
         <div className="flex flex-col">
            <div className="flex items-center justify-between content-center w-full">
               <h2 className="text-2xl font-semibold text-blue-600 w-full flex items-center gap-2">
                  <User /> Personal Information
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
                     {isPersonalInfo && personalInfo ? (
                        <img src="/test_user.png" className="w-16 h-16" />
                     ) : (
                        <img src="/404_test_user.png" className="w-16 h-16" />
                     )}
                     <h3 className="text-2xl font-semibold">
                        {isPersonalInfo && personalInfo ? "Good job!" : "Oops!"}
                     </h3>
                     <h3 className="text-lg font-normal">
                        {isPersonalInfo && personalInfo
                           ? "We found the following personal information in your resume."
                           : "We couldn't find any personal information in your resume."}
                     </h3>
                  </div>

                  {personalInfo && (
                     <div className="flex items-start w-full gap-4 flex-wrap justify-between">
                        <div
                           className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 rounded-lg shadow-md shadow-green-700/25 w-full"
                           title="Name"
                        >
                           <div className="w-full flex justify-center p-1">
                              <p className="w-full flex items-center">
                                 <User className="w-4 h-4 mr-2 text-green-600" />
                                 {personalInfo.name.value}
                              </p>
                           </div>
                        </div>
                        <div className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 rounded-lg shadow-md shadow-green-700/25 w-full">
                           <div className="w-full flex justify-center p-1" title="Email">
                              <p className="w-full flex items-center">
                                 <Mail className="w-4 h-4 mr-2 text-green-600" />
                                 {personalInfo.email.value}
                              </p>
                           </div>
                        </div>
                        <div className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 rounded-lg shadow-md shadow-green-700/25 w-full">
                           <div className="w-full flex justify-center p-1" title="Experience">
                              <p className="w-full flex items-center">
                                 <BriefcaseBusiness className="w-4 h-4 mr-2 text-green-600" />
                                 {personalInfo.experience.value}
                              </p>
                           </div>
                        </div>
                        <div className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 rounded-lg shadow-md shadow-green-700/25 w-full">
                           <div className="w-full flex justify-center p-1" title="Location">
                              <p className="w-full flex items-center">
                                 <MapPin className="w-4 h-4 mr-2 text-green-600" />
                                 {personalInfo.location?.value || "N/A"}
                              </p>
                           </div>
                        </div>
                        <div className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 rounded-lg shadow-md shadow-green-700/25 w-full">
                           <div className="w-full flex justify-center p-1" title="Phone">
                              <p className="w-full flex items-center">
                                 <Smartphone className="w-4 h-4 mr-2 text-green-600" />
                                 {personalInfo.phone?.value || "N/A"}
                              </p>
                           </div>
                        </div>
                        <div className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 rounded-lg shadow-md  w-full">
                           <div className="w-full flex justify-center p-1" title="Role">
                              <p className="w-full flex items-center">
                                 <UserCog className="w-4 h-4 mr-2 text-green-600" />
                                 {personalInfo.role?.value || "N/A"}
                              </p>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default PersonalInfo;
