import React from "react";

const ScoreGauge = ({ percentage = 56, size = 200, strokeWidth = 20 }) => {
   const radius = (size - strokeWidth) / 2;
   const circumference = radius * Math.PI;
   const strokeDashoffset = circumference - (percentage / 100) * circumference;

   const getColor = () => {
      if (percentage >= 80) {
         return "green";
      } else if (percentage >= 50) {
         return "yellow";
      } else {
         return "red";
      }
   };

   return (
      <div className="relative" style={{ width: size, height: size / 2 }}>
         <svg className="w-full h-full" viewBox={`0 0 ${size} ${size / 2}`}>
            <circle
               className={`text-${getColor()}-500`}
               strokeWidth={strokeWidth}
               strokeDasharray={circumference}
               strokeDashoffset={strokeDashoffset}
               strokeLinecap="round"
               stroke="currentColor"
               fill="transparent"
               r={radius}
               cx={size / 2}
               cy={(size / 4) * 3}
               style={{
                  transform: "rotate(-180deg)",
                  transformOrigin: "50% 50%",
                  transition: "stroke-dashoffset 0.5s ease-in-out",
               }}
            />
         </svg>
         <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{percentage}%</span>
         </div>
      </div>
   );
};

export default ScoreGauge;
