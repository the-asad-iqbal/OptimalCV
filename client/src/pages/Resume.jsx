import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScoreGauge from "../components/ScoreGauge";

const Resume = () => {
   const { id } = useParams();
   const [resume, setResume] = useState({});

   const handleGetResume = async () => {
      try {
         const response = await fetch(`http://localhost:3000/api/v1/resume/get/${id}`);
         if (response.ok) {
            const data = await response.json();
            setResume(data);
            console.log(data);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      handleGetResume();
   }, []);
   return (
      <div className="h-screen w-screen ">
         <div className="flex justify-between items-start max-w-7xl mx-auto">
            <div className="max-w-[350px] w-full h-full min-h-screen flex flex-col items-center justify-center">
               <div className="w-full h-[calc(100vh-80px)] bg-[#fff] rounded-3xl max-w-[350px] p-10 shadow-lg mx-auto flex items-start justify-center">
                  <div>
                     <ScoreGauge score={20} />
                     <div></div>
                  </div>
               </div>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default Resume;
