import React from "react";
import { AlertCircle, CheckCircle, Github, Linkedin, Globe } from "lucide-react";

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

   return (
      <div className="max-w-4xl mx-auto p-6 bg-[#202125] w-full min-h-screen h-full">
         <h1 className="text-3xl font-bold mb-6">Resume Analysis Dashboard</h1>

         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <p>
                     <strong>Name:</strong> {res.personalInfo.name.value}
                  </p>
                  <p>
                     <strong>Role:</strong> {res.personalInfo.role.value}
                  </p>
                  <p>
                     <strong>Experience:</strong> {res.personalInfo.experience.value}
                  </p>
               </div>
               <div>
                  <p>
                     <strong>Email:</strong> {res.personalInfo.email.value}
                  </p>
                  <p>
                     <strong>Phone:</strong> {res.personalInfo.phone.value}
                  </p>
                  <p>
                     <strong>Location:</strong> {res.personalInfo.location.value}
                  </p>
               </div>
            </div>
         </div>

         {/* Overall Score */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overall Score</h2>
            <div className="flex items-center">
               <div className="w-24 h-24 rounded-full border-8 border-blue-500 flex items-center justify-center text-3xl font-bold">
                  {res.overallScore.score.toFixed(1)}
               </div>
               <p className="ml-6 text-lg">{res.overallScore.interpretation}</p>
            </div>
         </div>

         {/* ATS Compliance */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">ATS Compliance</h2>
            <div className="flex items-center mb-4">
               {res.atsCompliance.isATSCompliant ? (
                  <CheckCircle className="text-green-500 mr-2" />
               ) : (
                  <AlertCircle className="text-red-500 mr-2" />
               )}
               <span className="text-lg">
                  {res.atsCompliance.isATSCompliant ? "ATS Compliant" : "Not ATS Compliant"}
               </span>
            </div>
            <p>
               <strong>Compliance Score:</strong> {res.atsCompliance.complianceScore.toFixed(2)}
            </p>
            <p>
               <strong>Reason:</strong> {res.atsCompliance.reason}
            </p>
            <h3 className="font-semibold mt-4">Suggested Improvements:</h3>
            <ul className="list-disc pl-6">
               {res.atsCompliance.suggestedImprovements.map((improvement, index) => (
                  <li key={index}>{improvement}</li>
               ))}
            </ul>
         </div>

         {/* Skills */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <h3 className="font-semibold mb-2">Hard Skills</h3>
                  {res.skills.hardSkills.map((skill, index) => (
                     <div key={index} className="flex justify-between mb-2">
                        <span>{skill.skill}</span>
                        <span className="text-blue-500">{skill.relevanceScore.toFixed(2)}</span>
                     </div>
                  ))}
               </div>
               <div>
                  <h3 className="font-semibold mb-2">Skill Match Score</h3>
                  <div className="text-3xl font-bold text-blue-500">
                     {res.skills.skillMatchScore.toFixed(2)}
                  </div>
               </div>
            </div>
         </div>

         {/* Links */}
         <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Social Links</h2>
            <div className="flex space-x-4">
               {res.Links.github.isAvailable && (
                  <a
                     href={res.Links.github.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center text-gray-700 hover:text-blue-500"
                  >
                     <Github className="mr-2" />
                     GitHub
                  </a>
               )}
               {res.Links.linkedIn.isAvailable && (
                  <a
                     href={res.Links.linkedIn.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center text-gray-700 hover:text-blue-500"
                  >
                     <Linkedin className="mr-2" />
                     LinkedIn
                  </a>
               )}
               {res.Links.portofolio.isAvailable && (
                  <a
                     href={res.Links.portofolio.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center text-gray-700 hover:text-blue-500"
                  >
                     <Globe className="mr-2" />
                     Portfolio
                  </a>
               )}
            </div>
         </div>
      </div>
   );
};

export default Data;
