import React, { useState, useEffect } from "react";
import { ChevronDown, User } from "lucide-react";
import PersonalInfo from "./PersonalInfo";
import Links from "./Links";
import Skills from "./Skills";
import ResumeSkelton from "./ResumeSkeleton";

const Data = ({ data }) => {
   const { res } = data;

   if (!res) return <ResumeSkelton />;

   return (
      <div className="max-w-4xl mx-auto p-6 bg-[#E3E9F5] w-full min-h-screen h-full rounded-3xl shadow-lg">
         <PersonalInfo personalInfo={res.personalInfo} isPersonalInfo={true} />
         <Links Links={res.Links} isLinks={true} />
         <Skills Skills={res.skills} isSkills={true} />
      </div>
   );
};

export default Data;
