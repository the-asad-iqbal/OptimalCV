import React from "react";

const SectionWithIcon = ({ icon: Icon, title, children }) => (
   <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-4">
         <Icon className="w-6 h-6 mr-2 text-blue-600" />
         <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
   </div>
);

export default SectionWithIcon;
