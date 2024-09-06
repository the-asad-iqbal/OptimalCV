import React from 'react';

const ScoreCard = ({ score, issues }) => {
  // Dynamic color based on score
  const scoreColor = score >= 75 ? 'text-green-500' : score >= 50 ? 'text-yellow-500' : 'text-red-500';
  const bgColor = score >= 75 ? 'bg-green-200' : score >= 50 ? 'bg-yellow-200' : 'bg-red-200';

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <div className="relative w-32 h-32 flex justify-center items-center">
        {/* Circular progress background */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-200" />
        
        {/* Dynamic circular progress */}
        <div
          className={`absolute top-0 left-0 w-full h-full rounded-full ${bgColor}`}
          style={{
            clipPath: `inset(0% ${100 - score}% 0% 0%)`,
          }}
        />
        
        {/* Score text */}
        <div className="z-10 flex flex-col justify-center items-center">
          <p className={`text-4xl font-bold ${scoreColor}`}>{score}/100</p>
          <p className="text-gray-500">{issues} Issues</p>
        </div>
      </div>
      <p className="text-lg font-semibold mt-2">Your Score</p>


      
    </div>
  );
};

export default ScoreCard;
