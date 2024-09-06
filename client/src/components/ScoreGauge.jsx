import React from "react";

const ScoreGauge = ({ percentage = 1, size = 200, strokeWidth = 20 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius; // Corrected circumference formula
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
          stroke={getColor()} // Use inline style for stroke color
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transform: "rotate(-90deg)", // Changed rotation to start from the bottom
            transformOrigin: "center",
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
