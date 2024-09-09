import React, { useState } from "react";
import { BookMarked, Check, ChevronDown, Link, Settings, User } from "lucide-react";

const Skills = ({ Skills, isSkills }) => {
   const [isOpen, setIsOpen] = useState(true);
   return (
      <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6 transition-all duration-300">
         <div className="flex flex-col">
            <div className="flex items-center justify-between content-center w-full">
               <h2 className="text-2xl font-semibold text-blue-600 w-full flex items-center gap-2">
                  <Link /> Skills
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
                     {isSkills && Skills ? (
                        <img src="/skills.png" className="w-16 h-16" />
                     ) : (
                        <img src="/404_skills.png" className="w-16 h-16" />
                     )}
                     <h3
                        className="text-2xl font-semibold"
                        style={{ color: `${isSkills && Skills ? "green" : "red"}` }}
                     >
                        {isSkills && Skills ? "Good job!" : "Oops!"}
                     </h3>
                     <h3 className="text-lg font-normal">
                        {isSkills && Skills
                           ? "We found the following skills in your resume."
                           : "We couldn't find any of the other skills in your resume."}
                     </h3>
                  </div>

                  {Skills && isSkills && (
                     <>
                        <h3 className="text-2xl font-semibold text-blue-800">Hard Skills</h3>
                        <div className="flex items-start w-full gap-4 flex-wrap justify-between">
                           {Skills.hardSkills &&
                              Skills.hardSkills.map((skill) => (
                                 <>
                                    <div
                                       className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 shadow-md shadow-blue-700/25 w-full hover:-translate-y-0.5 transition-all duration-300"
                                       title={skill.skill}
                                    >
                                       <div className="w-full flex justify-center p-1 gap-2">
                                          <Check className="w-4 h-6 text-green-700" />
                                          <p className="w-full flex items-center">{skill.skill}</p>
                                       </div>
                                    </div>
                                 </>
                              ))}
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-800">
                           {Skills.softSkills.length > 0 && "Soft Skills"}
                        </h3>
                        <div className="flex items-start w-full gap-4 flex-wrap justify-between">
                           {Skills.softSkills &&
                              Skills.softSkills.map((skill) => (
                                 <>
                                    <div
                                       className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 shadow-md shadow-blue-700/25 w-full hover:-translate-y-0.5 transition-all duration-300"
                                       title={skill.skill}
                                    >
                                       <div className="w-full flex justify-center p-1 gap-2">
                                          <Check className="w-4 h-6 text-green-700" />
                                          <p className="w-full flex items-center">{skill.skill}</p>
                                       </div>
                                    </div>
                                 </>
                              ))}
                        </div>

                        {Skills.missingCriticalSkills.length > 0 && (
                           <>
                              <h3 className="text-2xl font-semibold text-blue-800">
                                 Mising Critical Skills
                              </h3>

                              <div className="flex items-start w-full gap-4 flex-wrap justify-between">
                                 {Skills.softSkills &&
                                    Skills.softSkills.map((skill) => (
                                       <>
                                          <div
                                             className="bg-white flex items-center px-2 py-1 border border-gray-300/80 max-w-64 shadow-md shadow-blue-700/25 w-full hover:-translate-y-0.5 transition-all duration-300"
                                             title={skill.skill}
                                          >
                                             <div className="w-full flex justify-center p-1 gap-2">
                                                <Check className="w-4 h-6 text-green-700" />
                                                <p className="w-full flex items-center">
                                                   {skill.skill}
                                                </p>
                                             </div>
                                          </div>
                                       </>
                                    ))}
                              </div>
                           </>
                        )}
                     </>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
