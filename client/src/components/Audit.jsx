import React from "react";

import { Bar } from "recharts";
import {
   AlertCircle,
   CheckCircle,
   Award,
   BookOpen,
   Briefcase,
   Code,
   Layout,
   User,
} from "lucide-react";

import SectionWithIcon from "./SectionWithIcon";
import ScoreCard from "./ScoreCard";

// const resumeData = {
//    res: {
//       isGoodResumeLayout: {
//          isGoodLayout: true,
//          reason:
//             "The layout is simple, clean, and easy to read. The sections are well-organized and clearly labeled. The font is consistent, and the spacing is good.",
//          score: 4,
//          scoreOutOf: 5,
//       },
//       overallScore: {
//          interpretation: "This resume demonstrates potential but needs improvement to stand out. ",
//          score: 3,
//          scoreOutOf: 5,
//       },
//       personalInfo: {
//          email: "asadraoof023@gaim.com",
//          name: "M. Asad",
//          role: "Web Developer",
//       },
//       sectionScores: {
//          education: {
//             commentary: "No education section included.",
//             score: 0,
//             scoreOutOf: 2,
//          },
//          experience: {
//             commentary: "No work experience listed.",
//             score: 0,
//             scoreOutOf: 2,
//          },
//          formatting: {
//             commentary:
//                "The resume has a visually appealing design but lacks some important elements such as a professional headshot, a dedicated summary section that emphasizes skills, and quantifiable results. ",
//             score: 3,
//             scoreOutOf: 5,
//          },
//          skills: {
//             commentary:
//                "The skills section is well-organized and includes a range of relevant skills, but it would be more helpful to have some quantifiable results to back up the claims. ",
//             score: 3,
//             scoreOutOf: 5,
//          },
//       },
//       strengths: [
//          {
//             details:
//                "The resume is visually appealing and easy to read, with a clear and concise layout.",
//             section: "Formatting",
//          },
//          {
//             details:
//                "The resume includes a range of relevant skills, including HTML, CSS, JavaScript, and React.JS.",
//             section: "Skills",
//          },
//       ],
//       suggestions: [
//          {
//             action: "Add a professional headshot.",
//             benefit:
//                "A professional headshot helps to create a more personal connection with the reader and can help you stand out from the crowd.",
//             suggestedPartName: "Contact Information",
//          },
//          {
//             action: "Add a Summary section.",
//             benefit:
//                "This section should highlight your key skills, experience, and career goals. It is a great opportunity to grab the attention of potential employers.",
//             suggestedPartName: "Summary",
//          },
//          {
//             action:
//                "Expand the 'Projects' section. Include a brief description of each project with quantifiable results and/or achievements.",
//             benefit:
//                "This demonstrates your ability to apply your skills to real-world projects and highlights your accomplishments.",
//             suggestedPartName: "Projects",
//          },
//          {
//             action:
//                'Include a quantifiable result or achievement for each skill listed. For example, instead of saying "Proficient in HTML", you could say "Developed a website using HTML that increased user engagement by 15%".',
//             benefit:
//                "This helps to demonstrate your abilities and make your resume more impactful.",
//             suggestedPartName: "Skills",
//          },
//          {
//             action: 'Add a dedicated "Experience" section.',
//             benefit:
//                "Even without formal work experience, you can highlight relevant projects, internships, or freelance work.",
//             suggestedPartName: "Experience",
//          },
//          {
//             action: "Include your educational background.",
//             benefit:
//                "Even for web development roles, it's good practice to include your education section.",
//             suggestedPartName: "Education",
//          },
//          {
//             action:
//                'Consider including a "Portfolio" section. Provide links to your live projects.',
//             benefit: "This will give employers a tangible view of your work and skills.",
//             suggestedPartName: "Portfolio",
//          },
//       ],
//       summary: {
//          keyTakeaways:
//             "The resume is visually appealing but lacks some essential information such as experience, education, and a professional headshot. It also doesn't include quantifiable results, which could make it harder to stand out from other candidates.",
//          nextSteps:
//             "Focus on adding a professional headshot, work experience, and education sections. Expand the project section to include quantifiable results. Quantify the skills listed in the resume with results and achievements.",
//          overallImpression:
//             "This resume is well-designed but lacks crucial content that can help make it more effective for job applications.",
//       },
//       weaknesses: [
//          {
//             details: "No experience section is included.",
//             impact:
//                "This makes it difficult for potential employers to gauge your experience level and abilities.",
//             section: "Experience",
//          },
//          {
//             details: "No education section is included.",
//             impact:
//                "This is a common section in resumes that should be included, even for web development roles.",
//             section: "Education",
//          },
//          {
//             details: "The resume does not include any quantifiable results or achievements.",
//             impact:
//                "This makes it difficult to understand the impact of your skills and accomplishments.",
//             section: "Skills",
//          },
//          {
//             details: 'The "Projects" section is lacking detail.',
//             impact:
//                "It would be helpful to include brief descriptions of each project, including the technologies used, the project goals, and the results achieved.",
//             section: "Projects",
//          },
//       ],
//    },
// };

const Audit = ({ resData }) => {
   const { res } = resData;

   return (
      <div className="bg-gray-100 min-h-screen p-8 text-black">
         <div className="max-w-6xl mx-auto">
            <header className="bg-white p-6 rounded-lg shadow-md mb-8">
               <h1 className="text-3xl font-bold mb-2">{res.personalInfo.name}</h1>
               <p className="text-xl text-gray-600 mb-1">{res.personalInfo.role}</p>
               <p className="text-sm text-gray-500">{res.personalInfo.email}</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               <SectionWithIcon icon={Award} title="Overall Score">
                  <ScoreCard
                     title="Resume Score"
                     score={res.overallScore.score}
                     outOf={res.overallScore.scoreOutOf}
                     commentary={res.overallScore.interpretation}
                  />
               </SectionWithIcon>

               <SectionWithIcon icon={Layout} title="Resume Layout">
                  <ScoreCard
                     title="Layout Score"
                     score={res.isGoodResumeLayout.score}
                     outOf={res.isGoodResumeLayout.scoreOutOf}
                     commentary={res.isGoodResumeLayout.reason}
                  />
               </SectionWithIcon>
            </div>

            <SectionWithIcon icon={CheckCircle} title="Strengths">
               <ul className="list-disc pl-5">
                  {res.strengths.map((strength, index) => (
                     <li key={index} className="mb-2">
                        <span className="font-semibold">{strength.section}:</span>{" "}
                        {strength.details}
                     </li>
                  ))}
               </ul>
            </SectionWithIcon>

            <SectionWithIcon icon={AlertCircle} title="Weaknesses">
               <ul className="list-disc pl-5">
                  {res.weaknesses.map((weakness, index) => (
                     <li key={index} className="mb-2">
                        <span className="font-semibold">{weakness.section}:</span>{" "}
                        {weakness.details}
                        <br />
                        <span className="text-sm text-gray-600">Impact: {weakness.impact}</span>
                     </li>
                  ))}
               </ul>
            </SectionWithIcon>

            <SectionWithIcon icon={BookOpen} title="Suggestions">
               {res.suggestions.map((suggestion, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                     <h3 className="font-semibold mb-1">{suggestion.suggestedPartName}</h3>
                     <p className="mb-1">
                        <span className="font-medium">Action:</span> {suggestion.action}
                     </p>
                     <p className="text-sm text-gray-600">
                        <span className="font-medium">Benefit:</span> {suggestion.benefit}
                     </p>
                  </div>
               ))}
            </SectionWithIcon>

            <SectionWithIcon icon={User} title="Summary">
               <div className="space-y-4">
                  <div>
                     <h3 className="font-semibold mb-1">Key Takeaways</h3>
                     <p>{res.summary.keyTakeaways}</p>
                  </div>
                  <div>
                     <h3 className="font-semibold mb-1">Next Steps</h3>
                     <p>{res.summary.nextSteps}</p>
                  </div>
                  <div>
                     <h3 className="font-semibold mb-1">Overall Impression</h3>
                     <p>{res.summary.overallImpression}</p>
                  </div>
               </div>
            </SectionWithIcon>
         </div>
      </div>
   );
};

export default Audit;
