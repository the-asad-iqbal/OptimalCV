import React, { useState, useEffect } from "react";
import { ChevronDown, Check, Minus } from "lucide-react";

const Data = ({}) => {
   const data = {
      res: {
         Links: {
            github: {
               isAvailable: true,
               link: "https://github.com/AsadIqbalAI",
            },
            linkedIn: {
               isAvailable: true,
               link: "https://www.linkedin.com/in/m-asad-rizvi/",
            },
            portofolio: {
               isAvailable: true,
               link: "https://azure-modesty-44.tiiny.site/",
            },
         },
         content: {
            atsParseScore: 1.17,
            industryKeywords: [
               {
                  isPresent: true,
                  keyword: "web developer",
                  relevanceScore: 0.93,
               },
               {
                  isPresent: true,
                  keyword: "javascript",
                  relevanceScore: 0.91,
               },
               {
                  isPresent: true,
                  keyword: "frontend",
                  relevanceScore: 0.89,
               },
               {
                  isPresent: true,
                  keyword: "react",
                  relevanceScore: 0.88,
               },
               {
                  isPresent: true,
                  keyword: "html",
                  relevanceScore: 0.87,
               },
               {
                  isPresent: true,
                  keyword: "css",
                  relevanceScore: 0.86,
               },
               {
                  isPresent: true,
                  keyword: "user interface",
                  relevanceScore: 0.85,
               },
               {
                  isPresent: true,
                  keyword: "user experience",
                  relevanceScore: 0.84,
               },
               {
                  isPresent: true,
                  keyword: "front end",
                  relevanceScore: 0.83,
               },
               {
                  isPresent: true,
                  keyword: "developer",
                  relevanceScore: 0.82,
               },
            ],
            quantifiableAchievements: [],
            sentenceLength: {
               averageLength: 15.86,
               longSentences: 0,
               shortSentences: 0,
               suggestedImprovements: [],
            },
            spellAndGrammarErrors: [],
         },
         isResume: true,
         personalInfo: {
            email: {
               isAvailable: true,
               value: "asadraoof023@gaim.com",
            },
            experience: {
               isAvailable: true,
               value: "1 year",
            },
            location: {
               isAvailable: true,
               value: "Arifwala, Punjab, Pakistan",
            },
            name: {
               isAvailable: true,
               value: "M. Asad",
            },
            phone: {
               isAvailable: true,
               value: "92 3036680590",
            },
            role: {
               isAvailable: true,
               value: "Frontend Web Developer",
            },
         },
         skills: {
            hardSkills: [
               {
                  relevanceScore: 0.95,
                  skill: "HTML",
               },
               {
                  relevanceScore: 0.94,
                  skill: "CSS",
               },
               {
                  relevanceScore: 0.93,
                  skill: "Tailwind CSS",
               },
               {
                  relevanceScore: 0.92,
                  skill: "JavaScript",
               },
               {
                  relevanceScore: 0.91,
                  skill: "React JS",
               },
            ],
            missingCriticalSkills: [],
            skillMatchScore: 0.93,
            softSkills: [],
         },
         atsCompliance: {
            complianceScore: 0.75,
            isATSCompliant: false,
            reason:
               "The resume is not ATS compliant because it uses a non-standard format and design, and lacks structured data.  It also includes a photo and personal information that could be problematic for some ATS systems.",
            suggestedImprovements: [
               "Use a standard resume format such as reverse chronological, functional, or combination. Use a professional font and avoid using images or graphics.  Remove personal information like your photo and address. Make sure your resume can be easily parsed by an ATS by using consistent formatting and using keywords from the job description.",
            ],
         },
         overallScore: {
            interpretation:
               "The resume is good and shows a clear and concise presentation of your skills and experience. However, there are some areas that could be improved to make it even better.",
            score: 3.5,
         },
         readabilityScore: {
            interpretation:
               "The resume is easy to read, has a good balance of white space, and is well-organized.",
            score: 4.2,
         },
         resumeSections: {
            contactInformation: {
               completeness: 1,
               isPresent: true,
            },
            essentialSections: [
               {
                  isPresent: true,
                  quality:
                     "Great section, provides a good overview of your experience and skills. You could also consider adding specific accomplishments to highlight your contributions. ",
                  section: "Summary",
               },
               {
                  isPresent: true,
                  quality:
                     "Great section that highlights your projects with clear descriptions and live links.",
                  section: "Projects",
               },
               {
                  isPresent: true,
                  quality: "Good, but you could add more specific skills to this section.",
                  section: "Skills",
               },
               {
                  isPresent: true,
                  quality:
                     "Good section, but you could consider adding a personal statement that provides a brief summary of your career goals and what you're looking for.",
                  section: "Social Handles",
               },
            ],
            missingImportantSections: ["Work Experience"],
            sectionLength: [
               {
                  isAppropriate: true,
                  section: "Summary",
                  wordCount: 24,
               },
               {
                  isAppropriate: true,
                  section: "Projects",
                  wordCount: 78,
               },
               {
                  isAppropriate: true,
                  section: "Skills",
                  wordCount: 14,
               },
               {
                  isAppropriate: true,
                  section: "Social Handles",
                  wordCount: 4,
               },
            ],
            sectionOrder: [
               {
                  isCorrectOrder: true,
                  section: "Summary",
                  suggestedPosition: 1,
               },
               {
                  isCorrectOrder: true,
                  section: "Projects",
                  suggestedPosition: 2,
               },
               {
                  isCorrectOrder: true,
                  section: "Skills",
                  suggestedPosition: 3,
               },
               {
                  isCorrectOrder: true,
                  section: "Social Handles",
                  suggestedPosition: 4,
               },
            ],
         },
         style: {
            actionVerbAnalysis: {
               hasActionVerbs: true,
               uniqueActionVerbs: [
                  "creating",
                  "using",
                  "discover",
                  "manage",
                  "change",
                  "update",
                  "do",
                  "pick",
               ],
               verbFrequency: 2,
            },
            activeVoiceUsage: {
               isActiveVoice: true,
               percentageActive: 80,
            },
            bulletPointUsage: {
               averageLength: 16,
               count: 4,
               hasBulletPoints: true,
               suggestedImprovements:
                  "The bullet points are generally good length and provide concise descriptions of your accomplishments. Consider adding a call to action or quantifiable results to each bullet point to further showcase the impact of your work. ",
            },
            buzzwordsAndCliches: {
               buzzwords: ["user-friendly", "handy", "with ease"],
               hasBuzzword: true,
               suggestions: [
                  "Avoid overusing buzzwords and clichés.  Instead, try to use specific examples and quantifiable results to demonstrate your skills and experience.",
               ],
            },
            emailAddress: {
               isGoodEmailDesign: true,
               suggestion:
                  "The email address is good, but you could consider using a professional email address that includes your name. This will make it easier for potential employers to remember you and contact you.",
            },
            fontAndFormatting: {
               isConsistentFormatting: true,
               readabilityScore: 4,
            },
            resumeDesign: {
               isGoodDesign: true,
               reason:
                  "The resume is visually appealing and easy to read. The use of white space and bolding helps to draw the reader's attention to key information.",
               suggestedImprovements: [
                  "You could consider using a more modern and professional design that is more appropriate for the modern job market. Consider using a professional template and avoid using images or graphics.",
               ],
            },
            resumeLength: {
               isTooLong: false,
               pages: 1,
               suggestedLength:
                  "The resume length is appropriate. For most job applications, one page is the ideal length.",
            },
            whitespaceBalance: {
               isWellBalanced: true,
               suggestion:
                  "The resume is well balanced, with plenty of white space making it easy to read.",
            },
         },
      },
   };
   const { res } = data;

   const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(true);

   return (
      <div className="max-w-4xl mx-auto p-6 bg-[#E3E9F5] w-full min-h-screen h-full rounded-3xl shadow-lg">
         <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6 transition-all duration-300">
            <div className="flex items-center justify-between content-center w-full">
               <h2 className="text-2xl font-semibold mb-4 text-blue-600 w-full">
                  Personal Information
               </h2>
               <button
                  onClick={() => setIsPersonalInfoOpen(!isPersonalInfoOpen)}
                  className="focus:outline-none transition-transform duration-300 ease-in-out"
                  style={{
                     transform: isPersonalInfoOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
               >
                  <ChevronDown />
               </button>
            </div>
            <div
               className="flex overflow-hidden transition-all duration-300 ease-in-out"
               style={{
                  maxHeight: isPersonalInfoOpen ? "1000px" : "0",
                  opacity: isPersonalInfoOpen ? 1 : 0,
               }}
            >
               <div className="flex flex-col gap-20 w-full bg-[#E3E9F5] p-10 rounded-lg shadow-xl ">
                  <div className="text-center">
                     <img src="" />

                     <h3 className="text-2xl font-semibold">Good job!</h3>
                     <h3 className="text-lg font-normal">
                        We found the following personal information in your resume.
                     </h3>
                  </div>
                  
                  <div>
                     {/* <div className="bg-green-400/10 flex items-center px-2 py-1 border border-gray-300 max-w-64">
                        <Check className="w-5 h-5 mr-2 text-green-600" />
                        <p className="flex items-center gap-2 font-normal">
                           <span className="">Name </span>
                           {res.personalInfo.name.value || "N/A"}
                        </p>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Data;
