import React from "react";
import { Bar } from "recharts";
import { AlertCircle, CheckCircle, Award, BookOpen, Layout, User } from "lucide-react";

import SectionWithIcon from "./SectionWithIcon";
import ScoreCard from "./ScoreCard";

const Audit = ({ resData }) => {
   const { res } = resData;

   return (
      <div className="p-8 bg-gradient-to-br from-black to-purple/5 w-full text-darkGray">
         <div className="max-w-6xl mx-auto">
            <header className="bg-white p-6 rounded-lg shadow-md mb-8">
               <h1 className="text-3xl font-bold mb-2 text-purple">{res.personalInfo.name}</h1>
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
