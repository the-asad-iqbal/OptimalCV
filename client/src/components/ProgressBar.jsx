const ProgressBar = ({ percentage, color = 'bg-blue-500' }) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };