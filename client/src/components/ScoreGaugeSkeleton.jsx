import React from "react";

const ScoreGaugeSkeleton = () => {
   return (
      <div className="w-80 h-48 p-4 relative inset-x-0 animate-pulse">
         {/* Gauge Skeleton */}
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
               stroke="#D1D5DB"
               strokeWidth="6"
               strokeLinecap="square"
               strokeDasharray="125"
               strokeDashoffset="125"
            />
         </svg>

         {/* Centered Placeholder for Score */}
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-8 bg-gray-300 rounded"></div>
         </div>

         {/* Min and Max labels */}
         <div className="absolute bottom-2 left-4 w-6 h-4 bg-gray-300 rounded"></div>
         <div className="absolute bottom-2 right-4 w-6 h-4 bg-gray-300 rounded"></div>
      </div>
   );
};

export default ScoreGaugeSkeleton;
