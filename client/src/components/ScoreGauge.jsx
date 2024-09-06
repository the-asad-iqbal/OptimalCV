import React from "react";

const ScoreGauge = ({ percentage = 95, size = 200, strokeWidth = 20 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius; // Half-circle circumference (πr)
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
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${size} ${size / 2}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size / 2} // center X
          cy={size / 2} // move circle down to be half visible
          r={radius} // radius of the circle
          fill="transparent" // no fill
          stroke={getColor()} // dynamic color based on percentage
          strokeWidth={strokeWidth} // stroke width
          strokeDasharray={circumference} // defines the dash pattern of the circle
          strokeDashoffset={strokeDashoffset} // stroke offset for gauge
          strokeLinecap="round" // rounded edges
          style={{
            transform: "rotate(-90deg)", // rotate to start at the bottom
            transformOrigin: "50% 50%", // ensure rotation is centered
            transition: "stroke-dashoffset 0.5s ease-in-out", // smooth transition for animation
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
