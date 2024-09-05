import React from "react";

const ScoreCard = ({ title, score, outOf, commentary }) => (
   <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-center mb-2">
         <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
            <div
               className="bg-blue-600 h-2.5 rounded-full"
               style={{ width: `${(score / outOf) * 100}%` }}
            ></div>
         </div>
         <span className="text-sm font-medium">
            {score}/{outOf}
         </span>
      </div>
      <p className="text-sm text-gray-600">{commentary}</p>
   </div>
);

export default ScoreCard;
