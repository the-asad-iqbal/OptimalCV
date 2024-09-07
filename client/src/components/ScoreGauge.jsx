import React, { useMemo } from "react";

const ScoreGauge = ({ score = 0, min = 0, max = 100 }) => {
   const percentage = ((score - min) / (max - min)) * 100;
   const fillPercentage = Math.min(percentage, 100);

   const color = useMemo(() => {
      if (percentage <= 33) return "#EF4444"; // Red for low scores
      if (percentage <= 66) return "#FBBF24"; // Yellow for medium scores
      return "#10B981"; // Green for high scores
   }, [percentage]);

   return (
      <div className="w-80 h-48 rounded-lg shadow-lg p-4 relative inset-x-0">
         <svg className="w-full h-full" viewBox="0 0 100 60">
            <path
               d="M10 50 A40 40 0 1 1 90 50 L90 55 Q50 60 10 55 Z"
               fill="white"
               stroke="#D1D5DB"
               strokeWidth="0.5"
            />

            <path
               d="M10 50 A40 40 0 1 1 90 50"
               fill="none"
               stroke={color}
               strokeWidth="6"
               strokeLinecap="square"
               strokeDasharray="125.6"
               strokeDashoffset="125.6"
               className="transition-all duration-500 ease-out"
               style={{
                  strokeDashoffset: `${125.6 - (fillPercentage * 125.6) / 100}`,
               }}
            />
         </svg>

         {/* Score display */}
         <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ marginTop: "15px" }}
         >
            <span className="text-4xl font-bold text-gray-800">{score}</span>
         </div>

         {/* Min and Max labels */}
         <div className="absolute bottom-2 left-4 text-sm font-medium text-gray-600">{min}</div>
         <div className="absolute bottom-2 right-4 text-sm font-medium text-gray-600">{max}</div>
      </div>
   );
};

export default ScoreGauge;